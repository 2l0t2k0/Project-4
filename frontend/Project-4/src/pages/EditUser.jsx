import { useState } from "react";
import UserForm from "../components/UserForm";

function EditUser() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const title = "Edit User";
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("User created successfully!");
        setFormData({ username: "", email: "", password: "" });
      } else {
        alert("Failed to create user.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while creating the user.");
    }
  };

  return (
    <div>
      <UserForm title={title} formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
    </div>
  );
}

export default EditUser;