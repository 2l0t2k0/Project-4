import { useState, useEffect } from "react";
import TicketingForm from "../components/TicketingForm";
import { editTicket } from "../services/EditHigh";
import { useParams } from "react-router-dom";
import { getOneTicket } from "../services/Lists";


function EditTicket() {
const [formData, setFormData] = useState({
    Dept: '',
    software: '',
    Ticketreason: '',
    reason: '',
    Version: '',
  })
  const title = "Edit Ticket";
  const {id} = useParams()

  useEffect(() => {
    // Fetch the existing ticket data using the id and populate the formData state
    // This should call the backend to get the ticket details and setFormData with the response.
    getOneTicket(id).then((res) => setFormData(res));
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await editTicket(id, formData); 
      if (response.ok) {
        alert("Ticket edited successfully!");
        setFormData({ Dept: '', software: '', Ticketreason: '', reason: '', Version: '' });
      } else {
        alert("Failed to edit ticket.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while editing the ticket.");
    }
  };

  return (
    <div>
      <h1>{title}</h1>
      <TicketingForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} title={title} />
    </div>    
  );
}

export default EditTicket;