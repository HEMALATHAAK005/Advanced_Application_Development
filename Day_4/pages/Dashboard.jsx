import React, { useState } from 'react';
import '../css/dashboard.css';

function Dashboard() {
  const [orders, setOrders] = useState(160);
  const [revenueData, setRevenueData] = useState([
    { month: 'January', revenue: 200 },
    { month: 'February', revenue: 400 },
    { month: 'March', revenue: 600 },
    { month: 'April', revenue: 800 },
    { month: 'May', revenue: 1000 },
    { month: 'June', revenue: 1200 },
  ]);

  const [recentBookings] = useState([
    { bookingId: 1, service: 'Service A', quantity: 2, totalPrice: 50 },
    { bookingId: 2, service: 'Service B', quantity: 1, totalPrice: 30 },
    { bookingId: 3, service: 'Service C', quantity: 3, totalPrice: 80 },
    { bookingId: 4, service: 'Service D', quantity: 2, totalPrice: 60 },
    { bookingId: 5, service: 'Service E', quantity: 1, totalPrice: 40 },
  ]);

  // Function to generate random revenue data
  const generateRandomRevenueData = () => {
    const data = revenueData.map(item => ({
      ...item,
      revenue: Math.floor(Math.random() * 1000) + 200
    }));
    setRevenueData(data);
  };

  return (
    <div style={{ padding: '20px' }}>
      <br/><br/><br/>
      <h1>Welcome Admin!</h1>
      <h2>Dashboard</h2>
      
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div>
          <h3>Orders</h3>
          <p>{orders}</p>
        </div>
        <div>
          
          <h3>Total Revenue</h3>
          <p>{revenueData.reduce((sum, item) => sum + item.revenue, 0)}</p>
        </div>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>Revenue Data</h3>
        <table style={{ width: '100%', border: '1px solid #ccc', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th>Month</th>
              <th>Revenue</th>
            </tr>
          </thead>
          <tbody>
            {revenueData.map(item => (
              <tr key={item.month}>
                <td>{item.month}</td>
                <td>{item.revenue}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Display a button to generate random revenue data */}
       </div>

      <div style={{ marginTop: '20px' }}>
        <h3>Recent Bookings</h3>
        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #ccc' }}>
              <th style={{ padding: '8px', textAlign: 'left' }}>Booking ID</th>
              <th style={{ padding: '8px', textAlign: 'left' }}>Service</th>
              <th style={{ padding: '8px', textAlign: 'left' }}>Quantity</th>
              <th style={{ padding: '8px', textAlign: 'left' }}>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {recentBookings.map(booking => (
              <tr key={booking.bookingId} style={{ borderBottom: '1px solid #ccc' }}>
                <td style={{ padding: '8px' }}>{booking.bookingId}</td>
                <td style={{ padding: '8px' }}>{booking.service}</td>
                <td style={{ padding: '8px' }}>{booking.quantity}</td>
                <td style={{ padding: '8px' }}>{booking.totalPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
