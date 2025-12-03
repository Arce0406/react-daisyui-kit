import './index.css';
import React from "react";

export interface SampleProps {
  text?: string;
}

/**
 * _Sample 元件：展示 daisyUI 樣式的簡單元件
 */
export const _Sample: React.FC<SampleProps> = ({ text = "Hello daisyUI!" }) => {
  return (
    <div className="p-4 rounded-lg bg-base-200 text-base-content shadow-md">
      <span className="font-bold text-primary">{text}</span>
    </div>
  );
};
