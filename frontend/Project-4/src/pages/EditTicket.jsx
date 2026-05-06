import { useState } from "react";

function EditTicket() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    softwareId: "",
    userId: "",
  });
  const title = "Edit Ticket";
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/tickets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Ticket created successfully!");
        setFormData({ title: "", description: "", softwareId: "", userId: "" });
      } else {
        alert("Failed to create ticket.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while creating the ticket.");
    }
  };

  return (
    <div>
      <h1>{title}</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Title" required />
        <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" required />
        <input type="text" name="softwareId" value={formData.softwareId} onChange={handleChange} placeholder="Software ID" required />
        <input type="text" name="userId" value={formData.userId} onChange={handleChange} placeholder="User ID" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default EditTicket;