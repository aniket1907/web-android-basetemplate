// components/ui/Card.tsx

import { View } from 'react-native';
import { useTheme } from '../../theme/themeContext';

export default function Card({ children }: any) {
  const theme = useTheme();

  return (
    <View
      style={{
        backgroundColor: theme.card.background,
        padding: theme.card.padding,
        borderRadius: theme.card.radius,
        marginBottom: theme.spacing.md,
      }}
    >
      {children}
    </View>
  );
}