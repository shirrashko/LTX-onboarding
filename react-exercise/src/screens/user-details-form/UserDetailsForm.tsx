import { useParams, useNavigate } from "react-router-dom";
import Topper from "../../components/topper/Topper";
import UserForm from "../../components/user-form/UserForm.tsx";
import { updateUser, addUser, useUsersStore } from "../../stores/usersStore.ts";
import "./UserDetailsForm.scss";
import { User } from "../../types/user.ts";
import { v4 as uuidv4 } from "uuid";

function UserDetailsForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const users = useUsersStore((state) => state.users);
  const user = id ? users.get(id) : undefined;

  const isNewUser = !id; // Determine if we are adding a new user (no id)

  const handleSaveClick = (updatedUser: User) => {
    if (isNewUser) {
      // Generate a UUID and add the user when the form is submitted
      const newUser = { ...updatedUser, id: uuidv4() };
      addUser(newUser); // Save the new user
    } else {
      updateUser(updatedUser); // Update the existing user
    }
    navigate(`/user-profile/${id}`);
  };

  const handleCancelClick = () => {
    if (isNewUser) {
      navigate("/"); // If in add mode, go back to the main user list
    } else {
      navigate(`/user-profile/${id}`); // If in edit mode, go back to the user's profile
    }
  };

  return (
    <div className="user-details-form">
      <Topper />
      <UserForm
        user={
          user || {
            id: "",
            firstName: "",
            lastName: "",
            age: 0,
            email: "",
            address: { city: "", state: "", country: "" },
            phone: "",
            gender: "",
            birthDate: "",
            image: "",
          }
        }
        onSave={handleSaveClick}
        onCancel={handleCancelClick}
      />
    </div>
  );
}

export default UserDetailsForm;
