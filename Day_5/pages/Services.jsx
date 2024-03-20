import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Services.css'; // Import your CSS file

import { Link } from 'react-router-dom';

// Replace with actual image URLs (consider using a CDN for better performance)
const boathouseImages = [
  '	https://beautifulalleppey.com/wp-content/uploads/2021/03/Outside-Night-view.jpg',
  '	https://beautifulalleppey.com/wp-content/uploads/2020/03/FUll-top-view.jpg',
  'https://beautifulalleppey.com/wp-content/uploads/2019/08/MRB-Front-View-1.jpg',
  'https://beautifulalleppey.com/wp-content/uploads/2019/07/GOPR6807-1.jpg',
  '	https://toursinindia.in/images/houseboats/blueshell-cruise/blueshell-cruise.webp',
  'https://toursinindia.in/images/houseboats/single-room-boat/single-room-boat.webp',
  'https://toursinindia.in/images/houseboats/3-bed-luxury-houseboat/3bed-luxury-houseboat.webp',
  'https://toursinindia.in/images/houseboats/2-bed-deluxe-houseboats/2bed-deluxe-houseboat.webp',
  'https://toursinindia.in/images/houseboats/single-room-boat/single-room-boat.webp',


];
 const navigate=useNavigate;

const packagesData = [
  {
    id: 1,
    title: 'Romantic Getaway',
    description: 'Enjoy a private and romantic getaway for two with our cozy boathouse. Unwind and reconnect in a serene setting amidst nature. Perfect for celebrating anniversaries, honeymoons, or a special occasion.',
    duration: '2 Nights & 3 Days',
    price: 499.99,
    image: boathouseImages[0], // Use image URLs from the array
    
  },
  {
    id: 2,
    title: 'Adventure Cruise',
    description: 'Explore the backwaters and discover hidden gems with our adventurous boathouse experience. Navigate through scenic landscapes and enjoy thrilling water activities. Ideal for nature enthusiasts and adrenaline seekers.',
    duration: '3 Nights & 4 Days',
    price: 799.99,
    image: boathouseImages[1], // Use image URLs from the array
    
  },
  {
    id: 3,
    title: 'Family Fun Getaway',
    description: 'Create lasting memories with your family in our spacious boathouse. Enjoy water activities, explore local attractions, and relax in a comfortable setting.',
    duration: '4 Nights & 5 Days',
    price: 649.99,
    image: boathouseImages[2], // Replace with your image URL (different image)
  
  },
  {
    id: 4,
    title: 'Solo Retreat',
    description: 'Reconnect with yourself in the tranquility of nature. Enjoy solitude, breathtaking views, and personalized experiences.',
    duration: '3 Nights & 4 Days',
    price: 549.99,
    image: boathouseImages[3], // Replace with your image URL (different image)
  
  },
  {
    id: 5,
    title: 'Birdwatching Expedition',
    description: 'Immerse yourself in the world of birds with our expert guides. Spot a variety of species and learn about their habitats on this unique boathouse experience.',
    duration: '4 Nights & 5 Days',
    price: 899.99,
    image: boathouseImages[4], // Replace with your image URL (different image)
  
  },
  {
    id: 6,
    title: 'Fishing Extravaganza',
    description: 'Cast your line and challenge yourself to catch a variety of fish in pristine waters. Our experienced guides will assist you.',
    duration: '3 Nights & 4 Days',
    price: 749.99,
    image: boathouseImages[5], // Replace with your image URL (different image)
  
  },
  {
    id: 7,
    title: 'Culinary Cruise',
    description: 'Embark on a culinary adventure aboard our boathouse. Enjoy delicious meals prepared by renowned chefs, featuring fresh local ingredients and stunning waterfront views.',
    duration: '4 Nights & 5 Days',
    price: 999.99,
    image: boathouseImages[6], // Replace with your image URL (different image)
  },
  {
    id: 8,
    title: 'Sunset Serenity',
    description: "Unwind and soak in the breathtaking beauty of a sunset cruise from the comfort of your private boathouse. Relax, reconnect, and create lasting memories.",
    duration: '2 Nights & 3 Days',
    price: 399.99,
    image: boathouseImages[7], // Replace with your image URL (different image)
  },
  
  
];

const Services = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const addToCart = (packageData) => {
    
    setCart([...cart, packageData]);
    
     navigate('/book'); // Uncomment if you want to redirect after adding to cart
  };

  const BoathousePackage = ({ packageData }) => {
    const { id, title, description, duration, price, image, activities } =
      packageData;

    return (
      <div key={id} className="products-item">
        
        <img src={image} alt={title} />
        <h2>{title}</h2>
        <p>{description}</p>
        <span>Duration: {duration}</span>
        <span>Price: &#8377;{price.toFixed(2)}</span>

       

        <button onClick={() => addToCart(packageData)}>Book Now</button>

        {/* Optional: Add star rating component or badge for featured packages */}
        {/* {/* Replace with your rating component or logic */}
        <div className="rating">
          {/* Display average rating or allow user reviews */}
        </div>
        
      </div>
    );
  };

  return (
    <div>
      <br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/>
      {/* Display Navbar component (assuming it exists elsewhere) */}
      <section className="sections all-products" id="products">
      <br/><br/>
        <div className="bold-centerrr">
  BoatHouse Booking Packages 
</div>
<br/> <br/>
        <div className="package-grid">
          {packagesData.map((packageData) => (
            <BoathousePackage key={packageData.id} packageData={packageData} />
          ))}
        </div>
      </section>

      {/* Other sections or components for your services page (if needed) */}
      {/* For example: */}
      <section className="section about-us">
        <h2>About Our Boathouses</h2>
        <p>
          {/* Add detailed information about your boathouses and services */}
          Our boathouses are meticulously crafted for comfort and provide a unique way to experience the beauty of nature. We offer a variety of packages to cater to different interests, from romantic getaways to adventurous excursions.
        </p>
        <Link to="/about"><h2>Learn More</h2></Link>  {/* Link to a dedicated About Us page */}
      </section>
    </div>
  );
};

export default Services;
