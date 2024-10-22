import "./ProfileDetails.scss";
import defaultProfilePicture from "../../assets/default-profile-picture.svg";
import { updateUserSync } from "../../usersClientService.ts";
import { useState } from "react";
import { User } from "../../types/user.ts";
import UserForm from "../user-form/userForm.tsx";

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
      <UserForm
        user={user}
        onSave={handleSaveClick}
        onCancel={handleCancelClick}
        formTitle="Edit Profile"
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
      <div className="user-dashboard">
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
