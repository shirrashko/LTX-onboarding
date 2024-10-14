import "./App.css";
import { useEffect, useState } from "react";
import UsersDetails from "./pages/usersDetails/UsersDetails.tsx";
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
      <UsersDetails users={users} />
    </>
  );
}
export default App;
