import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css'
const Home = () => {
  return (
    <div className='home-container'>
      <div className='text-container'>
        <h1>Welcome to What's for Dinner!</h1>
        <p>API Courtesy: <a href="https://developer.edamam.com/">EDAMAM</a></p>
<Button variant='dark'><Link id='link' to='/search'>Get Started</Link></Button>
      </div>
    </div>
  );
};

export default Home;