import React, { useState, useEffect } from 'react';
import '../css/display.css';

const DisplayComponent = () => {
  const [storedData, setStoredData] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: ''
  });

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('formData'));
    if (storedData) {
      setStoredData(storedData);
      setFormData(storedData);
    }
  }, []);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    if (!storedData) {
      localStorage.setItem('formData', JSON.stringify(formData));
      setStoredData(formData);
    }
    setEditMode(false);
  };

  const handleCancel = () => {
    setEditMode(false);
    setFormData(storedData);
  };

  const handleDelete = () => {
    localStorage.removeItem('formData');
    setStoredData(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  return (
    <div>
      <h2>Stored Form Data</h2>
      {storedData ? (
        <div>
          {editMode ? (
            <div>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <label>Phone Number:</label>
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
              <button onClick={handleSave}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </div>
          ) : (
            <div>
              <p>Name: {storedData.name}</p>
              <p>Email: {storedData.email}</p>
              <p>Phone Number: {storedData.phoneNumber}</p>
              <button onClick={handleEdit}>Edit</button>
              <button onClick={handleDelete}>Delete</button>
            </div>
          )}
        </div>
      ) : (
        <p>No data found</p>
      )}
    </div>
  );
};

export default DisplayComponent;
