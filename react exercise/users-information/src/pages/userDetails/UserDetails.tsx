import { useState } from "react";
import Toggle from "../../components/toggle/Toggle.tsx";
import Search from "../../components/search/Search";
import Topper from "../../components/topper/Topper.tsx";
import CreatorCard from "../../components/creator-card/CreatorCard.tsx";
import UserTable from "../../components/user-table/UserTable.tsx";
import { User } from "../../types/user.ts";
import { FilterButtons } from "../../components/filter-buttons/FilterButtons.tsx";
import "./UserDetails.scss";

export enum FilterType {
  Cities = "cities",
  Age = "age",
}

interface UserDetailsProps {
  users: User[];
}

const filterUsers = (
  users: User[],
  activeFilter: FilterType | null,
  searchQuery: string
): User[] => {
  return users.filter((user) => {
    if (activeFilter === FilterType.Cities && searchQuery) {
      return user.address.city
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
    }
    if (activeFilter === FilterType.Age && searchQuery) {
      return user.age.toString().startsWith(searchQuery);
    }
    return true; // If no filters are active, return all users
  });
};

function UserDetails({ users }: UserDetailsProps) {
  const [isGridView, setIsGridView] = useState(true);
  const [activeFilter, setActiveFilter] = useState<FilterType | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Handle grid toggle
  const handleToggle = (view: boolean) => {
    setIsGridView(view);
  };

  // Handle filter click (reset searchQuery when changing filters)
  const handleFilterClick = (filter: FilterType) => {
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

  // Filter users using the helper function
  const filteredUsers = filterUsers(users, activeFilter, searchQuery);

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
          <FilterButtons
            activeFilter={activeFilter}
            onFilterClick={handleFilterClick}
          />
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
