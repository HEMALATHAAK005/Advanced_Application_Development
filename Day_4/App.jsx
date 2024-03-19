import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './Components/Navbar';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';
import Aboutus from './pages/Aboutus';
import Footer from './Components/Footer';
import BookHome from './pages/BookingForm';
import BookingForm from './pages/BookingForm';
import Dashboard from './pages/Dashboard';


const router = createBrowserRouter([
  {
    path:"/",
    element: <Home/>,
  },
  {
    path:"/login",
    element:<Login/>,
  },
  {
    path:"/signup",
    element:<Signup/>,
  },
  {
    path:"/services",
    element:<Services/>,
  },
  {
    path:"/contact",
    element: <ContactUs/>,
  },
  {
    path:"/about",
    element: <Aboutus/>,
  },
  {
    path:"/book",
    element: <BookingForm/>,
  },
  {
    path:"/dashboard",
    element: <Dashboard/>,
  },

])
function App() {
  return (
    <div className='App'>
      <RouterProvider router={router}/>
      <Navbar/>
     
      
      
    </div>
  );
}

export default App;