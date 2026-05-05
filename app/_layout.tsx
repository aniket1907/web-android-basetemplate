import { Slot } from 'expo-router';
import { useWindowDimensions } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from '../theme/themeContext';

import MobileLayout from './layouts/MobileLayout';
import WebLayout from './layouts/web/WebLayout';

export default function RootLayout() {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  const Layout = isMobile ? MobileLayout : WebLayout;

  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <Layout>
          <Slot />
        </Layout>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}