import { usePathname, useRouter } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';

export default function WebLayout({ children }: any) {
  const router = useRouter();
  const path = usePathname();

  const menu = [
  { name: 'Dashboard', path: '/dashboard' },
  { name: 'Tab 1', path: '/tab1' },
  { name: 'Tab 2', path: '/tab2' },
];

  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      
      {/* Sidebar */}
      <View style={{ width: 220, backgroundColor: '#111', padding: 20 }}>
        {menu.map((item) => (
          <TouchableOpacity
            key={item.path}
            onPress={() => router.push(item.path)}
            style={{
              padding: 10,
              marginBottom: 10,
              backgroundColor: path === item.path ? '#333' : 'transparent',
            }}
          >
            <Text style={{ color: '#fff' }}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Content */}
      <View style={{ flex: 1 }}>
        {children}
      </View>
    </View>
  );
}