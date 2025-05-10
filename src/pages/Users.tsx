// src/pages/Users.tsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/users")
      .then((res) => res.json())
      .then(setUsers)
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  const handleView = (user: any) => {
    navigate(`/users/${user._id}`);
  };

  const handleEdit = (user: any) => {
    navigate(`/users/edit/${user._id}`);  // Navigate to edit page for the selected user
  };

  const handleDelete = async (id: string) => {
    const confirmed = window.confirm("Are you sure you want to delete this user?");
    if (!confirmed) return;

    try {
      await fetch(`http://localhost:5000/api/users/${id}`, {
        method: "DELETE",
      });
      setUsers(users.filter((u: any) => u._id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
      alert("Failed to delete user.");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">User Management</h2>
      <table className="w-full text-left border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2">Name</th>
            <th className="p-2">Email</th>
            <th className="p-2">Phone</th>
            <th className="p-2">Username</th>
            <th className="p-2">Website</th>
            <th className="p-2">Company</th>
            <th className="p-2">Address</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u: any) => (
            <tr key={u._id} className="border-t">
              <td className="p-2">{u.name}</td>
              <td className="p-2">{u.email}</td>
              <td className="p-2">{u.phone}</td>
              <td className="p-2">{u.username}</td>
              <td className="p-2">{u.website}</td>
              <td className="p-2">{u.company?.name || "-"}</td>
              <td className="p-2">{u.address}</td>
              <td className="p-2">
                <button
                  className="text-blue-600 hover:underline"
                  onClick={() => handleEdit(u)}  // Edit the user
                >
                  Edit
                </button>
                <button
                  className="text-red-600 hover:underline ml-3"
                  onClick={() => handleDelete(u._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
