import { useState } from "react";
import Toggle from "../../components/toggle/Toggle.tsx";
import Search from "../../components/search/Search";
import Topper from "../../components/topper/Topper.tsx";
import "./UserDetails.scss";
import CreatorCard from "../../components/creator-card/CreatorCard.tsx";
import UserTable from "../../components/user-table/UserTable.tsx";
import { User } from "../../types/user.ts";

interface UserDetailsProps {
  users: User[];
}

function UserDetails({ users }: UserDetailsProps) {
  const [isGridView, setIsGridView] = useState(true);

  // Object to track which filters are active (only one filter at a time)
  const [activeFilter, setActiveFilter] = useState<"cities" | "age" | null>(
    null
  );

  // State to track search query
  const [searchQuery, setSearchQuery] = useState("");

  // Handle grid toggle
  const handleToggle = (view: boolean) => {
    setIsGridView(view);
  };

  // Handle filter click (reset searchQuery when changing filters)
  const handleFilterClick = (filter: "cities" | "age") => {
    setActiveFilter(filter);
    setSearchQuery(""); // Reset search input when filter is switched
  };

  // Handle search input change
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  // Clear search input
  const handleClearSearch = () => {
    setSearchQuery("");
  };

  // Filter users based on the active filter and search query
  const filteredUsers = users.filter((user) => {
    if (activeFilter === "cities" && searchQuery) {
      return user.address.city
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
    }

    if (activeFilter === "age" && searchQuery) {
      return user.age.toString().startsWith(searchQuery);
    }

    return true; // If no filters are active, return all users
  });

  return (
    <div className="user-details-page">
      <Topper />
      <div className="user-details">
        <div className="search-users">
          Search users
          <Search
            value={searchQuery}
            onChange={handleSearchChange}
            onClear={handleClearSearch}
          />
        </div>
        <div className="results-options">
          <div className="results-filters">
            <span>Filter by:</span>
            <button
              className={`cities-filter-button ${
                activeFilter === "cities" ? "active" : ""
              }`}
              onClick={() => handleFilterClick("cities")}
            >
              Cities
            </button>
            <button
              className={`age-filter-button ${
                activeFilter === "age" ? "active" : ""
              }`}
              onClick={() => handleFilterClick("age")}
            >
              Age
            </button>
          </div>
          <div className="results-display">
            <span>{filteredUsers.length} results</span>
            <Toggle isGridView={isGridView} onToggle={handleToggle} />
          </div>
        </div>
        <div className="users-data">
          {isGridView ? (
            <div className="card-mode">
              {filteredUsers.map((user) => (
                <CreatorCard key={user.id} creatorData={user} />
              ))}
            </div>
          ) : (
            <div className="list-mode">
              <UserTable users={filteredUsers} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
