"use client";
import React, { useEffect, useState } from "react";
import { THEME_CONSTANTS } from '../../app-constants';
import { useTheme } from '../../hooks/useTheme';

// 官方預設主題（可根據 tailwind.config.js daisyui.theme 設定自訂）
export const defaultThemes = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "luxury",
  "dracula",
  "cmyk",
] as const;

export type ThemeName = typeof defaultThemes[number];

export default function ThemeSwitcher() {
  const { getTheme, setTheme } = useTheme();
  const [current, setCurrent] = useState<string>("light");
  const [mounted, setMounted] = useState(false);

  // 在客户端挂载时初始化主题
  useEffect(() => {
    const savedTheme = getTheme();
    setCurrent(savedTheme);
    setMounted(true);
  }, [getTheme]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const theme = e.target.value;
    setCurrent(theme);
    setTheme(theme);
  };

  // 防止服务器端渲染不匹配
  if (!mounted) {
    return null;
  }

  return (
    <div className="w-auto">
      <select
        className="select select-bordered select-sm w-32"
        onChange={handleChange}
        value={current}
      >
        {defaultThemes?.map((theme) => (
          <option key={theme} value={theme}>
            {theme?.charAt(0).toUpperCase() + theme?.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
}
