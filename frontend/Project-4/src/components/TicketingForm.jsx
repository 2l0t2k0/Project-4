function TicketingForm({ handleSubmit, handleChange, formData ,title}) {
  const user = JSON.parse(localStorage.getItem('user'));// Assuming user info is stored in localStorage after login
 

  return (
    <div>
      <h2>{title}</h2>
      <form onSubmit={handleSubmit}>       
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
          name="Version"
          placeholder="Software Version"
          value={formData.Version}
          onChange={handleChange}
          required
        />{user.perms.includes("Admin") && (
        <input
          type="text"
          name="Dept"
          placeholder="Department"
          value={formData.Dept}
          onChange={handleChange}
          required
        />)}
        <select          
          name="Ticketreason"
          placeholder="(new/update)"
          value={formData.Ticketreason}
          onChange={handleChange}
          required
        >
          <option value="new">New</option>
          <option value="update">Update</option>
        </select>
        <input
          type="text"
          name="reason"
          placeholder="Reason for ticket"
          value={formData.reason}
          onChange={handleChange}
          required
        />
        {user.perms.includes("Admin") && (
        <select 
          name="status"
          placeholder="Open"
          value={formData.status}
          onChange={handleChange}
          required
        >
          <option value="open">Open</option>
          <option value="in progress">In Progress</option>
          <option value="closed">Closed</option>
        </select>
         )  
        }
        
        <button type="submit">Create Ticket</button>
      </form>
    </div>
  );
}

export default TicketingForm;