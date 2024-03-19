import React from "react";
import "../css/Footer.css"; 
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';



function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>48,East Pondy Road</p>
          <p>Villupuram,TamilNadu</p>
          <p>Email: appliance360@email.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              Home
            </li>
            <li>
              Services
            </li>
            <li>
              About Us
            </li>
            
          </ul>
        </div>
        <div className="footer-links">
          <h3>Our Information</h3>
          <ul>
            
            <li>
              Privacy Policy
            </li>
            <li>
              Terms & Conditions
            </li>
            <li>
            Feedback
            </li>
            <li>
              FAQ
            </li>

          </ul>
        </div>
        <div className="footer-links">
          <h3>Follow Us</h3>
          <ul>
            <li>
            
              <FacebookIcon /> Facebook
              
            </li>
            <li>
              <TwitterIcon /> Twitter
              
            </li>
            <li>
               <InstagramIcon /> Instagram
              
            </li>
            {}
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} BoatHouse Voyage</p>
      </div>
    </footer>
  );
}

export default Footer;
