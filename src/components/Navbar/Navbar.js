import React from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css'
function Navbar() {
  return (
      <div>
        <header>
        <img src={process.env.PUBLIC_URL + '/logo2.png'} alt="logo"/><h1>Student<span>List</span></h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                </ul>
            </nav>
        </header>        
      </div>      
  );
}

export default Navbar;