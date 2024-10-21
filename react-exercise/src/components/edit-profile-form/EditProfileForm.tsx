import { useState } from "react";
import { User } from "../../types/user.ts";
import "./EditPorfileForm.scss";

interface EditProfileFormProps {
  user: User;
  onSave: (updatedUser: User) => void;
  onCancel: () => void;
}

const editableFields = [
  { key: "firstName", label: "First Name", type: "text" },
  { key: "lastName", label: "Last Name", type: "text" },
  { key: "age", label: "Age", type: "number" },
  { key: "email", label: "Email", type: "email" },
  { key: "address.city", label: "City", type: "text" },
  { key: "address.state", label: "State", type: "text" },
  { key: "address.country", label: "Country", type: "text" },
  { key: "phone", label: "Phone", type: "text" },
  { key: "gender", label: "Gender", type: "text" },
];

const getNestedValue = (obj: any, path: string) =>
  path.split(".").reduce((acc, part) => acc && acc[part], obj);

const setNestedValue = (obj: any, path: string, value: any) => {
  const parts = path.split(".");
  const last = parts.pop();
  const deep = parts.reduce((acc, part) => acc && acc[part], obj);
  if (deep && last) deep[last] = value;
};

const EditProfileForm = ({ user, onSave, onCancel }: EditProfileFormProps) => {
  const [editData, setEditData] = useState(user);

  const handleInputChange = (key: string, value: string | number) => {
    const updatedData = { ...editData };
    setNestedValue(updatedData, key, value);
    setEditData(updatedData);
  };

  const handleSaveClick = () => {
    // Basic validation example: check if email is a valid email and age is positive
    if (!/\S+@\S+\.\S+/.test(editData.email)) {
      alert("Please enter a valid email.");
      return;
    }

    if (editData.age <= 0) {
      alert("Please enter a valid age.");
      return;
    }

    onSave(editData);
  };

  return (
    <div className="edit-profile-form">
      <form>
        {editableFields.map(({ key, label, type }) => (
          <label key={key}>
            {label}:
            <input
              type={type}
              value={getNestedValue(editData, key)}
              onChange={(e) =>
                handleInputChange(
                  key,
                  type === "number" ? Number(e.target.value) : e.target.value
                )
              }
            />
          </label>
        ))}

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
