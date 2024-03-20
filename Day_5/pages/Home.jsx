import React from 'react';
import { Link } from 'react-router-dom';
import '../css/hstyle.css';
function ProductItem({ imageUrl }) {
  const cardStyle = {
    display: 'inline-block',
    margin: '0 10px',
    marginLeft: '40px', // Adjust margin-left to move the cards towards the right
    width: '200px', // Adjust width as needed
    textAlign: 'center',
  };

  return (
    <div style={cardStyle}>
      <img src={imageUrl} alt="Product" style={{ width: '100%', height: 'auto' }} />
      <ul className="icons">
        <li><i className="bx bx-heart"></i></li>
        <li><i className="bx bx-search"></i></li>
        <li><i className="bx bx-cart"></i></li>
      </ul>
    </div>
  );
}

// Define Home component
function Home() {
  return (
    <div>
      

      {/* New Arrivals Section */}
      <section className="section new-arrival">
        <div className="title1">
          <br/><br/><br/><br/><br/>
          <br/><br/><br/><br/>
          <br/><br/>
        </div>
      </section>

      {/* Promo Section */}
      <section className="section banner">
        <div className="left">
          <span className="service-center">Boathouse Voyage Services </span>
          <h1>Unleash Your Adventure</h1>
          <p>The Boathouse Voyage Curators <span className="color">providing seamless boating experience</span></p>
          <div className="btn btn-1">
            <Link to="/services" style={{ color: 'white' }}>
              <h4>Explore Packages</h4>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="section new-arrival">
        <div className="title">
         
<div className="bold-center">
  <b>Welcome to BoatHouse Haven</b>
</div>

          <br/>
          <p>Alleppey, frequently referred to as Alappuzha, is a magnificent coastal area in Kerala that is well-known for its unusual combination of natural attractions. The area is well-known for its gorgeous patterns of lagoons, rivers, lakes, small canals, coconut trees, and vast rice fields. Located at the lowest point in India, Alleppey is an unusual find where farming is done between 1.2 and 3.0 metres (4 to 10 feet) below sea level, which gives rise to the fascinating Alleppey backwater tourism industry. The conversion of old cargo boats, known as Kettuvallams, into opulent houseboats is one of the region's unique attractions. Once used to carry goods like rice, spices, and other products for trade, these houseboats today provide tourists with an exquisite and distinctive experience. These houseboats, which come furnished with bedrooms, a kitchen, a living space, bathrooms, and other modern conveniences, provide guests with the chance to relax and take in Alappuzha's stunning scenery as they cruise down the calm backwaters.</p>
        </div>
        <div className="product-center">
        <div className="bold-center">
  <b>Our Happy Customers</b>
</div>
          <br/>
          <ProductItem imageUrl="https://toursinindia.in/images/houseboats/single-room-boat/single-room-boat.webp" />
          <ProductItem imageUrl="https://beautifulalleppey.com/wp-content/uploads/2019/08/MRB-Front-View-1.jpg" />
          <ProductItem imageUrl="https://beautifulalleppey.com/wp-content/uploads/2019/07/GOPR6807-1.jpg" />
          <ProductItem imageUrl="https://www.ttdconline.com/_next/boat-house/ooty/2.jpg" />
          <ProductItem imageUrl="https://www.ttdconline.com/_next/boat-house/ooty/3.jpg" />
          <ProductItem imageUrl="https://www.thehouseboatkerala.com/images/gallery/dlx-8-bed/dlx-8-bed-thumb.webp"/>
          
        </div>
      </section>

      {/* Contact Section */}
      <section className="section contact">
        <div className="row">
          <div className="col">
            <h2>EXCELLENT SUPPORT</h2>
            <p>We love our customers, and they can reach us anytime. We are at your service 24/7.</p>
          </div>
          <div className="col">
            <form action="">
              <div>
                <Link to="/contact">Contact Us</Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;