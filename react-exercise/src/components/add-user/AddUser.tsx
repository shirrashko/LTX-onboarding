import "./AddUser.scss";
import { useNavigate } from "react-router-dom";

function AddUser() {
  const navigate = useNavigate();

  const handleAddOnClick = () => {
    // Navigate to the upsert-user page with the generated userId
    navigate("/upsert-user");
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
