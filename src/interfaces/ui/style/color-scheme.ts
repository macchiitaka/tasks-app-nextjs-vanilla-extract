import { createContext, useContext } from 'react';

export const ColorSchemeContext = createContext<'light' | 'dark'>('light');
export const useColorScheme = () => useContext(ColorSchemeContext);
