import { useState } from "react";
import { User } from "../../types/user.ts";
import "./UserForm.scss";

interface UserFormProps {
  user: User;
  onSave: (updatedUser: User) => void;
  onCancel: () => void;
  formTitle?: string; // Optional prop to customize form title
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

const UserForm = ({
  user,
  onSave,
  onCancel,
  formTitle = "User Form",
}: UserFormProps) => {
  const [formData, setFormData] = useState(user);

  const handleInputChange = (key: string, value: string | number) => {
    const updatedData = { ...formData };
    setNestedValue(updatedData, key, value);
    setFormData(updatedData);
  };

  const handleSaveClick = () => {
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      alert("Please enter a valid email.");
      return;
    }

    if (formData.age <= 0) {
      alert("Please enter a valid age.");
      return;
    }

    onSave(formData);
  };

  return (
    <div className="user-form">
      <h2>{formTitle}</h2>
      <form>
        {editableFields.map(({ key, label, type }) => (
          <label key={key}>
            {label}:
            <input
              type={type}
              value={getNestedValue(formData, key)}
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

export default UserForm;
