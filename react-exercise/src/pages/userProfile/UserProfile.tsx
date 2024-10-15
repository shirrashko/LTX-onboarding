import { Link, useParams } from "react-router-dom";
import Topper from "../../components/topper/Topper";
import { User } from "../../types/user.ts";
import defaultProfilePicture from "../../assets/default-profile-picture.svg";
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
            <div className="user-preview">
              <img
                className="profile-image"
                src={user.image || defaultProfilePicture}
                alt={`${user.firstName} ${user.lastName}'s profile picture`}
              />
              <div className="user-details">
                <h2>
                  {user.firstName} {user.lastName}
                </h2>
                <span>
                  {user.age}. {user.gender}. {user.address.city}.{" "}
                  {user.address.state}, {user.address.country}
                </span>
                <span>{user.email}</span>
                <div className="change-details">
                  <button className="edit-button">Edit</button>
                </div>
              </div>
            </div>
            <div className="user-content">
              <Tabs user={user} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
