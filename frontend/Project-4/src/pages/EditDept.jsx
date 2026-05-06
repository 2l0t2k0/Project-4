import { useState } from "react";
import DeptForm from "../components/DeptForm";

function EditDept() {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
  });
  const title = "Edit Department";
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try { //! This is currently set to create a new department, but should be updated to edit an existing one
      //! Also Needs to move to services and use axios 
        const response = await fetch("/api/departments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Department updated successfully!");
        setFormData({ name: "", location: "" });
      } else {
        alert("Failed to update department.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while updating the department.");
    }
  };

  return (
    <DeptForm title={title} formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
  );
}

export default EditDept;