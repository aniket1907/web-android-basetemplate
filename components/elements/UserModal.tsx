import { useEffect, useState } from 'react';
import {
    Modal,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import Button from '../ui/Button';
import Card from '../ui/Card';
import Input from '../ui/Input';

import UserService from '../../services/users/user.Service';
import { useTheme } from '../../theme/themeContext';

export default function UserModal({
    visible,
    onClose,
    selectedUser,
    reload,
}: any) {
    const theme = useTheme();

    const [loading, setLoading] = useState(false);

    const [name, setname] = useState('');
    const [password, setpassword] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        if (selectedUser) {
            setname(selectedUser.name || '');
            setpassword(selectedUser.password || '');
            setEmail(selectedUser.email || '');
        } else {
            resetForm();
        }
    }, [selectedUser]);

    const resetForm = () => {
        setname('');
        setpassword('');
        setEmail('');
    };

    const onSubmit = async () => {
        try {
            setLoading(true);

            const payload = {
                name: name,
                password: password,
                email,
            };

            if (selectedUser) {
                await UserService.updateUser(
                    selectedUser.id,
                    payload
                );
            } else {
                await UserService.createUser(payload);
            }

            reload();

            onClose();

            resetForm();

        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Modal
      visible= { visible }
    transparent
    animationType = "fade"
        >
        <View
        style={
        {
            flex: 1,
                justifyContent: 'center',
                    alignItems: 'center',
                        backgroundColor: 'rgba(0,0,0,0.4)',
                            padding: 20,
        }
    }
      >
        <Card
          style={
        {
            width: '100%',
                maxWidth: 500,
          }
    }
        >
        <Text
            style={
        {
            fontSize: theme.typography.h3,
                color: theme.colors.textPrimary,
                    marginBottom: theme.spacing.md,
            }
    }
          >
        { selectedUser? 'Edit User': 'Add User' }
        </Text>

        < View style = {{ gap: 15 }
}>

    <Input
              label="First Name"
value = { name }
onChangeText = { setname }
placeholder = "Enter first name"
    />

    <Input
              label="Last Name"
value = { password }
onChangeText = { setpassword }
placeholder = "Enter last name"
    />

    <Input
              label="Email"
value = { email }
onChangeText = { setEmail }
placeholder = "Enter email"
    />

    <View
              style={
    {
        flexDirection: 'row',
            justifyContent: 'flex-end',
                gap: 10,
                    marginTop: 10,
              }
}
            >
    <TouchableOpacity onPress={ onClose }>
        <Text
                  style={
    {
        color: theme.colors.textSecondary,
                  }
}
                >
    Cancel
    </Text>
    </TouchableOpacity>

    < Button
title = {
    selectedUser
    ? 'Update User'
        : 'Create User'
}
onPress = { onSubmit }
loading = { loading }
    />
    </View>
    </View>
    </Card>
    </View>
    </Modal>
  );
}