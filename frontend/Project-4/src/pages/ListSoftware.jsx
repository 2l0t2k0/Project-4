import { useState } from "react";

function ListSoftware() {
  const [software, setSoftware] = useState([]);

  const fetchSoftware = async () => {
    try {
      const response = await fetch("/api/software");
      if (response.ok) {
        const data = await response.json();
        setSoftware(data);
      } else {
        alert("Failed to fetch software.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while fetching software.");
    }
  };

  return (
    <div>
      <h1>List of Software</h1>
      <button onClick={fetchSoftware}>Fetch Software</button>
      <ul>
        {software.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListSoftware;