import { fetchUsers as fetchUsersOnServer, createUser as createUserOnServer, updateUser as updateUserOnServer, deleteUser as deleteUserOnServer } from './usersDBClient';
import { addUser as addUserOnStore, setUsers as setUsersOnStore, updateUser as updateUserOnStore, removeUser as removeUserOnStore} from './stores/usersStore';
import { User } from './types/user';

interface FetchUsersStateCallbacks {
    onProgress: () => void;
    onSuccess: () => void;
    onFailure: (errorMessage: string) => void;
  }

export const fetchUsers = async ({ onProgress, onSuccess, onFailure }: FetchUsersStateCallbacks) => {
  try {
    onProgress();
    const users = await fetchUsersOnServer();
    setUsersOnStore(users);
    onSuccess();
  } catch (error) {
    console.error('Failed to fetch and sync users:', error);
    onFailure('Failed to fetch users. Please try again later.');
  }
};

export const addUser = async (newUser: User) => {
  try {
    const createdUser = await createUserOnServer(newUser);
    addUserOnStore(createdUser);
  } catch (error) {
    console.error('Failed to add user:', error);
  }
};

export const updateUser = async (updatedUser: User) => {
  try {
    const user = await updateUserOnServer(updatedUser);
    updateUserOnStore(user);
  } catch (error) {
    console.error('Failed to update user:', error);
  }
};

export const removeUser = async (userId: string) => {
  try {
    await deleteUserOnServer(userId);
    removeUserOnStore(userId);
  } catch (error) {
    console.error('Failed to remove user:', error);
  }
};
