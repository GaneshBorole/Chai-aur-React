import React from 'react'
import { createContext,useContext } from 'react'

export const ThemeContext = createContext({
  themeMode: 'light',
  darktheme: () => {},
  lighttheme: () => {},

});

export const themeProvider = ThemeContext.Provider;
export default function useTheme() {
  return useContext(ThemeContext);
}
