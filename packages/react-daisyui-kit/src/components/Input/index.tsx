'use client';

import React, { forwardRef, ReactNode, useCallback } from "react";
import { cn } from "../../utils";
import { RxCross2 } from "react-icons/rx";
import { createContext, useContext } from "react";

const InputGroupContext = createContext<{ isInGroup: boolean }>({ isInGroup: false });

// --- 1. 型別定義 ---

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange" | "color" | "size"> {
  value?: string | FileList;
  onChange?: (value: string | FileList) => void;
  allowClear?: boolean;
  color?: "ghost" | "neutral" | "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  datalist?: {
    listId: string;
    suggestions: string[];
  };
}

// --- 2. 子元件實作 ---

// 2.1 Field: 最外層的 form-control
const InputField = ({ children, className }: { children: ReactNode; className?: string }) => (
  <div className={cn("form-control w-full", className)}>{children}</div>
);

// 2.2 Label: 處理標籤
const InputLabel = ({ children, alt, className }: { children: ReactNode; alt?: boolean; className?: string }) => (
  <div className="label">
    <span className={cn(alt ? "label-text-alt" : "label-text", className)}>{children}</span>
  </div>
);

// 2.3 Group: daisyUI 的「容器式」Input 封裝 (處理 Icon/Kbd)
const InputGroup = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <InputGroupContext.Provider value={{ isInGroup: true }}>
    <label className={cn(
      "input",
      className
    )}>
      {children}
    </label>
  </InputGroupContext.Provider>
);

// 2.4 Helper: 驗證提示文字
const InputHelper = ({ children, className }: { children: ReactNode; className?: string }) => (
  <p className={cn("text-xs mt-1", className)}>{children}</p>
);

const ClearButton = ({ onClick, size }: { onClick: () => void; size?: InputProps['size'] }) => (
  <button
    type="button"
    onClick={(e) => {
      e.preventDefault();
      onClick();
    }}
    className={cn(
      "btn btn-ghost btn-circle btn-xs opacity-50 hover:opacity-100",
      size === "lg" && "btn-sm",
      "h-auto min-h-0 w-6" // 稍微修正尺寸讓它在 input 裡不突兀
    )}
  >
    <RxCross2 className="w-3 h-3" />
  </button>
);

// --- 3. 主元件實作 (Input) ---

const InputMain = forwardRef<HTMLInputElement, InputProps>(
  ({ allowClear, className, value, onChange, color, size, datalist, type, ...props }, ref) => {
    const { isInGroup } = useContext(InputGroupContext);

    const handleClear = useCallback(() => {
      // 根據型別清空值
      if (type === 'file') {
        onChange?.({} as FileList); // 注意：FileList 是唯讀的，實務上通常傳空物件或 null
      } else {
        onChange?.("");
      }
    }, [onChange, type]);

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      // const newValue = type === 'file' ? e.target.files : e.target.value;
      // console.log("Input change", { type, newValue, currentValue: value });

      if (type === 'file') {
        onChange?.(e.target.files as FileList);
      } else {
        onChange?.(e.target.value);
      }
    }, [onChange, type]);

    // 2. 環境與狀態判斷
    const isInsideContainer = isInGroup || allowClear;
    // 判斷是否為受控組件（有傳入 value prop）
    const isControlled = value !== undefined;
    const inputValue = type === 'file' ? undefined : (typeof value === 'string' ? value : undefined);
    const hasValue = type !== 'file' && inputValue !== "" && inputValue !== undefined;
    const colorClasses = {
      primary: 'input-primary',
      secondary: 'input-secondary',
      accent: 'input-accent',
      info: 'input-info',
      success: 'input-success',
      warning: 'input-warning',
      error: 'input-error',
      neutral: 'input-neutral',
      ghost: 'input-ghost',
    };
    const sizeClasses = {
      xs: 'input-xs',
      sm: 'input-sm',
      md: '',
      lg: 'input-lg',
      xl: 'input-xl',
    };
    const colorClass = color ? colorClasses[color] : '';
    const sizeClass = size ? sizeClasses[size] : '';
    // 3. 抽離核心 Input 元素，確保邏輯統一
    const InputElement = (
      <input
        ref={ref}
        type={type}
        {...(isControlled ? { value: inputValue } : {})}
        onChange={handleChange}
        list={datalist?.listId}
        className={cn(
          isInsideContainer && "grow",
          // 只要處於容器模式 (Group 或 allowClear)，就不加 "input" class，避免樣式衝突
          !isInsideContainer && type !== 'file' && "input w-full",
          type === 'file' && "file-input file-input-bordered w-full",
          colorClass,
          sizeClass,
          className
        )}
        {...props}
      />
    );

    const DataListElement = datalist && (
      <datalist id={datalist.listId}>
        {datalist.suggestions.map((item, index) => (
          <option key={index} value={item} />
        ))}
      </datalist>
    )

    // 4. 根據 allowClear 決定最終渲染結構
    if (allowClear) {
      return (
        <label className={cn(
          "input flex items-center gap-2",
          color && colorClasses[color],
          size && sizeClasses[size],
        )}>
          {InputElement}
          {hasValue && <ClearButton onClick={handleClear} size={size} />}
          {DataListElement}
        </label>
      );
    }

    // 獨立模式或在 Input.Group 內部的模式
    return (
      <>
        {InputElement}
        {DataListElement}
      </>
    );
  }
);

// --- 4. 組合並導出 ---

const Input = Object.assign(InputMain, {
  Field: InputField,
  Label: InputLabel,
  Group: InputGroup,
  Helper: InputHelper,
});

InputMain.displayName = "Input";
export default Input;