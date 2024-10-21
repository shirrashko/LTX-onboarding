import UsersDetails from "./pages/usersDetails/UsersDetails.tsx";
import { User } from "./types/user.ts";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useUsersStore } from "./stores/usersStore.ts";
import UserProfile from "./pages/userProfile/UserProfile.tsx";
import { useEffect, useState } from "react";
import "./App.css";

// Define a type for fetch state
type FetchState = "loading" | "success" | "error";

function App() {
  const users = useUsersStore((state) => state.users);
  const [fetchState, setFetchState] = useState<FetchState>("loading"); // Manage state with a single variable
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // For error messages

  // Action to update the users state
  const setUsers = (users: User[]) => {
    const usersMap = new Map(users.map((user) => [user.id.toString(), user]));
    useUsersStore.setState({ users: usersMap });
  };

  useEffect(() => {
    setFetchState("loading"); // Set to loading when fetching starts
    fetch("http://localhost:4000/users")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch users");
        }
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setFetchState("success"); // Set to success when data is loaded
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setFetchState("error");
        setErrorMessage("Failed to fetch users. Please try again later.");
      });
  }, []);

  // Conditional rendering based on fetchState
  if (fetchState === "loading") {
    return <p className="loading-message">Loading users...</p>;
  }

  if (fetchState === "error") {
    return <p className="error-message">Error: {errorMessage}</p>;
  }

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
