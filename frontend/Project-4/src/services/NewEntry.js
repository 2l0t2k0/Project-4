const BaseURL = import.meta.env.VITE_BACKEND_HOST;

export const headers = () => {
    const token = localStorage.getItem("token");
    
    const headerdata = {      
  "Content-Type": "application/json"
    }
    if (token) {
        headerdata["Authorization"] = `Bearer ${token}`;
    }
    return headerdata;
};

const newUser = async (userData) => {
  try {
    const response = await fetch(`${BaseURL}/create/user`, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify(userData)
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error creating new user:', error);
    throw error;
  }
};  
const newSoftware = async (softwareData) => {
  try {
    const response = await fetch(`${BaseURL}/create/software`, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify(softwareData)
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error creating new software:', error);
    throw error;
  }
};  
const newTicket = async (ticketData) => {
  try {
    const response = await fetch(`${BaseURL}/create/ticket`, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify(ticketData)
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error creating new ticket:', error);
    throw error;
  }
};  

export { newUser, newSoftware, newTicket };