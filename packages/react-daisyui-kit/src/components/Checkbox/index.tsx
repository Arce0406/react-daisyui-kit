'use client';
import { forwardRef, useState } from "react";

// 複選框組件
export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'size'> {
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    onBlur?: () => void;
    error?: string | string[];
    label?: string;
    size?: 'sm' | 'md' | 'lg';
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({ checked, defaultChecked = false, onChange, onBlur, error, label, size = 'md', className = '', ...props }, ref) => {
    const isControlled = checked !== undefined;
    const [internalChecked, setInternalChecked] = useState(Boolean(defaultChecked));
    const currentChecked = isControlled ? checked : internalChecked;
    const sizeClass = {
        sm: 'checkbox-sm',
        md: '',
        lg: 'checkbox-lg'
    }[size];
    const errorClass = error ? 'checkbox-error' : '';
    const checkbox = (
        <input
            ref={ref}
            type="checkbox"
            checked={currentChecked}
            onChange={(e) => {
                const nextChecked = e.target.checked;
                if (!isControlled) {
                    setInternalChecked(nextChecked);
                }
                onChange?.(nextChecked);
            }}
            onBlur={onBlur}
            className={`checkbox ${sizeClass} ${errorClass} ${className}`.trim()}
            {...props}
        />
    );
    if (label) {
        return (
            <label className="cursor-pointer label">
                {checkbox}
                <span className="label-text ml-2">{label}</span>
            </label>
        );
    }
    return checkbox;
});
Checkbox.displayName = 'Checkbox';
export default Checkbox;
