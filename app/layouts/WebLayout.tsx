import { usePathname, useRouter } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import {
  Animated,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useTheme } from '../../theme/themeContext';

export default function WebLayout({ children }: any) {
  const router = useRouter();
  const path = usePathname();
  const theme = useTheme();

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const sidebarAnim = useRef(new Animated.Value(-220)).current;

  const menu = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Tab 1', path: '/tab1' },
    { name: 'Tab 2', path: '/tab2' },
  ];

  // 🔥 Animate sidebar
  useEffect(() => {
    Animated.timing(sidebarAnim, {
      toValue: isSidebarOpen ? 0 : -220,
      duration: 250,
      useNativeDriver: true,
    }).start();
  }, [isSidebarOpen]);

  return (
    <View style={{ flex: 1 }}>

      {/* ================= HEADER ================= */}
      <View
        style={{
          height: 60,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          borderBottomWidth: 1,
          borderColor: theme.colors.border,
          backgroundColor: theme.colors.surface,
          zIndex: 10,
        }}
      >
        <TouchableOpacity onPress={() => setSidebarOpen(true)}>
          <Text style={{ fontSize: 18 }}>☰</Text>
        </TouchableOpacity>

        <Text
          style={{
            color: theme.colors.textPrimary,
            fontSize: theme.typography.h3,
          }}
        >
          My App
        </Text>

        <View />
      </View>

      {/* ================= BODY ================= */}
      <View style={{ flex: 1, flexDirection: 'row' }}>

        {/* 🔥 OVERLAY */}
        {isSidebarOpen && (
          <Pressable
            onPress={() => setSidebarOpen(false)}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0,0,0,0.3)',
              zIndex: 5,
            }}
          />
        )}

        {/* ================= SIDEBAR ================= */}
        <Animated.View
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: 220,
            backgroundColor: theme.colors.surface,
            padding: 20,
            borderRightWidth: 1,
            borderColor: theme.colors.border,
            transform: [{ translateX: sidebarAnim }],
            zIndex: 10,
          }}
        >
          {/* Close */}
          <TouchableOpacity
            onPress={() => setSidebarOpen(false)}
            style={{ marginBottom: 20 }}
          >
            <Text style={{ color: theme.colors.primary }}>Close ✕</Text>
          </TouchableOpacity>

          {menu.map((item) => (
            <TouchableOpacity
              key={item.path}
              onPress={() => {
                router.replace(item.path);
                setSidebarOpen(false);
              }}
              style={{
                padding: 12,
                marginBottom: 8,
                borderRadius: 8,
                backgroundColor:
                  path === item.path
                    ? theme.colors.primary
                    : 'transparent',
              }}
            >
              <Text
                style={{
                  color:
                    path === item.path
                      ? '#fff'
                      : theme.colors.textPrimary,
                }}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}
        </Animated.View>

        {/* ================= CONTENT ================= */}
        <ScrollView
          contentContainerStyle={{
            padding: theme.spacing.md,
            backgroundColor: theme.colors.background,
            flexGrow: 1,
          }}
          showsVerticalScrollIndicator={false}
        >
          {children}
        </ScrollView>
      </View>

      {/* ================= FOOTER ================= */}
      <View
        style={{
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
          borderTopWidth: 1,
          borderColor: theme.colors.border,
          backgroundColor: theme.colors.surface,
        }}
      >
        <Text style={{ color: theme.colors.textSecondary }}>
          © 2026 Your Company
        </Text>
      </View>
    </View>
  );
}