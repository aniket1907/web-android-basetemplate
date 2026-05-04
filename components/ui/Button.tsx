// components/ui/Button.tsx

import { Text, TouchableOpacity } from 'react-native';
import { useTheme } from '../../theme/themeContext';

export default function Button({ title, onPress }: any) {
  const theme = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: theme.button.background,
        padding: theme.spacing.md,
        borderRadius: theme.button.radius,
        alignItems: 'center',
      }}
    >
      <Text
        style={{
          color: theme.button.text,
          fontSize: theme.typography.body,
          fontFamily: theme.typography.fontFamily,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}