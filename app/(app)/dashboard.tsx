import { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import Input from '../../components/ui/Input';
import { useTheme } from '../../theme/themeContext';

export default function Dashboard() {
  const theme = useTheme();

  const [name, setName] = useState('');
  const [error, setError] = useState('');

  return (
    <ScrollView
  contentContainerStyle={{
    padding: theme.spacing.md,
    gap: theme.spacing.lg,
    backgroundColor: theme.colors.background,
  }}
  showsVerticalScrollIndicator={false}
>
  {/* All your sections here */}

    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
        padding: theme.spacing.md,
        gap: theme.spacing.lg,
      }}
    >

      {/* ================= CARD SECTION ================= */}
      <View style={{ gap: theme.spacing.sm }}>
        <Text style={{ color: theme.colors.textPrimary }}>
          Cards
        </Text>

        <Card>
          <Text style={{ color: theme.colors.textPrimary }}>
            Default Card
          </Text>
        </Card>

        <Card variant="outlined">
          <Text style={{ color: theme.colors.textPrimary }}>
            Outlined Card
          </Text>
        </Card>

        <Card onPress={() => console.log('Card Clicked')}>
          <Text style={{ color: theme.colors.textPrimary }}>
            Clickable Card
          </Text>
        </Card>
      </View>

      {/* ================= INPUT SECTION ================= */}
      <View style={{ gap: theme.spacing.sm }}>
        <Text style={{ color: theme.colors.textPrimary }}>
          Inputs
        </Text>

        <Input
          label="Name"
          placeholder="Enter your name"
          value={name}
          onChangeText={(text: string) => {
            setName(text);
            if (text) setError('');
          }}
        />

        <Input
          label="With Error"
          placeholder="Try submit empty"
          value={name}
          onChangeText={setName}
          error={error}
        />

        <Button
          title="Validate Input"
          onPress={() => {
            if (!name) {
              setError('Name is required');
            } else {
              console.log('Valid:', name);
            }
          }}
        />
      </View>

      {/* ================= BUTTON SECTION ================= */}
      <View style={{ gap: theme.spacing.sm }}>
        <Text style={{ color: theme.colors.textPrimary }}>
          Buttons
        </Text>

        {/* Primary */}
        <Button title="Primary Button" />

        {/* Variants */}
        <Button title="Outline Button" variant="outline" />
        <Button title="Ghost Button" variant="ghost" />
        <Button title="Danger Button" variant="danger" />

        {/* Sizes */}
        <Button title="Small Button" size="sm" />
        <Button title="Large Button" size="lg" />

        {/* With Icons */}
        <Button title="Add Item" icon="add" />
        <Button title="Next Step" icon="arrow-forward" iconPosition="right" />

        {/* States */}
        <Button title="Loading Button" loading />
        <Button title="Disabled Button" disabled />
      </View>

    </View>
    </ScrollView>
  );
}