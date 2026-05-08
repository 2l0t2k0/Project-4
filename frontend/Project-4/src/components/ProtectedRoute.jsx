import {Outlet, Navigate} from 'react-router-dom';

//! Issue found, expired tokens are not being handled, will need to add a check for token expiration and handle it accordingly. For now, just checking if token exists in local storage, but this is not secure and can lead to issues. Will need to implement a more secure way of handling authentication and token management in the future.
const ProtectedRoute = () => {
   let auth = {'token': localStorage.getItem('token')}; // determine if authorized, from context or however you're doing it
   return (
     auth.token ? <Outlet /> : <Navigate to="" />
   );
}

export default ProtectedRoute;