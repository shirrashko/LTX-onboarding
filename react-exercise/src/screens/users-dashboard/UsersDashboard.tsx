import { useState, useRef, useEffect } from "react";
import Toggle from "../../components/toggle/Toggle.tsx";
import Search from "../../components/search/Search.tsx";
import Topper from "../../components/topper/Topper.tsx";
import CreatorCard from "../../components/creator-card/CreatorCard.tsx";
import UserTable from "../../components/user-table/UserTable.tsx";
import { User } from "../../types/user.ts";
import { FilterButtons } from "../../components/filter-buttons/FilterButtons.tsx";
import { FilterType } from "../../types/filter.ts";
import "./UsersDashboard.scss";
import { useUsersStore } from "../../stores/usersStore.ts";
import AddUser from "../../components/add-user/AddUser.tsx";

function UsersDashboard() {
  const users = useUsersStore((state) => state.users);

  const [isGridView, setIsGridView] = useState(true);
  const [activeFilter, setActiveFilter] = useState<FilterType>("Cities");
  const [searchQuery, setSearchQuery] = useState("");

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);

  useEffect(() => {
    const savedUserId = localStorage.getItem("selectedUserId");
    if (savedUserId) {
      setSelectedUserId(savedUserId);
      localStorage.removeItem("selectedUserId");
    }
  }, []);

  useEffect(() => {
    if (selectedUserId && scrollRef.current) {
      // Use requestAnimationFrame to delay the scroll until the next frame
      requestAnimationFrame(() => {
        scrollRef.current?.scrollIntoView({
          behavior: "auto", // Instant scroll
          block: "center",
        });
      });
    }
  }, [selectedUserId]);

  // Handle grid toggle
  const handleToggle = (view: boolean) => {
    setIsGridView(view);
  };

  // Handle filter click (reset searchQuery when changing filters)
  const handleFilterClick = (filter: FilterType) => {
    setActiveFilter(filter);
    setSearchQuery(""); // Reset search input when filter is switched
  };

  // Clear search input
  const handleClearSearch = () => {
    setSearchQuery("");
  };

  // Filter users using the helper function
  const filteredUsers = filterUsers(users, searchQuery, activeFilter);

  return (
    <div className="user-dashboard-page">
      <Topper />
      <div className="user-dashboard">
        <div className="search-users">
          Search users
          <Search
            value={searchQuery}
            onChange={setSearchQuery}
            onClear={handleClearSearch}
          />
        </div>
        <div className="results-section">
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
                <CreatorCard
                  key={user.id}
                  user={user}
                  ref={user.id === selectedUserId ? scrollRef : undefined} // Pass ref only to the selected user
                />
              ))}
            </div>
          ) : (
            <div className="list-mode">
              <UserTable users={filteredUsers} />
            </div>
          )}
        </div>
      </div>
      <div className="add-user">
        <AddUser />
      </div>
    </div>
  );
}

export default UsersDashboard;

// Helper function to filter users based on search query and filter type
const filterUsers = (
  users: Map<string, User>,
  searchQuery: string,
  activeFilter?: FilterType
): User[] => {
  const filteredUsers: User[] = [];
  users.forEach((user) => {
    if (activeFilter === "Cities" && searchQuery) {
      if (user.address.city.toLowerCase().includes(searchQuery.toLowerCase())) {
        filteredUsers.push(user);
      }
    } else if (activeFilter === "Age" && searchQuery) {
      if (user.age.toString().startsWith(searchQuery)) {
        filteredUsers.push(user);
      }
    } else if (!activeFilter || searchQuery === "") {
      filteredUsers.push(user); // Add all users if no filter is active or no search query
    }
  });
  return filteredUsers;
};
