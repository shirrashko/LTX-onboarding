import { User } from "../../types/user.ts";
import "./ProfileDetails.scss";
import defaultProfilePicture from "../../assets/default-profile-picture.svg";

interface ProfileDetailsProps {
  user: User;
}

function ProfileDetails({ user }: ProfileDetailsProps) {
  return (
    <div className="profile-details">
      <img
        className="profile-image"
        src={user.image || defaultProfilePicture}
        alt={`${user.firstName} ${user.lastName}'s profile picture`}
      />
      <div className="user-details">
        <h2 className="user-name">
          {user.firstName} {user.lastName}
        </h2>
        <span>
          {user.age}. {user.gender}. {user.address.city}, {user.address.state},{" "}
          {user.address.country}
        </span>
        <span>{user.email}</span>
        <button className="edit-button">Edit</button>
      </div>
    </div>
  );
}

export default ProfileDetails;
