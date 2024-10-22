import { Link, useParams } from "react-router-dom";
import Topper from "../../components/topper/Topper";
import ProfilePreview from "../../components/profile-preview/ProfilePreview.tsx";
import Tabs from "../../components/tabs/Tabs.tsx";
import backArrowIcon from "../../assets/back-arrow-icon.svg";
import "./UserProfile.scss";
import { useUsersStore } from "../../stores/usersStore.ts";

function UserProfile() {
  const { id } = useParams();
  const users = useUsersStore((state) => state.users);
  const user = id ? users.get(id) : undefined;

  if (!user) {
    return <p>User not found yet...</p>;
  }
  return (
    <div className="user-profile">
      <Topper />
      <div className="container">
        <Link to="/" className="back-to-search">
          <img
            src={backArrowIcon}
            alt="Back to search"
            className="back-arrow-icon"
          />
          Back to search
        </Link>
        <div className="page-content">
          <div className="profile-section">
            <ProfilePreview user={user} />
            <Tabs user={user} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default UserProfile;
