import { useParams, useNavigate } from "react-router-dom";
import Topper from "../../components/topper/Topper";
import UserForm from "../../components/user-form/UserForm.tsx";
import { updateUser, useUsersStore } from "../../stores/usersStore.ts";
import "./UserDetailsForm.scss";
import { User } from "../../types/user.ts";

function UserDetailsForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const users = useUsersStore((state) => state.users);
  const user = id ? users.get(id) : undefined;

  if (!user) {
    return <p>User not found</p>;
  }

  const handleSaveClick = (updatedUser: User) => {
    updateUser(updatedUser);
    console.log("Saved user:", updatedUser);
    navigate(`/user-profile/${id}`);
  };

  const handleCancelClick = () => {
    navigate(`/user-profile/${id}`);
  };

  return (
    <div className="user-details-form">
      <Topper />
      <UserForm
        user={user}
        onSave={handleSaveClick}
        onCancel={handleCancelClick}
      />
    </div>
  );
}

export default UserDetailsForm;
