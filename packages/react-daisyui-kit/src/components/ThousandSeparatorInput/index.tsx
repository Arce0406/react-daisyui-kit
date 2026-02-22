"use client";

import React, { useState } from 'react';

// 協助移除千分位符號、貨幣符號等，只留下數字和小數點
const cleanNumber = (value: string) => {
  return value.replace(/[^\d.]/g, '');
};

// 格式化數字為帶有千分位分隔符的字串
const formatNumber = (value: string) => {
  if (!value) return '';
  const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 20,
  });
  const parts = value.split('.');
  const integerPart = parts[0];
  const decimalPart = parts.length > 1 ? parts[1] : '';
  const formattedInteger = formatter.format(Number(integerPart));
  if (decimalPart !== '') {
    return `${formattedInteger}.${decimalPart}`;
  } else if (value.endsWith('.')) {
    return `${formattedInteger}.`;
  }
  return formattedInteger;
};

export interface ThousandSeparatorInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
  value: string | number;
  onChange: (value: string) => void;
}

export default function ThousandSeparatorInput({
  value,
  onChange,
  className = "input input-bordered w-full",
  ...props
}: ThousandSeparatorInputProps) {
  const [displayValue, setDisplayValue] = useState(formatNumber(String(value)));
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const rawInput = event.target.value;
    const cleaned = cleanNumber(rawInput);
    const newDisplayValue = formatNumber(cleaned);
    setDisplayValue(newDisplayValue);
    onChange(cleaned);
  };
  React.useEffect(() => {
    setDisplayValue(formatNumber(String(value)));
  }, [value]);
  return (
    <input
      type="text"
      value={displayValue}
      onChange={handleChange}
      className={className}
      {...props}
    />
  );
}
