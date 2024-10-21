import { useEffect, useState } from "react";
import UserProfile from "./pages/userProfile/UserProfile.tsx";
import UsersDetails from "./pages/usersDetails/UsersDetails.tsx";
import { User } from "./types/user.ts";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useUsersStore } from "./stores/usersStore.ts";

function App() {
  const users = useUsersStore((state) => state.users);

  // Action to update the users state. todo: find out where is best to place it in the code
  const setUsers = (users: User[]) => {
    const usersMap = new Map(users.map((user) => [user.id.toString(), user]));
    useUsersStore.setState({ users: usersMap });
  };

  useEffect(() => {
    fetch("http://localhost:4000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<UsersDetails users={users} />} />

        <Route
          path="/user-profile/:id"
          element={<UserProfile users={users} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
