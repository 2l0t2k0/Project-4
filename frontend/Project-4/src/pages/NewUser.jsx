import { useState } from "react";
import UserForm from "../components/UserForm";
import { newUser } from "../services/NewEntry";


function NewUser() {
    const title = "Create New User";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await newUser(formData);
      if (!response.error) {
        alert("User created successfully!");
        setFormData({ name: "", email: "", password: "" });
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

export default NewUser;