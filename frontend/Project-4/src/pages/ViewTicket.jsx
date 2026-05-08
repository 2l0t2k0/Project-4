import { useState, useEffect } from "react";
import {useParams, NavLink} from "react-router-dom";
import { getOneTicket } from "../services/Lists";

const ViewTicket = () => {
  const [ticket, setTicket] = useState({});
  const { id } = useParams();


  useEffect(() => {
    const data = getOneTicket(id);
    data.then((res) => setTicket(res));
  }, [id]);


  //Note: Response will return object ids for their respective tables, will need to call for name.
  return (
    <div>
      <h1>View Ticket</h1>
      
        <div>
          <h2>{ticket.software}</h2>
          <h3>Version: {ticket.Version}</h3>
          <p>Reason: {ticket.reason}</p>
          <p>Status: {ticket.status}</p>
          <p>{ticket.Notes}</p>
        <button><NavLink to={`/tickets/edit/${id}`}>Edit Ticket</NavLink></button>
        <button><NavLink to="/tickets">Back to Tickets</NavLink></button>
        </div>
      
    </div>
  );
}

export default ViewTicket;