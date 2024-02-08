// src/components/About.js
import React from 'react';
import { Link, Outlet } from 'react-router-dom'; // Import Outlet


const About = () => {
  return (
    <div>
      <h2>About Page</h2>
      <p>About name is clicked from home component</p>
      <p><Link to="contact">Go to Contact</Link></p>
      <Outlet />
    </div>
    
  );
};

export default About;
