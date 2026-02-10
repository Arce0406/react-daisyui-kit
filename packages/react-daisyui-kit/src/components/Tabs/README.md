# Tabs 元件

此元件已改為資料夾格式，主元件請從 `index.tsx` 匯入。

## 使用方式

```tsx
import Tabs, { TabItem } from './Tabs';

const items: TabItem[] = [
  { id: 'tab1', label: 'Tab 1', content: <div>內容1</div> },
  { id: 'tab2', label: 'Tab 2', content: <div>內容2</div> },
];

<Tabs items={items} />
```

- 支援 controlled/uncontrolled 模式
- 可自訂 variant/size/position
- 支援 icon、disabled

---

請改用 `import Tabs from './Tabs'` 方式引用。
