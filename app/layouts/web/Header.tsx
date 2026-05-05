import { Text, TouchableOpacity, View } from 'react-native';

export default function Header({ onToggle, theme }: any) {
  return (
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
      <TouchableOpacity onPress={onToggle}>
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
  );
}