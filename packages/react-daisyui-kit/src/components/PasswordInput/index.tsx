"use client";

import { forwardRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

// 密碼輸入框組件
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'size' | 'value'> {
    value?: string;
    onChange?: (value: string | FileList) => void;
    onBlur?: () => void;
    error?: string | string[];
    size?: 'sm' | 'md' | 'lg';
    variant?: 'bordered' | 'ghost' | 'primary';
    showPasswordToggle?: boolean;
    type?: 'password' | 'text';
}

const PasswordInput = forwardRef<HTMLInputElement, InputProps>(({ value, defaultValue, onChange, onBlur, error, size = 'md', variant = 'bordered', className = '', type = 'password', showPasswordToggle = true, disabled, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const [internalValue, setInternalValue] = useState(() => {
        if (typeof defaultValue === 'string') return defaultValue;
        if (typeof defaultValue === 'number') return String(defaultValue);
        if (Array.isArray(defaultValue)) return defaultValue.join(',');
        return '';
    });
    const isControlled = value !== undefined;
    const currentValue = isControlled ? value : internalValue;
    const isPasswordField = type === "password";
    const currentType = isPasswordField && showPassword ? "text" : type;
    const sizeClass = {
        sm: 'input-sm',
        md: '',
        lg: 'input-lg'
    }[size];
    const variantClass = {
        bordered: 'input-bordered',
        ghost: 'input-ghost',
        primary: 'input-primary'
    }[variant];
    const errorClass = error ? 'input-error' : '';
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const nextValue = e.target.value;
        if (!isControlled) {
            setInternalValue(nextValue);
        }
        onChange?.(nextValue);
    };
    return (
        <div className="relative w-full">
            <input
                ref={ref}
                value={currentValue}
                type={currentType}
                onChange={handleChange}
                onBlur={onBlur}
                disabled={disabled}
                className={`input w-full ${sizeClass} ${variantClass} ${errorClass} ${className}`.trim()}
                {...props}
            />
            {isPasswordField && showPasswordToggle && (
                <button
                    type="button"
                    tabIndex={-1}
                    className="absolute right-2 top-1/2 -translate-y-1/2 btn btn-ghost btn-xs"
                    onClick={() => setShowPassword((v) => !v)}
                >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
            )}
        </div>
    );
});
PasswordInput.displayName = 'PasswordInput';
export default PasswordInput;
