import { useState } from "react";

function ListTickets() {
  const [tickets, setTickets] = useState([]);

  const fetchTickets = async () => {
    try {
      const response = await fetch("/api/tickets");
      if (response.ok) {
        const data = await response.json();
        setTickets(data);
      } else {
        alert("Failed to fetch tickets.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while fetching tickets.");
    }
  };

  return (
    <div>
      <h1>List of Tickets</h1>
      <button onClick={fetchTickets}>Fetch Tickets</button>
      <ul>
        {tickets.map((ticket) => (
          <li key={ticket.id}>{ticket.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListTickets;