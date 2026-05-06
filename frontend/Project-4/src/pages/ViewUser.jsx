import { useState } from "react";

const ViewUser = () => {
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    try {
      const response = await fetch("/api/users/1"); // Example: Fetch user with ID 1
      if (response.ok) {
        const data = await response.json();
        setUser(data);
      } else {
        alert("Failed to fetch user.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while fetching user.");
    }
  };

  return (
    <div>
      <h1>View User</h1>
      <button onClick={fetchUser}>Fetch User</button>
      {user && (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          {/* Add more user details as needed */}
        </div>
      )}
    </div>
  );
}

export default ViewUser;