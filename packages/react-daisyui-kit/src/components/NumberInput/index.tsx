import { forwardRef } from "react";

// 數字輸入框組件
export interface NumberInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'type' | 'size'> {
    value?: number;
    onChange?: (value: number) => void;
    onBlur?: () => void;
    error?: string | string[];
    size?: 'sm' | 'md' | 'lg';
    precision?: number;
}

const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(({ value, onChange, onBlur, error, size = 'md', precision, className = '', ...props }, ref) => {
    const sizeClass = {
        sm: 'input-sm',
        md: '',
        lg: 'input-lg'
    }[size];
    const errorClass = error ? 'input-error' : '';
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const stringValue = e.target.value;
        if (stringValue === '') {
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
        onChange?.(numValue);
    };
    return (
        <input
            ref={ref}
            type="number"
            value={value !== undefined ? value : ''}
            onChange={handleChange}
            onBlur={onBlur}
            className={`input validator input-bordered w-full ${sizeClass} ${errorClass} ${className}`.trim()}
            {...props}
        />
    );
});
NumberInput.displayName = 'NumberInput';
export default NumberInput;
