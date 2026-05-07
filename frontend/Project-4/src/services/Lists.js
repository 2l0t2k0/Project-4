const BASE_URL = import.meta.env.VITE_BACKEND_HOST
//! GetXs should only grab a few fields to display in the list, not all the details. GetOneX should grab all the details for that item.
const getUsers = async () => {
  try {
    const response = await fetch(`${BASE_URL}/users`);
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error("Failed to fetch users.");
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

const getOneUser = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/users/${id}`);
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error("Failed to fetch user.");
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

const getSoftware = async () => {
  try {
    const response = await fetch(`${BASE_URL}/software`);
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error("Failed to fetch software.");
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

const getOneSoftware = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/software/${id}`);
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error("Failed to fetch software.");
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

const getTickets = async () => {
  try {
    const response = await fetch(`${BASE_URL}/tickets`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error("Failed to fetch tickets.");
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

const getOneTicket = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/tickets/${id}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
    });
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error("Failed to fetch ticket.");
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export { getUsers, getOneUser, getSoftware, getOneSoftware, getTickets, getOneTicket };