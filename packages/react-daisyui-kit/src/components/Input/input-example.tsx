import React from 'react'
import Input from '.'
import { FaSearch } from 'react-icons/fa'

export default function InputExample() {
    return (
        <div>
            {/* 範例 A：最簡單的用法 (維持原狀) */}
            <Input color="primary" placeholder="Type here" />

            {/* 範例 B：帶有 Label 與驗證文字 */}
            <Input.Field>
                <Input.Label>使用者名稱</Input.Label>
                <Input placeholder="Arce..." />
                <Input.Helper className="text-error">此欄位為必填</Input.Helper>
            </Input.Field>

            {/* 範例 C：帶有 Icon 的 daisyUI 樣式 (你提到的新構造) */}
            <Input.Field>
                <Input.Label>搜尋</Input.Label>
                <Input.Group color="secondary">
                    <FaSearch />
                    <Input placeholder="Search..." />
                    <kbd className="kbd kbd-sm">⌘K</kbd>
                </Input.Group>
            </Input.Field>
        </div>
    )
}
