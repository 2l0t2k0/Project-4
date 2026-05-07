import { useState, useEffect } from "react";
import { getTickets } from "../services/Lists";

function ListTickets() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const data = getTickets();
    data.then((res) => setTickets(res));
  }, []);

  return (
    <div>
      <h1>List of Tickets</h1>
      <ul>
        {tickets.map((ticket) => (
          <li key={ticket.id}>{ticket.software}: {ticket.Version}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListTickets;