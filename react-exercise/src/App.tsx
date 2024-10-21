import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { setUsers } from "./stores/usersStore.ts";
import UsersDetails from "./pages/usersDetails/UsersDetails.tsx";
import UserProfile from "./pages/userProfile/UserProfile.tsx";
import { FetchState } from "./types/fetchUsersState";
import "./App.css";
import { enableMapSet } from "immer";

// Enables the use of Map and Set in Immer
enableMapSet();

function App() {
  const [fetchState, setFetchState] = useState<FetchState>({
    type: "progress",
  });

  useEffect(() => {
    setFetchState({ type: "progress" });
    fetch("http://localhost:4000/users")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch users");
        }
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setFetchState({ type: "success" });
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setFetchState({
          type: "failure",
          errorMessage: "Failed to fetch users. Please try again later.",
        });
      });
  }, []);

  if (fetchState.type === "progress") {
    return <p className="loading-message">Loading users...</p>;
  } else if (fetchState.type === "failure") {
    return <p className="error-message">Error: {fetchState.errorMessage}</p>;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<UsersDetails />} />
        <Route path="/user-profile/:id" element={<UserProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
