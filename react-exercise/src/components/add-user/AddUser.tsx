import "./AddUser.scss";
import { addUser } from "../../usersClientService";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

function AddUser() {
  const navigate = useNavigate();

  const handleAddOnClick = () => {
    console.log("Add User button clicked");

    // Generate a UUID for the new user
    const userId = uuidv4();

    // Create a new user object with empty fields for now
    addUser({
      id: userId,
      firstName: "",
      lastName: "",
      age: 0,
      email: "",
      address: {
        city: "",
        state: "",
        country: "",
        postalCode: "",
      },
      phone: "",
      gender: "",
      username: "",
      password: "",
      birthDate: "",
      image: "",
    });

    // Navigate to the upsert-user page with the generated userId
    navigate(`/upsert-user/${userId}`);
  };

  return (
    <div className="add-user-container">
      <button className="add-user-button" onClick={handleAddOnClick}>
        Add User
      </button>
    </div>
  );
}

export default AddUser;
