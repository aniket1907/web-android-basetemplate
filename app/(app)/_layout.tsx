import { Ionicons } from '@expo/vector-icons';
import { Stack, Tabs } from 'expo-router';
import { useWindowDimensions } from 'react-native';

export default function AppLayout() {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  if (!isMobile) {
    // 🖥️ WEB → use Stack (no tabs)
    return <Stack screenOptions={{ headerShown: false }} />;
  }

  // 📱 MOBILE → use Tabs
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName: any;

          if (route.name === 'dashboard') iconName = 'home';
          else if (route.name === 'tab1') iconName = 'grid';
          else if (route.name === 'tab2') iconName = 'layers';

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tabs.Screen name="dashboard" />
      <Tabs.Screen name="tab1" />
      <Tabs.Screen name="tab2" />
    </Tabs>
  );
}