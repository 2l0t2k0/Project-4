import { useState } from "react";
import DeptForm from "../components/DeptForm";

function NewDept() {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
  });
  const title = "Create New Department";
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/departments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Department created successfully!");
        setFormData({ name: "", location: "" });
      } else {
        alert("Failed to create department.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while creating the department.");
    }
  };

  return (
    <DeptForm title={title} formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
  );
}

export default NewDept;