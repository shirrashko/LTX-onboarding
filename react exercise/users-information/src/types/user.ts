export interface User {
  id: number;
  firstName: string;
  lastName: string;
  maidenName?: string; // Optional, since not all users may have it
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup?: string; // Optional field
  height?: number; // Optional field
  weight?: number; // Optional field
  eyeColor?: string; // Optional field
  hair?: Hair; // Optional field
  ip?: string; // Optional field
  address: Address;
  macAddress?: string; // Optional field
  university?: string; // Optional field
  bank?: Bank; // Optional field
  company?: Company; // Optional field
  ein?: string; // Optional field
  ssn?: string; // Optional field
  userAgent?: string; // Optional field
  crypto?: Crypto; // Optional field
  role?: string; // Optional, like 'admin', 'moderator', etc.
}

export interface Hair {
  color: string;
  type: string;
}

export interface Address {
  address: string;
  city: string;
  state: string;
  stateCode: string;
  postalCode: string;
  coordinates: Coordinates;
  country: string;
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Bank {
  cardExpire: string;
  cardNumber: string;
  cardType: string;
  currency: string;
  iban: string;
}

export interface Company {
  department: string;
  name: string;
  title: string;
  address: Address; // Reuse the Address interface for company address
}

export interface Crypto {
  coin: string;
  wallet: string;
  network: string;
}

// Default user object
// export interface User {
//   id: number;
//   firstName: string;
//   lastName: string;
//   age: number;
//   email: string;
//   phone: string;
//   address: {
//     city: string;
//     state: string;
//     country: string;
//   };
//   profilePicture: string;
// }