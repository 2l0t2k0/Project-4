import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { getTickets, getownTickets } from "../services/Lists";

function ListTickets() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const perms = JSON.parse(localStorage.getItem("user")).perms;

    if (perms.includes("Admin") || perms.includes("SuperAdmin")) {
    const data = getTickets();
    data.then((res) => setTickets(res));
  }
    else {
      const data = getownTickets();
      data.then((res) => setTickets(res));
    }
  }, []);

  //li key needs to be have navlinks to the individual ticket pages, but for now just showing the list of tickets. Also, the software name needs to be fetched separately using the software id, currently just showing the software id. Will fix this later.
  // ticket.software needs to be fetched separately to get its name, currently just showing the software id. Will fix this later.
  return (
    <div>
      <h1>List of Tickets</h1>
      <ul>
        {tickets.map((ticket) => (
          <li key={ticket._id}>
            <NavLink to={`/tickets/${ticket._id}`}>{ticket.software}</NavLink>: {ticket.Version}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListTickets;