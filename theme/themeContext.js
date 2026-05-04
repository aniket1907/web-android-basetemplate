import React, { createContext, useContext } from 'react';
import { useColorScheme } from 'react-native';
import colors from './colors';
import spacing from './spacing';
import typography from './typography';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const scheme = useColorScheme();

  const baseColors = scheme === 'dark' ? colors.dark : colors.light;

  const theme = {
    ...baseColors,
    spacing,
    typography,
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);