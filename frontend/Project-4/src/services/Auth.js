const Base_URL = import.meta.env.VITE_BACKEND_HOST;



const login = async (credentials) => {
  console.log("Attempting to log in with credentials:", credentials);
  try {
    const response = await fetch(`${Base_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    if (response.ok) {
      return await response.json();
        
    } else {
      throw new Error("Login failed.");
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
    
  }
}
const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  // Optionally, you can also redirect the user to the login page after logout
  // const navigate = useNavigate();
  // navigate("/login");
};


const getHeader = () => {
  const token = localStorage.getItem("token");
  return {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`
  };
};

export { login, logout, getHeader };   

