// components/ui/Input.tsx

import { TextInput } from 'react-native';
import { useTheme } from '../../theme/themeContext';

export default function Input(props: any) {
  const theme = useTheme();

  return (
    <TextInput
      {...props}
      placeholderTextColor={theme.colors.textSecondary}
      style={{
        borderWidth: 1,
        borderColor: theme.colors.border,
        padding: theme.spacing.md,
        borderRadius: theme.radius.md,
        fontSize: theme.typography.body,
        color: theme.colors.textPrimary,
        marginBottom: theme.spacing.md,
      }}
    />
  );
}