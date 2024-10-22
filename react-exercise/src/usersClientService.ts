import { fetchUsers, createUser, updateUserOnServer, deleteUser } from './usersDBClient';
import { addUser, setUsers, updateUser, removeUser } from './stores/usersStore';
import { User } from './types/user';

// Sync all users from server to Zustand store
export const fetchUsersSync = async (
  onProgress: () => void,
  onSuccess: () => void,
  onFailure: (errorMessage: string) => void
) => {
  try {
    onProgress();
    const users = await fetchUsers(); // Fetch users from the server
    setUsers(users); // Set users in Zustand store
    onSuccess();
  } catch (error) {
    console.error('Failed to sync users:', error);
    onFailure('Failed to fetch users. Please try again later.');
  }
};

// Add a new user (sync with both server and store)
export const addUserSync = async (newUser: User) => {
  try {
    const createdUser = await createUser(newUser); // Add user on the server
    addUser(createdUser); // Update Zustand store
  } catch (error) {
    console.error('Failed to add user:', error);
  }
};

// Update an existing user (sync with both server and store)
export const updateUserSync = async (updatedUser: User) => {
  try {
    const user = await updateUserOnServer(updatedUser); // Update user on the server
    updateUser(user); // Update Zustand store
  } catch (error) {
    console.error('Failed to update user:', error);
  }
};

// Remove a user (sync with both server and store)
export const removeUserSync = async (userId: string) => {
  try {
    await deleteUser(userId); // Delete user on the server
    removeUser(userId); // Update Zustand store
  } catch (error) {
    console.error('Failed to remove user:', error);
  }
};
