import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams(); // Get user ID from URL
const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [formData, setFormData] = useState<any>({
    name: "",
    email: "",
    username: "",
    phone: "",
    website: "",
    company: "",
    address: "",
  });
  const [message, setMessage] = useState<string>(""); // For success or error messages
  const [isLoading, setIsLoading] = useState<boolean>(false); // Loading state for form submission

  useEffect(() => {
    // Fetch user data if you are in "edit" mode (i.e., editing existing user)
    if (id) {
      setIsLoading(true);
      fetch(`http://localhost:5000/api/users/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setUser(data);
          setFormData({
            name: data.name,
            email: data.email,
            username: data.username,
            phone: data.phone,
            website: data.website,
            company: data.company?.name,
            address: data.address,
        
          });
        })
        .catch((error) => {
          console.error("Error fetching user:", error);
          setMessage("Failed to load user details.");
        })
        .finally(() => setIsLoading(false));
    }
  }, [id]);

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission (Create or Update user)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const userData = {
      name: formData.name,
      email: formData.email,
      username: formData.username,
      phone: formData.phone,
      website: formData.website,
      company: { name: formData.company },
      address: formData.address,
    };

    // Send the data to the backend to create or update the user
    const method = id ? "PUT" : "POST"; // If an ID exists, it's an update (PUT); otherwise, it's a create (POST)
    const url = id
      ? `http://localhost:5000/api/users/${id}` // Update existing user
      : `http://localhost:5000/api/users`; // Create new user

    fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        setMessage(id ? "User updated successfully!" : "User added successfully!");
        // Optionally redirect after successful submission
navigate("/users");
      })
      .catch((error) => {
        console.error("Error saving user:", error);
        setMessage("Error saving user. Please try again.");
      })
      .finally(() => setIsLoading(false));
  };

  if (isLoading) {
    return <p className="p-4">Loading...</p>;
  }

  if (!user && id) {
    return <p className="p-4">Loading user details...</p>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">{id ? "Edit User" : "Add User"}</h2>

      {/* Display success or error message */}
      {message && (
        <div className="mb-4 p-2 text-center bg-green-100 text-green-700 border border-green-400 rounded">
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow">
        <div className="mb-4">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="border p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="border p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            className="border p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label>Phone:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="border p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label>Website:</label>
          <input
            type="text"
            name="website"
            value={formData.website}
            onChange={handleInputChange}
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label>Company Name:</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="border p-2 w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded"
          disabled={isLoading} // Disable the button while loading
        >
          {id ? "Update User" : "Add User"}
        </button>
      </form>
    </div>
  );
};

export default UserDetails;
