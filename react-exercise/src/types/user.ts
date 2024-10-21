export interface User {
  id: number;
  firstName: string;
  lastName: string;
  maidenName?: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  height?: number;
  weight?: number;
  eyeColor?: string;
  address: Address;
  macAddress?: string;
  university?: string;
  role?: string; // Like 'admin', 'moderator', etc.
}

export interface Address {
  city: string;
  state: string;
  country: string;
  postalCode: string;
}