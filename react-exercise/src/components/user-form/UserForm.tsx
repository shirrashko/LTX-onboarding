import { useState } from "react";
import { User } from "../../types/user.ts";
import "./UserForm.scss";
import ImageUploader from "../image-uploader/ImageUploader.tsx";

interface UserFormProps {
  user: User;
  onSave: (updatedUser: User) => void;
  onCancel: () => void;
  formTitle?: string;
}

const requiredFields = [
  { key: "firstName", label: "First Name", type: "text", required: true },
  { key: "lastName", label: "Last Name", type: "text", required: true },
  { key: "age", label: "Age", type: "number", required: true },
  { key: "email", label: "Email", type: "email", required: true },
  { key: "gender", label: "Gender", type: "text", required: true },
  { key: "address.city", label: "City", type: "text", required: true },
  { key: "address.state", label: "State", type: "text", required: true },
  { key: "address.country", label: "Country", type: "text", required: true },
];

const optionalFields = [
  { key: "phone", label: "Phone", type: "text", required: false },
  { key: "company.name", label: "Company Name", type: "text", required: false },
  { key: "company.title", label: "Job Title", type: "text", required: false },
  {
    key: "company.department",
    label: "Department",
    type: "text",
    required: false,
  },
  { key: "university", label: "University", type: "text", required: false },
  { key: "role", label: "Role", type: "text", required: false },
];

const getNestedValue = (obj: any, path: string) =>
  path.split(".").reduce((acc, part) => acc && acc[part], obj);

const setNestedValue = (obj: any, path: string, value: any) => {
  const parts = path.split(".");
  const last = parts.pop();
  const deep = parts.reduce((acc, part) => acc && acc[part], obj);
  if (deep && last) deep[last] = value;
};

function UserForm({
  user,
  onSave,
  onCancel,
  formTitle = "User Form",
}: UserFormProps) {
  const [formData, setFormData] = useState(user);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [showOptionalFields, setShowOptionalFields] = useState(false);

  const handleInputChange = (key: string, value: string | number) => {
    const updatedData = { ...formData };
    setNestedValue(updatedData, key, value);
    setFormData(updatedData);
  };

  const validateForm = () => {
    let valid = true;
    let newErrors: { [key: string]: string } = {};

    requiredFields.forEach(({ key, required }) => {
      const value = getNestedValue(formData, key);
      if (required && (!value || value === "")) {
        valid = false;
        newErrors[key] = "required field.";
      }
    });

    setErrors(newErrors);
    return valid;
  };

  const handleSaveClick = () => {
    if (!validateForm()) {
      return;
    }

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
      <h2 className="form-title">{formTitle}</h2>
      <form>
        {requiredFields.map(({ key, label, type, required }) => (
          <label key={key}>
            {label} {required && "*"}:
            <input
              type={type}
              value={getNestedValue(formData, key) || ""}
              onChange={(e) =>
                handleInputChange(
                  key,
                  type === "number" ? Number(e.target.value) : e.target.value
                )
              }
            />
            {errors[key] && (
              <span className="error-message">{errors[key]}</span>
            )}
          </label>
        ))}

        <ImageUploader
          imageUrl={formData.image || ""}
          onImageUpload={(imageUrl) => handleInputChange("image", imageUrl)}
        />

        {showOptionalFields && (
          <>
            {optionalFields.map(({ key, label, type }) => (
              <label key={key}>
                {label}:
                <input
                  type={type}
                  value={getNestedValue(formData, key) || ""}
                  onChange={(e) =>
                    handleInputChange(
                      key,
                      type === "number"
                        ? Number(e.target.value)
                        : e.target.value
                    )
                  }
                />
              </label>
            ))}
          </>
        )}

        <button
          type="button"
          onClick={() => setShowOptionalFields(!showOptionalFields)}
          className="toggle-optional-fields"
        >
          {showOptionalFields ? "Hide Optional Details" : "Add More Details"}
        </button>

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
}

export default UserForm;
