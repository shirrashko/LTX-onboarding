import { useEffect, useState } from "react";
import { enableMapSet } from "immer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UsersDashboard from "./screens/users-dashboard/UsersDashboard.tsx";
import UserProfile from "./screens/user-profile/UserProfile.tsx";
import { fetchUsers } from "./usersClientService.ts";
import { FetchState } from "./types/fetchUsersState";
import UserDetailsForm from "./screens/user-details-form/UserDetailsForm.tsx";
import "./App.css";

// Enables the use of Map and Set in Immer
enableMapSet();
function App() {
  const [fetchState, setFetchState] = useState<FetchState>({
    type: "progress",
  });

  useEffect(() => {
    fetchUsers({
      onProgress: () => {
        setFetchState({ type: "progress" });
      },
      onSuccess: () => {
        setFetchState({ type: "success" });
      },
      onFailure: (errorMessage) => {
        setFetchState({ type: "failure", errorMessage });
      },
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
        <Route path="/" element={<UsersDashboard />} />
        <Route path="/user-profile/:id" element={<UserProfile />} />
        <Route path="/upsert-user/:id?" element={<UserDetailsForm />} />
      </Routes>
    </Router>
  );
}
export default App;
