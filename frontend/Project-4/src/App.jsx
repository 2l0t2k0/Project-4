import './App.css'
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ListUsers from "./pages/ListUsers";
import ListSoftware from "./pages/ListSoftware";
import ListTickets from "./pages/ListTickets";
import EditDept from "./pages/EditDept";
// import EditUser from "./pages/EditUser";
import EditTicket from "./pages/EditTicket";
import ViewTicket from "./pages/ViewTicket";
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
//import NavBar from './components/NavBar';
import NewUser from './pages/NewUser';
import NewTicket from './pages/NewTicket';
import NewDept from './pages/NewDept';
import ProtectedRoute from './components/ProtectedRoute';
import Layout from './components/layouts';


function App() { //! App current has no protected routes
    return (
    <div>
    <h1 className="App">Software Tracker</h1>
    
      
          <Routes>
            
            {/*Public Routes*/}
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
           
            {/*Protected Routes*/}
            <Route element={<ProtectedRoute  />}> 
              <Route element={<Layout />}>
              
            <Route path="/home" element={<HomePage />} />
            <Route path="/list-users" element={<ListUsers />} />
            <Route path="/list-software" element={<ListSoftware />} />
            <Route path="/list-tickets" element={<ListTickets />} />
            <Route path="/edit-dept" element={<EditDept />} />
            <Route path='/new-user' element={<NewUser />} />
            <Route path='/new-ticket' element={<NewTicket />} />
            <Route path='/new-dept' element={<NewDept />} />
            <Route path='/tickets/:id' element={<ViewTicket />} />
            <Route path='/tickets/edit/:id' element={<EditTicket />} />
              
              </Route>
            </Route>
          
            <Route path="/*" element={ <h1>404 Not Found</h1>} />
          </Routes> 
    </div>



  )
}

export default App
