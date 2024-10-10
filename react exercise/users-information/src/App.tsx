import "./App.css";
import { useEffect, useState } from "react";
// import UserList from "./pages/UserList/UserList";
import UserDetails from "./pages/userDetails/UserDetails.tsx";
import { User } from "./types/user.ts";
// import UserRow from "./components/row/UserRow";
// import UserTable from "./components/user-table/UserTable";
// import CreatorPage from "./pages/CreatorPage/CreatorPage";

function App() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users?limit=25")
      .then((res) => res.json())
      .then((data) => setUsers(data.users));
  }, []);

  return (
    <>
      <UserDetails users={users} />
    </>
  );
}

export default App;
