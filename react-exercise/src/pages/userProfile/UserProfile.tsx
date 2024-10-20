import { Link, useParams } from "react-router-dom";
import Topper from "../../components/topper/Topper";
import { User } from "../../types/user.ts";
import ProfileDetails from "../../components/profile-details/ProfileDetails.tsx";
import Tabs from "../../components/tabs/Tabs.tsx";
import backArrowIcon from "../../assets/back-arrow-icon.svg";
import "./UserProfile.scss";

interface UserProfileProps {
  users: User[];
}

function UserProfile({ users }: UserProfileProps) {
  const { id } = useParams();
  const user = users.find((user) => user.id.toString() === id);

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
            <ProfileDetails user={user} />
            <Tabs user={user} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
