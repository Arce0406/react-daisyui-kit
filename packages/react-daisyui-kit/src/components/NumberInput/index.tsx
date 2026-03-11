"use client";

import { forwardRef, useState } from "react";

// 數字輸入框組件
export interface NumberInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'type' | 'size'> {
    value?: number;
    onChange?: (value: number) => void;
    onBlur?: () => void;
    error?: string | string[];
    size?: 'sm' | 'md' | 'lg';
    precision?: number;
}

const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(({ value, defaultValue, onChange, onBlur, error, size = 'md', precision, className = '', ...props }, ref) => {
    const initialValue = typeof defaultValue === 'number'
        ? defaultValue
        : typeof defaultValue === 'string' && defaultValue !== ''
            ? Number(defaultValue)
            : undefined;
    const [internalValue, setInternalValue] = useState<number | undefined>(() => {
        if (initialValue === undefined || Number.isNaN(initialValue)) {
            return undefined;
        }
        return precision !== undefined
            ? parseFloat(initialValue.toFixed(precision))
            : initialValue;
    });
    const isControlled = value !== undefined;
    const currentValue = isControlled ? value : internalValue;

    const sizeClass = {
        sm: 'input-sm',
        md: '',
        lg: 'input-lg'
    }[size];
    const errorClass = error ? 'input-error' : '';
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const stringValue = e.target.value;
        if (stringValue === '') {
            if (!isControlled) {
                setInternalValue(undefined);
            }
            onChange?.('' as any);
            return;
        }
        let numValue = parseFloat(stringValue);
        if (isNaN(numValue)) {
            return;
        }
        if (precision !== undefined) {
            numValue = parseFloat(numValue.toFixed(precision));
        }
        if (!isControlled) {
            setInternalValue(numValue);
        }
        onChange?.(numValue);
    };
    return (
        <input
            ref={ref}
            type="number"
            value={currentValue !== undefined ? currentValue : ''}
            onChange={handleChange}
            onBlur={onBlur}
            className={`input validator input-bordered w-full ${sizeClass} ${errorClass} ${className}`.trim()}
            {...props}
        />
    );
});
NumberInput.displayName = 'NumberInput';
export default NumberInput;
