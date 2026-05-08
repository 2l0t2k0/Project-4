import { useEffect, useState } from 'react';
import TicketingForm from '../components/TicketingForm';
import { newTicket } from '../services/NewEntry';

function NewTicket() {
   const [formData, setFormData] = useState({
    software: '',
    Ticketreason: '',
    reason: '',
    Version: '',
  });
   
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await newTicket(formData); // This should call the backend to create a new ticket with the formData
      if (response.ok) {
        alert('Ticket created successfully!');
        setFormData({
          software: '',
          Ticketreason: '',
          reason: '',
          Version: '',
        });
        
      } else {
        alert('Failed to create ticket.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while creating the ticket.');
    }
  };


useEffect(() => {
  // Any necessary setup can be done here\
  // For example, if you need to fetch data for dropdowns or initialize state, you can do it here.
  //This should call the backend to get the list of software and departments to populate the dropdowns in the form.
}, []);



  return (
    <div>
      <h1>New Ticket</h1>
      <TicketingForm handleSubmit={handleSubmit} handleChange={handleChange} formData={formData} title="Create Ticket" />
    </div>
  );
}

export default NewTicket;