# react-daisyui-kit

一個基於 React、TypeScript、daisyUI 與 Tailwind CSS 的元件庫 monorepo。

## 專案結構

```plaintext
react-daisyui-kit/
├─ packages/
│  └─ react-daisyui-kit/         # 元件庫主體 (npm package)
├─ websites/
│  └─ demo-client/               # 測試/展示用 Next.js 專案
├─ pnpm-workspace.yaml           # pnpm monorepo 設定
├─ package.json                  # monorepo 管理腳本
```

## 主要技術

- pnpm workspace 管理
- React 18/19
- TypeScript
- Tailwind CSS + daisyUI
- Vite (library mode) 打包

## 線上示範

👉 **[查看 Demo](https://arce0406.github.io/react-daisyui-kit/)**

## 開發流程

1. 安裝依賴

   ```cmd
   pnpm install
   ```

2. 開發元件（在 src）

3. 本地測試（在 demo-client 專案中 import 測試）

   ```cmd
   pnpm --filter demo-client dev
   ```

4. 打包元件庫

   ```cmd
   pnpm --filter react-daisyui-kit build
   ```

   - 產物會在 dist，型別檔在 `dist/types`

5. 發佈到 npm（需先登入）

   ```cmd
   cd packages/react-daisyui-kit
   npm publish
   ```

## 重要說明

- 元件庫所有 peerDependencies（react、daisyui、tailwindcss 等）需由使用者專案自行安裝。
- 型別檔自動產生，無需手動維護。
- 測試專案（websites/demo-client）僅供本地測試，不會被發佈。
