import { useState } from 'react';

function TicketingForm() {
  const [formData, setFormData] = useState({
    Dept: '',
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
      const response = await fetch('/api/ticket', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Ticket created successfully!');
        setFormData({
          Dept: '',
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

  return (
    <div>
      <h2>Create Ticket</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="Dept"
          placeholder="Department"
          value={formData.Dept}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="software"
          placeholder="Software"
          value={formData.software}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="Ticketreason"
          placeholder="Ticket Reason (new/update)"
          value={formData.Ticketreason}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="reason"
          placeholder="Reason for ticket"
          value={formData.reason}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="Version"
          placeholder="Software Version"
          value={formData.Version}
          onChange={handleChange}
          required
        />
        <button type="submit">Create Ticket</button>
      </form>
    </div>
  );
}

export default TicketingForm;