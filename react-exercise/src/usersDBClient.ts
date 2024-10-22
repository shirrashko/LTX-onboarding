// usersClient.ts
import { User } from "./types/user";

const API_URL = "http://localhost:4000/users";

// Fetch all users
export const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }
  return await response.json();
};

// Add a new user
export const createUser = async (newUser: User): Promise<User> => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  });
  if (!response.ok) {
    throw new Error("Failed to create user");
  }
  return await response.json();
};

// Update an existing user
export const updateUserOnServer = async (updatedUser: User): Promise<User> => {
  const response = await fetch(`${API_URL}/${updatedUser.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedUser),
  });
  if (!response.ok) {
    throw new Error("Failed to update user");
  }
  return await response.json();
};

// Remove a user by ID
export const deleteUser = async (userId: string): Promise<void> => {
  const response = await fetch(`${API_URL}/${userId}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete user");
  }
};