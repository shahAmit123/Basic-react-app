import React from 'react';
import Navbar from '../Navbar/Navbar';
import Table from '../Table/Table';
import About from '../About/About';
import Contact from '../Contact/Contact';
import { Route } from 'react-router-dom'
function Project() {
  return (
      <div>
        <Navbar />
        <Route path="/" exact component={Table}/>
        <Route path="/about" exact component={About}/>
        <Route path="/contact" exact component={Contact}/>
      </div>  
    );
}

export default Project;