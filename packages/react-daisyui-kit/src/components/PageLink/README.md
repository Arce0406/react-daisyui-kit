# PageLink 使用範例

## 1. 在 Next.js 專案中使用

首先在應用最外層（如 `_app.tsx` 或 `layout.tsx`）設定 context：

```tsx
import Link, { useLinkStatus } from 'next/link';
import { PageLinkProvider } from '@/contexts/PageLinkContext';

export default function App({ children }) {
  return (
    <PageLinkProvider value={{ LinkComponent: Link, useLinkStatus }}>
      {children}
    </PageLinkProvider>
  );
}
```

然後在任何地方直接使用 PageLink：

```tsx
import PageLink from '@/components/PageLink';

<PageLink href="/about">About</PageLink>
```

## 2. 在純 React 專案中使用

可用 a 標籤或 react-router-dom 的 Link 作為 LinkComponent：

```tsx
import { PageLinkProvider } from '@/contexts/PageLinkContext';

<PageLinkProvider value={{ LinkComponent: 'a' }}>
  <PageLink href="/about">About</PageLink>
</PageLinkProvider>
```

或搭配 react-router-dom：

```tsx
import { Link } from 'react-router-dom';
import { PageLinkProvider } from '@/contexts/PageLinkContext';

<PageLinkProvider value={{ LinkComponent: Link }}>
  <PageLink to="/about">About</PageLink>
</PageLinkProvider>
```

---

- 只需在應用最外層設定一次 PageLinkProvider，之後可在任何地方直接用 PageLink。
- Next.js 可享有 loading/pending 狀態提示，純 React 則不會顯示 loading 標記。
