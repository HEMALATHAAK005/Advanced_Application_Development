import React from 'react';
import '../css/AboutUs.css';

import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';

function Aboutus() {
  return (
    <div>
      <br/><br/><br/><br/>

      <section className="about">
      <br/>
      <div className="bold-centerrr">
        
        BoatHouse Haven
</div>
        
        <br/>
       
        <div className="bold-center">
        Your Trusted BoatHouse Booking website
</div>
        <div className="about-info">
          <div className="about-img">
            <img
              src="https://toursinindia.in/images/houseboats/6-bed-standard-houseboats/03.webp"
              alt="Home Appliance Service Centre"
            />
          </div>
          <div>
            <p>
              "Boathouse Haven, your gateway to unforgettable experiences, 
              invites you to unwind in luxurious houseboats
               on the serene backwaters of Kerala. 
               Explore breathtaking natural beauty, captivating lagoons,
                and charming villages as you cruise. Our dedicated crew 
                ensures a seamless journey, allowing you to escape the everyday and reconnect with nature. 
                Choose Boathouse 
              Haven and experience the magic of Kerala's backwaters."
            </p>
          </div>
        </div>
      </section>

      <section className="team">
        <h1>Meet Our Team</h1>
        <div className="team-cards">
          <div className="card">
            <div className="card-img">
              <img
                src="https://media.istockphoto.com/id/1312451456/photo/business-woman-at-office-stock-photo.jpg?s=612x612&w=0&k=20&c=1L7yTeY2VcQpm7NgmwHj6rKudVkc0skMAH7Ot5T2oZo="
                alt="Technician 2"
              />
            </div>
            <div className="card-info">
              <h2 className="card-name">Hemalathaa</h2>
              <p className="card-role">CEO and Founder</p>
              <p className="card-email">hemalathaa@gmail.com</p>
              <p>
                <Link to="/contact">
                  <button className="buttons">Contact</button>
                </Link>
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-img">
              <img
                src="https://img.freepik.com/free-photo/smiling-confident-businesswoman-posing-with-arms-folded_1262-20950.jpg"
                alt="Technician 1"
              />
            </div>
            <div className="card-info">
              <h2 className="card-name">Kabila</h2>
              <p className="card-role">Co-Founder</p>
              <p className="card-email">kabila@gmail.com</p>
              <p>
                <Link to="/contact">
                  <button className="buttons">Contact</button>
                </Link>
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-img">
              <img
                src="https://media.istockphoto.com/id/1056257342/photo/portrait-of-joyful-professional.jpg?s=612x612&w=0&k=20&c=D9H23OM1-heW-xjvmQftBp_YMbZh-n9KFnCb2hE3SHo="
                alt="Technician 3"
              />
            </div>
            <div className="card-info">
              <h2 className="card-name">Mahesh</h2>
              <p className="card-role">Co-Founder</p>
              <p className="card-email">xyz@gmail.com</p>
              <p>
                <Link to="/contact">
                  <button className="buttons">Contact</button>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Aboutus;
