"use client";

import React, { createContext, useContext } from 'react';

export interface PageLinkContextValue {
  LinkComponent: React.ElementType;
  useLinkStatus?: () => { pending: boolean };
}

const PageLinkContext = createContext<PageLinkContextValue | undefined>(undefined);

export const PageLinkProvider = PageLinkContext.Provider;

export function usePageLinkContext() {
  const ctx = useContext(PageLinkContext);
  if (!ctx) throw new Error('PageLink must be used within a PageLinkProvider');
  return ctx;
}
