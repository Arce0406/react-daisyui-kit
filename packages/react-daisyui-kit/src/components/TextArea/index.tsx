'use client';
import { forwardRef, useState } from "react";

// 文字區域組件
export interface TextAreaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'> {
    value?: string;
    onChange?: (value: string) => void;
    onBlur?: () => void;
    error?: string | string[];
    size?: 'sm' | 'md' | 'lg';
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(({
    value,
    onChange,
    onBlur,
    error,
    size = 'md',
    className = '',
    defaultValue,
    ...props
}, ref) => {
    const [internalValue, setInternalValue] = useState(() => {
        if (typeof defaultValue === 'string') return defaultValue;
        if (typeof defaultValue === 'number') return String(defaultValue);
        if (Array.isArray(defaultValue)) return defaultValue.join(',');
        return '';
    });
    const isControlled = value !== undefined;
    const sizeClass = {
        sm: 'textarea-sm',
        md: '',
        lg: 'textarea-lg'
    }[size];
    const errorClass = error ? 'textarea-error' : '';
    return (
        <textarea
            ref={ref}
            value={isControlled ? value : internalValue}
            onChange={(e) => {
                const nextValue = e.target.value;
                if (!isControlled) setInternalValue(nextValue);
                onChange?.(nextValue);
            }}
            onBlur={onBlur}
            className={`textarea textarea-bordered w-full ${sizeClass} ${errorClass} ${className}`.trim()}
            {...(!isControlled ? { defaultValue } : {})}
            {...props}
        />
    );
});
TextArea.displayName = 'TextArea';
export default TextArea;
