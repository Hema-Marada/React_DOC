// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/Integration">Integration</Link></li>
        <li><Link to="/post">Post API</Link></li>
        <li><Link to="/task">Task</Link></li>
        <li><Link to="/put">Put API</Link></li>
        <li><Link to="/hoc">HOCs</Link></li>
        <li><Link to="/auth">OAuth</Link></li>






      </ul>
    </div>
  );
};

export default Home;
