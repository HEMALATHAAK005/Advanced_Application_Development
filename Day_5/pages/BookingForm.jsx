import React, { useState } from 'react';
import '../css/book.css'; // Import CSS file for styling
import { Link } from 'react-router-dom';

const BookingForm = () => {
  // State variables to store form data
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState('');
  const [boathouseType, setBoathouseType] = useState('');
  const [additionalRequirements, setAdditionalRequirements] = useState('');
  const [bookingSuccess, setBookingSuccess] = useState(false);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically check availability with a backend service.
    // For now, let's simulate availability with a boolean variable.
    const isAvailable = checkAvailability(date);
    if (isAvailable) {
      // Here you can send the form data to your backend or perform any necessary actions
      console.log("Form submitted!");
      setBookingSuccess(true);
      // Reset the form after successful booking
      resetForm();
    } else {
      alert("The selected date is not available. Please select another date.");
    }
  };

  // Function to check availability (simulated)
  const checkAvailability = (selectedDate) => {
    // Simulated availability check
    // Replace this with your backend integration for real availability check
    return selectedDate !== '2024-03-25'; // For example, assume the date '2024-03-25' is not available
  };

  // Function to reset the form after successful booking
  const resetForm = () => {
    setName('');
    setEmail('');
    setDate('');
    setNumberOfPeople('');
    setBoathouseType('');
    setAdditionalRequirements('');
  };

  // Function to handle the close of the success popup
  const handleClosePopup = () => {
    setBookingSuccess(false);
  };

  return (
    
    <div className="booking-form-container">
      <h2>Boathouse Booking Form</h2>
      <form onSubmit={handleSubmit} className="booking-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="numberOfPeople">Number of People:</label>
          <input
            type="number"
            id="numberOfPeople"
            value={numberOfPeople}
            onChange={(e) => setNumberOfPeople(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="boathouseType">Boathouse Type:</label>
          <select
            id="boathouseType"
            value={boathouseType}
            onChange={(e) => setBoathouseType(e.target.value)}
            required
          >
            <option value="">Select Boathouse Type</option>
            <option value="Single">Single</option>
            <option value="Double">Double</option>
            <option value="Family">Family</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="additionalRequirements">Additional Requirements:</label>
          <textarea
            id="additionalRequirements"
            value={additionalRequirements}
            onChange={(e) => setAdditionalRequirements(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {/* Success popup */}
      {bookingSuccess && (
        <div className="success-popup">
          <p>Booking successful!</p>
          <button onClick={handleClosePopup}>
            <Link to ='/'>Close</Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default BookingForm;
