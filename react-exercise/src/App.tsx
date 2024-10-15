import "./App.css";
import { useEffect, useState } from "react";
import UserProfile from "./pages/userProfile/UserProfile.tsx";
import UserDetails from "./pages/usersDetails/UsersDetails.tsx";
import { User } from "./types/user.ts";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.users));
  }, []);
  return (
    <Router>
      <Routes>
        <>
          <Route path="/" element={<UserDetails users={users} />} />
          <Route
            path="/user-profile"
            element={
              users.length > 0 ? (
                <UserProfile user={users[0]} />
              ) : (
                <p>Loading...</p>
              )
            }
          />
        </>
      </Routes>
    </Router>
  );
}
export default App;
