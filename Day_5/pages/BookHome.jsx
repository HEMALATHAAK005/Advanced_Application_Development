import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import '../css/BookHome.css'; // Import the CSS file for styling

const USERS_LOCAL_STORAGE_KEY = 'bookHomeUsers';

export default function BookHome() {
  const [users, setUsers] = useState([]);

  // Fetch users from Local Storage on component mount
  useEffect(() => {
    const data = localStorage.getItem(USERS_LOCAL_STORAGE_KEY);
    if (data) {
      setUsers(JSON.parse(data));
    }
  }, []);

  // Create user
  const addUser = (newUser) => {
    setUsers([...users, { ...newUser, id: Date.now() }]); // Add unique ID
  };

  // Update user
  const updateUser = (updatedUser) => {
    setUsers(
      users.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
  };

  // Delete user
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  // Save users to Local Storage on any change
  useEffect(() => {
    localStorage.setItem(USERS_LOCAL_STORAGE_KEY, JSON.stringify(users));
  }, [users]);

  return (
    <div>
      <Navbar />
      <div className='table-container'>
        <div className='py-4'>
          <table className='table'>
            <thead>
              <tr>
                <th scope="col">S.No</th>
                <th scope="col">Name</th>
                <th scope="col">UserName</th>
                <th scope="col">Email</th>
                <th scope="col">Device</th>
                <th scope="col">Phone</th>
                <th scope="col">Address</th>
                <th scope="col">Employment Status</th>
                <th scope="col">Age</th>
                <th scope="col">Place</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.device}</td>
                  <td>{user.phonenumber}</td>
                  <td>{user.address}</td>
                  <td>{user.job}</td>
                  <td>{user.age}</td>
                  <td>{user.place}</td>
                  <td className='actions'>
                    {/* Edit Link */}
                    <Link
                      className='btn btn-primary mr-2'
                      to={`/edit/${user.id}`}
                    >
                      Edit
                    </Link>
                    {/* Delete Button */}
                    <button
                      className='btn btn-danger'
                      onClick={() => deleteUser(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Link className='btn btn-success' to="/add">
            Add User
          </Link>
        </div>
      </div>
    </div>
  );
}
