import { NavLink } from "react-router-dom"


const NavBar = () => {
    return (
        <nav>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/list-users">List Users</NavLink>
            <NavLink to="/list-software">List Software</NavLink>
            <NavLink to="/list-tickets">List Tickets</NavLink>
            <NavLink to="/edit-dept">Edit Dept</NavLink>
            <NavLink to="/new-user">New User</NavLink>
            <NavLink to="/new-ticket">New Ticket</NavLink>
            <button>Logout</button>
        </nav>
    )
}

export default NavBar