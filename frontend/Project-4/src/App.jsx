import './App.css'
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ListUsers from "./pages/ListUsers";
import ListSoftware from "./pages/ListSoftware";
import ListTickets from "./pages/ListTickets";
import EditDept from "./pages/EditDept";
import EditUser from "./pages/EditUser";
import EditTicket from "./pages/EditTicket";
// import { AuthContext } from './context/Authcontext';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import NavBar from './components/NavBar';


function App() { //! App current has no protected routes
    return (
    <div>
    <h1 className="App">Hello World</h1>
    <NavBar /> 
      
          <Routes>
            
            {/*Public Routes*/}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            {/* <AuthContext> */}
            {/*Protected Routes*/}
            
            <Route path="/home" element={<HomePage />} />
            <Route path="/list-users" element={<ListUsers />} />
            <Route path="/list-software" element={<ListSoftware />} />
            <Route path="/list-tickets" element={<ListTickets />} />
            <Route path="/edit-dept" element={<EditDept />} />
            <Route path='/edit-user' element={<EditUser />} />
            <Route path='/edit-ticket' element={<EditTicket />} />
            {/* </ AuthContext> */}
            <Route path="/*" element={ <h1>404 Not Found</h1>} />
          </Routes> 
    </div>



  )
}

export default App
