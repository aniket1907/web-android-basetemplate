import { Text, View } from 'react-native';
import Button from '../../components/ui/button';
import Card from '../../components/ui/Card';
import Input from '../../components/ui/Input';
import { useTheme } from '../../theme/themeContext';

export default function Dashboard() {
  const theme = useTheme();

  return (
    <View style={{
      flex: 1,
      backgroundColor: theme.colors.background,
      padding: theme.spacing.md
    }}>
      
      <Card>
        <Text style={{ color: theme.colors.textPrimary }}>
          Welcome to UI Kit 🚀
        </Text>
      </Card>

      <Input placeholder="Enter something..." />

      <Button
        title="Click Me"
        onPress={() => console.log('Pressed')}
      />
      
    </View>
  );
}