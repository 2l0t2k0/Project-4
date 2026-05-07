import { useState } from "react";
import { createContext } from "react";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  
useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");
    if (token && userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
};
// const navigate = useNavigate();

  // const login = (userData) => {
  //   localStorage.setItem("token", userData.token);
  //   localStorage.setItem("user", JSON.stringify(userData));  
  //   setUser(userData);
  //   navigate("/home");
  // };

  // const logout = () => {
  //   localStorage.removeItem("token");
  //   localStorage.removeItem("user");
  //   setUser(null);
  //   navigate ("/login");
  // };