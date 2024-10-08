import "./App.css";
import UserList from "./pages/UserList/UserList";
import Toggle from "./components/Toggle/Toggle.tsx";
import Search from "./components/search/Search.tsx";
import CreatorCard from "./components/creator-card/CreatorCard.tsx";
import defaultProfilePicture from "./assets/default-profile-picture.svg";

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
      <CreatorCard creatorData={defaultCreator} />
      <Toggle />
      <Search />
      <UserList />
    </>
  );
}

export default App;
