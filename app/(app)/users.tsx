import { useEffect, useState } from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';

import DeleteModal from '../../components/elements/DeleteModal';
import UserModal from '../../components/elements/UserModal';

import UserService from '../../services/users/user.Service';

import { useTheme } from '../../theme/themeContext';

export default function UsersScreen() {
  const theme = useTheme();

  const [users, setUsers] = useState<any[]>([]);

  const [openModal, setOpenModal] = useState(false);

  const [deleteModal, setDeleteModal] =
    useState(false);

  const [selectedUser, setSelectedUser] =
    useState<any>(null);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const response =
        await UserService.getUsers();
console.log('response',response);

      setUsers(response.data || []);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <ScrollView
        contentContainerStyle={{
          padding: theme.spacing.md,
          gap: theme.spacing.md,
          backgroundColor: theme.colors.background,
        }}
      >
        {/* HEADER */}

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              fontSize: 28,
              color: theme.colors.textPrimary,
            }}
          >
            Users
          </Text>

          <Button
            title="Add User"
            icon="add"
            onPress={() => {
              setSelectedUser(null);
              setOpenModal(true);
            }}
          />
        </View>

        {/* USERS */}

        <View style={{ gap: 15 }}>
          {users.map((user: any) => (
            <Card key={user.id}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <View>
                  <Text
                    style={{
                      color:
                        theme.colors.textPrimary,
                      fontSize: 18,
                    }}
                  >
                    {user.name}
                  </Text>

                  <Text
                    style={{
                      color:
                        theme.colors.textSecondary,
                    }}
                  >
                    {user.email}
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    gap: 15,
                  }}
                >
                  <TouchableOpacity
                    onPress={() => {
                      setSelectedUser(user);
                      setOpenModal(true);
                    }}
                  >
                    <Text style={{ fontSize: 20 }}>
                      ✏️
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => {
                      setSelectedUser(user);
                      setDeleteModal(true);
                    }}
                  >
                    <Text style={{ fontSize: 20 }}>
                      🗑️
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Card>
          ))}
        </View>
      </ScrollView>

      {/* USER MODAL */}

      <UserModal
        visible={openModal}
        onClose={() => setOpenModal(false)}
        selectedUser={selectedUser}
        reload={loadUsers}
      />

      {/* DELETE MODAL */}

      <DeleteModal
        visible={deleteModal}
        onClose={() => setDeleteModal(false)}
        selectedUser={selectedUser}
        reload={loadUsers}
      />
    </>
  );
}