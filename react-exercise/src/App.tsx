import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UsersDetails from "./pages/usersDetails/UsersDetails.tsx";
import UserProfile from "./pages/userProfile/UserProfile.tsx";
import { fetchUsersSync } from "./usersClientService.ts";
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
    fetchUsersSync(
      () => setFetchState({ type: "progress" }),
      () => setFetchState({ type: "success" }),
      (errorMessage) => setFetchState({ type: "failure", errorMessage })
    );
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
