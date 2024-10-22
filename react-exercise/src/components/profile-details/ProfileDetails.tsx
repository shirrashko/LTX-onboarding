import "./ProfileDetails.scss";
import defaultProfilePicture from "../../assets/default-profile-picture.svg";
import EditProfileForm from "../user-form/UserForm.tsx";
import { updateUserSync } from "../../usersClientService.ts";
import { useState } from "react";
import { User } from "../../types/user.ts";

interface ProfileDetailsProps {
  user: User;
}
function ProfileDetails({ user }: ProfileDetailsProps) {
  const [isEditing, setIsEditing] = useState(false);
  const handleEditClick = () => {
    setIsEditing(true);
  };
  const handleCancelClick = () => {
    setIsEditing(false);
  };

  const handleSaveClick = (updatedUser: User) => {
    updateUserSync(updatedUser);
    setIsEditing(false);
    console.log("Saved user:", updatedUser);
  };

  if (isEditing) {
    return (
      <EditProfileForm
        user={user}
        onSave={handleSaveClick}
        onCancel={handleCancelClick}
      />
    );
  }
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
        <button className="edit-button" onClick={handleEditClick}>
          Edit
        </button>
      </div>
    </div>
  );
}
export default ProfileDetails;
