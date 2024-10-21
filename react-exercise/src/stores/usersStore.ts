import { User } from '../types/user';
import { create } from 'zustand';

interface UsersState {
  users: Map<string, User>;
}

export const useUsersStore = create<UsersState>(() => ({
  users: new Map<string, User>(),
}));