import { useState } from "react";
import { User } from "../../types/user.ts";
import "./EditProfileForm.scss";

interface EditProfileFormProps {
  user: User;
  onSave: (updatedUser: User) => void;
  onCancel: () => void;
}

const EditProfileForm = ({ user, onSave, onCancel }: EditProfileFormProps) => {
  const [editData, setEditData] = useState(user);

  const handleSaveClick = () => {
    onSave(editData); // Call the parent save function with the updated data
  };

  return (
    <div className="edit-profile-form">
      <form>
        <label>
          First Name:
          <input
            type="text"
            value={editData.firstName}
            onChange={(e) =>
              setEditData({ ...editData, firstName: e.target.value })
            }
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            value={editData.lastName}
            onChange={(e) =>
              setEditData({ ...editData, lastName: e.target.value })
            }
          />
        </label>
        <label>
          Age:
          <input
            type="number"
            value={editData.age}
            onChange={(e) =>
              setEditData({ ...editData, age: Number(e.target.value) })
            }
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={editData.email}
            onChange={(e) =>
              setEditData({ ...editData, email: e.target.value })
            }
          />
        </label>
        <label>
          City:
          <input
            type="text"
            value={editData.address.city}
            onChange={(e) =>
              setEditData({
                ...editData,
                address: { ...editData.address, city: e.target.value },
              })
            }
          />
        </label>
        <label>
          State:
          <input
            type="text"
            value={editData.address.state}
            onChange={(e) =>
              setEditData({
                ...editData,
                address: { ...editData.address, state: e.target.value },
              })
            }
          />
        </label>
        <div className="form-buttons">
          <button type="button" onClick={handleSaveClick}>
            Save
          </button>
          <button type="button" onClick={onCancel} className="cancel-button">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfileForm;
