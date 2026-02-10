import { forwardRef, useState } from "react";

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

const PasswordInput = forwardRef<HTMLInputElement, InputProps>(({ value = '', onChange, onBlur, error, size = 'md', variant = 'bordered', className = '', type = 'password', showPasswordToggle = true, disabled, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
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
        onChange?.(e.target.value);
    };
    return (
        <div className="relative w-full">
            <input
                ref={ref}
                value={value}
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
                    {showPassword ? '隱藏' : '顯示'}
                </button>
            )}
        </div>
    );
});
PasswordInput.displayName = 'PasswordInput';
export default PasswordInput;
