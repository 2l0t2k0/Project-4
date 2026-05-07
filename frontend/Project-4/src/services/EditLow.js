const baseURL = import.meta.env.VITE_BACKEND_HOST;

const EditSelf = async (userId, updatedData) => {
  try {
    const response = await fetch(`${baseURL}/users/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify(updatedData),
    });

    if (response.ok) {
      return await response.json();
    } else {
      throw new Error("Failed to update user.");
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

const editTicket = async (ticketId, updatedData) => {
  try {
    const response = await fetch(`${baseURL}/tickets/${ticketId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify(updatedData),
    });

    if (response.ok) {
      return await response.json();
    } else {
      throw new Error("Failed to update ticket.");
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export { EditSelf, editTicket };