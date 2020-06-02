import React from 'react';
import { BrowserRouter ,Router, Link } from 'react-router-dom'
import './Navbar.css'
function Navbar() {
  return (
      <div>
        <header>
            <h1>CODE<span>INSTICT</span></h1>
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