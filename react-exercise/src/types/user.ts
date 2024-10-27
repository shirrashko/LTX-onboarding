export interface User {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  birthDate: string;
  image: string;
  address: Address;
  company?: Company;
  university?: string;
  role?: string; // Like 'admin', 'moderator', etc.
}

export interface Address {
  city: string;
  state: string;
  country: string;
}

export interface Company {
  name: string;
  title: string;
  department: string;
}