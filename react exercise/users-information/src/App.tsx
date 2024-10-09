import "./App.css";
// import UserList from "./pages/UserList/UserList";
// import UserDetails from "./pages/userDetails/UserDetails.tsx";
// import UserRow from "./components/row/UserRow";
import defaultProfilePicture from "./assets/default-profile-picture.svg";
import UserTable from "./components/user-table/UserTable";

const defaultCreator = {
  id: 1,
  firstName: "Emily",
  lastName: " Johnson",
  age: 34,
  email: "email@x.dummyjson.com",
  phone: "123-456-789",
  address: {
    city: "Chicago",
    state: "IL",
    country: "IL",
  },
  profilePicture: defaultProfilePicture,
};

function App() {
  return (
    <>
      {/* <UserDetails /> */}
      {/* <UserList /> */}
      <UserTable users={[defaultCreator, defaultCreator, defaultCreator]} />
    </>
  );
}

export default App;
