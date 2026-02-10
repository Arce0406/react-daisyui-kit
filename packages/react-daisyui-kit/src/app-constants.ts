export const THEME_CONSTANTS = {
  // LocalStorage Keys
  PREFERENCE_THEME_KEY: "preference-theme",
} as const;

export enum Breakpoint {
  XS = "xs",
  SM = "sm",
  MD = "md",
  LG = "lg",
  XL = "xl",
}
export const breakpoints = [Breakpoint.XS, Breakpoint.SM, Breakpoint.MD, Breakpoint.LG, Breakpoint.XL] as const;

export const UI_CONSTANTS = {
  // 載入狀態文字
  LOADING_TEXT: "載入中...",
  SAVING_TEXT: "儲存中...",
  DELETING_TEXT: "刪除中...",
  SUBMITTING_TEXT: "提交中...",

  // 通用按鈕文字
  SAVE_BUTTON: "儲存",
  CANCEL_BUTTON: "取消",
  DELETE_BUTTON: "刪除",
  EDIT_BUTTON: "編輯",
  CREATE_BUTTON: "建立",
  ADD_BUTTON: "新增",

  // 確認訊息
  DELETE_CONFIRMATION: "確定要刪除這個項目嗎？此操作無法復原。",
  UNSAVED_CHANGES_WARNING: "您有未儲存的變更，確定要離開嗎？",
} as const;

// ==================== 驗證相關 ====================
export const VALIDATION_CONSTANTS = {
  // 正則表達式
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE_REGEX: /^[\d\s\-\+\(\)]+$/,
} as const;

// ==================== 預設值 ====================
export const DEFAULT_VALUES = {
  // 分頁
  PAGE_SIZE: 10,
  DEFAULT_PAGE: 1,

  // 排序
  DEFAULT_SORT_ORDER: 0,

  // 菜單項目
  DEFAULT_ITEM_PRICE: 0,
  DEFAULT_ITEM_AVAILABLE: true,

  // 未分類名稱
  UNCATEGORIZED_NAME: "未分類",
} as const;

// ==================== 類型導出 ====================
export type UiConstantsType = typeof UI_CONSTANTS;
export type ValidationConstantsType = typeof VALIDATION_CONSTANTS;
export type DefaultValuesType = typeof DEFAULT_VALUES;
