import React from 'react';
import Project from './components/Project/Project';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Project />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
