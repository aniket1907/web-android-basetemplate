import { useColorScheme } from 'react-native';
import colors from './colors';

export default function useTheme() {
  const scheme = useColorScheme(); // 'light' or 'dark'

  return scheme === 'dark' ? colors.dark : colors.light;
}