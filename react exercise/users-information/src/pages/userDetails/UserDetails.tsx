import { useState } from "react";
import Toggle from "../../components/toggle/Toggle.tsx";
import Search from "../../components/search/Search";
import Topper from "../../components/Topper/Topper.tsx";
import "./UserDetails.scss";
import CreatorCard from "../../components/creator-card/CreatorCard.tsx";
import UserTable from "../../components/user-table/UserTable.tsx";
import { User } from "../../types/user.ts";

interface UserDetailsProps {
  users: User[];
}

function UserDetails({ users }: UserDetailsProps) {
  const [isGridView, setIsGridView] = useState(true);

  const handleToggle = (view: boolean) => {
    setIsGridView(view); // Update the view based on toggle
  };

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
            <Toggle isGridView={isGridView} onToggle={handleToggle} />
          </div>
        </div>
        <div className="users-data">
          {isGridView ? ( // Conditional rendering based on isGridView state
            <div className="card-mode">
              {users.map((user) => (
                <CreatorCard key={user.id} creatorData={user} />
              ))}
            </div>
          ) : (
            <div className="list-mode">
              <UserTable users={users} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
