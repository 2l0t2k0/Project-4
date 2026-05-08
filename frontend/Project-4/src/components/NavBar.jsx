import { NavLink, useNavigate } from "react-router-dom"



const NavBar = () => {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate("/");
    }

    return (
        <nav>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/list-software">List Software</NavLink>
            <NavLink to="/list-tickets">List Tickets</NavLink>
            <NavLink to="/new-ticket">New Ticket</NavLink>
            <button onClick={logout}>Logout</button>
        </nav>
    )
}

export default NavBar

/*


<NavLink to="/edit-dept">Edit Dept</NavLink>
<NavLink to="/new-user">New User</NavLink>
<NavLink to="/list-users">List Users</NavLink>
*/