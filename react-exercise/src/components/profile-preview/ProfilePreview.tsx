import "./ProfilePreview.scss";
import defaultProfilePicture from "../../assets/default-profile-picture.svg";
import { Link } from "react-router-dom";
import { User } from "../../types/user.ts";

interface ProfilePreviewProps {
  user: User;
}

function ProfilePreview({ user }: ProfilePreviewProps) {
  return (
    <div className="profile-preview">
      <img
        className="profile-image"
        src={user.image || defaultProfilePicture}
        alt={`${user.firstName} ${user.lastName}'s profile picture`}
      />
      <div className="user-dashboard">
        <h2 className="user-name">
          {user.firstName} {user.lastName}
        </h2>
        <span>
          {user.age}. {user.gender}. {user.address.city}, {user.address.state},{" "}
          {user.address.country}
        </span>
        <span>{user.email}</span>
        <Link to={`/upsert-user/${user.id}`} className="edit-profile-link">
          <button className="edit-button">Edit</button>
        </Link>
      </div>
    </div>
  );
}

export default ProfilePreview;
