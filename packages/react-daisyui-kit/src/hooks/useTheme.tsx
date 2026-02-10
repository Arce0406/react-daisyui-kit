// useTheme.tsx
// set theme based on localStorage value
// export getTheme and setTheme functions
import { THEME_CONSTANTS } from '../app-constants';
import { useCallback } from 'react';

export function useTheme() {
    const getTheme = useCallback(() => {
        if (typeof window === 'undefined') return 'light';
        return localStorage.getItem(THEME_CONSTANTS.PREFERENCE_THEME_KEY) || 'light';
    }, []);

    const setTheme = useCallback((newTheme: string) => {
        if (typeof window === 'undefined') return;
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem(THEME_CONSTANTS.PREFERENCE_THEME_KEY, newTheme);
    }, []);

    const initializeTheme = useCallback(() => {
        if (typeof window === 'undefined') return;
        const savedTheme = localStorage.getItem(THEME_CONSTANTS.PREFERENCE_THEME_KEY) || 'light';
        document.documentElement.setAttribute("data-theme", savedTheme);
    }, []);

    return { getTheme, setTheme, initializeTheme };
}