import Toggle from "../../components/Toggle/Toggle";
import Search from "../../components/search/Search";
import Topper from "../../components/Topper/Topper.tsx";
import "./UserDetails.scss";
import CreatorCard from "../../components/creator-card/CreatorCard.tsx";
import defaultProfilePicture from "../../assets/default-profile-picture.svg";

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

function UserDetails() {
  return (
    <div className="user-details-page">
      <Topper />
      <div className="user-details">
        <div className="search-users">
          Search users
          <Search />
        </div>
        <div className="results-options">
          <div className="results-filters">
            <span>Filter by:</span>
            <button className="cities-filter-button">Cities</button>
            <button className="age-filter-button">Age</button>
          </div>
          <div className="results-display">
            <span>22,919 results</span>
            <Toggle />
          </div>
        </div>
        <div className="users-data">
          <CreatorCard creatorData={defaultCreator} />
          <CreatorCard creatorData={defaultCreator} />
          <CreatorCard creatorData={defaultCreator} />

          <CreatorCard creatorData={defaultCreator} />
          <CreatorCard creatorData={defaultCreator} />
          <CreatorCard creatorData={defaultCreator} />

          <CreatorCard creatorData={defaultCreator} />
          <CreatorCard creatorData={defaultCreator} />
          <CreatorCard creatorData={defaultCreator} />
        </div>
      </div>
    </div>
  );
}
export default UserDetails;
