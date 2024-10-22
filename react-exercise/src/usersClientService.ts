import { fetchUsers as fetchUsersOnServer, createUser, updateUser as updateUserOnServer, deleteUser } from './usersDBClient';
import { addUser as addUserOnStore, setUsers as setUsersOnStore, updateUser as updateUserOnStore, removeUser } from './stores/usersStore';
import { User } from './types/user';

interface FetchUsersStateCallbacks {
    onProgress: () => void;
    onSuccess: () => void;
    onFailure: (errorMessage: string) => void;
  }

export const fetchUsers = async ({ onProgress, onSuccess, onFailure }: FetchUsersStateCallbacks) => {
  try {
    onProgress();
    const users = await fetchUsersOnServer(); // Fetch users from the server
    setUsersOnStore(users); // Set users in Zustand store
    onSuccess();
  } catch (error) {
    console.error('Failed to sync users:', error);
    onFailure('Failed to fetch users. Please try again later.');
  }
};

export const addUserSync = async (newUser: User) => {
  try {
    const createdUser = await createUser(newUser); // Add user on the server
    addUserOnStore(createdUser); // Update Zustand store
  } catch (error) {
    console.error('Failed to add user:', error);
  }
};

export const updateUserSync = async (updatedUser: User) => {
  try {
    const user = await updateUserOnServer(updatedUser); // Update user on the server
    updateUserOnStore(user); // Update Zustand store
  } catch (error) {
    console.error('Failed to update user:', error);
  }
};

export const removeUserSync = async (userId: string) => {
  try {
    await deleteUser(userId); // Delete user on the server
    removeUser(userId); // Update Zustand store
  } catch (error) {
    console.error('Failed to remove user:', error);
  }
};
