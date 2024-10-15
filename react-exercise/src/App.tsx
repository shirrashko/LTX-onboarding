import "./App.css";
import { useEffect, useState } from "react";
import UserProfile from "./pages/userProfile/UserProfile.tsx";
import { User } from "./types/user.ts";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.users));
  }, []);
  return (
    <>
      {users.length > 0 ? <UserProfile user={users[0]} /> : <p>Loading...</p>}
    </>
  );
}
export default App;
