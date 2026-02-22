"use client";
import React from 'react';
import { usePageLinkContext } from '../../contexts/PageLinkContext';

function Hint({ useLinkStatus }: { useLinkStatus?: () => { pending: boolean } }) {
    const pending = useLinkStatus ? useLinkStatus().pending : false;
    if (!pending) return null;
    return <span className="loading loading-spinner loading-sm" />;
}

interface PageLinkProps {
    children?: React.ReactNode;
    [key: string]: any;
}

export default function PageLink({ children, ...props }: PageLinkProps) {
    const { LinkComponent, useLinkStatus } = usePageLinkContext();
    return (
        <LinkComponent {...props}>
            {children}
            <Hint useLinkStatus={useLinkStatus} />
        </LinkComponent>
    );
}