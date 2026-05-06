import { useState } from "react";

const ViewTicket = () => {
  const [ticket, setTicket] = useState(null);

  const fetchTicket = async (id) => {
    try {
      const response = await fetch(`/api/tickets/${id}`);
      if (response.ok) {
        const data = await response.json();
        setTicket(data);
      } else {
        alert("Failed to fetch ticket.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while fetching the ticket.");
    }
  };

  return (
    <div>
      <h1>View Ticket</h1>
      <button onClick={() => fetchTicket(1)}>Fetch Ticket with ID 1</button>
      {ticket && (
        <div>
          <h2>{ticket.title}</h2>
          <p>{ticket.description}</p>
        </div>
      )}
    </div>
  );
}

export default ViewTicket;