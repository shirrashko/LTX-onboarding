
interface User {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    email: string;
    phone: string;
    address: {
      city: string;
      state: string;
      country: string;
    };
    profilePicture: string;
}

  export default User;