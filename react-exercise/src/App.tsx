import { useEffect, useState } from "react";
import UserProfile from "./pages/userProfile/UserProfile.tsx";
import UsersDetails from "./pages/usersDetails/UsersDetails.tsx";
import { User } from "./types/user.ts";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [users, setUsers] = useState<User[]>([]);

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
