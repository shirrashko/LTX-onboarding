import { produce } from 'immer';
import { User } from '../types/user';
import { create } from 'zustand';

interface UsersState {
  users: Map<string, User>;
}

export const useUsersStore = create<UsersState>(() => ({
  users: new Map<string, User>(),
}));

export const setUsers = (users: User[]) => {
  const usersMap = new Map(users.map((user) => [user.id.toString(), user]));
  useUsersStore.setState({ users: usersMap });
};

export const updateUser = (updatedUser: User) => {
  useUsersStore.setState(
    produce((state: UsersState) => {
      state.users.set(updatedUser.id.toString(), updatedUser);
    })
  );
};

export const addUser = (newUser: User) => {
  useUsersStore.setState(
    produce((state: UsersState) => {
      state.users.set(newUser.id.toString(), newUser);
    })
  );
};

export const removeUser = (userId: string) => {
  useUsersStore.setState(
    produce((state: UsersState) => {
      state.users.delete(userId);
    })
  );
};
