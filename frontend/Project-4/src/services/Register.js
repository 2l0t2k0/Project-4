const Base_URL = import.meta.env.VITE_BACKEND_HOST;

const register = async (userData) => { 
    //! needs update to match the fields expected by the backend, and should not be used in a normal business app for this type of software. This is just for testing purposes.
    //! 
  try {
    const response = await fetch(`${Base_URL}/api/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      return await response.json();
    } else {
      throw new Error("Registration failed.");
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export { register };