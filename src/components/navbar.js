import React, { useState } from 'react';
import '../index.css';


const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (

    <nav className="navbar">
      
      <div className="navbar-left">

        <img src="/Logomark.png" alt="Logo" className="navbar-logo" />
        <img src="/Vector.png" alt="Vector Logo" className="vector-logo" />

      </div>


     
      <div className="navbar-center">

        <button className="nav-link">Home</button>

        <div className="dropdown">

          <button
            className="nav-link dropdown-toggle"
            onClick={() => toggleDropdown('products')}
          >
            Products <span className="dropdown-icon">▼</span>
          </button>

          {activeDropdown === 'products' && (
            <div className="dropdown-menu">
              <button className="dropdown-item">Product 1</button>
              <button className="dropdown-item">Product 2</button>
              <button className="dropdown-item">Product 3</button>
            </div>
          )}

        </div>


        <div className="dropdown">

          <button
            className="nav-link dropdown-toggle"
            onClick={() => toggleDropdown('resources')}
          >
            Resources <span className="dropdown-icon">▼</span>
          </button>

          {activeDropdown === 'resources' && (
            <div className="dropdown-menu">
              <button className="dropdown-item">Resource 1</button>
              <button className="dropdown-item">Resource 2</button>
            </div>
          )}

        </div>

        <button className="nav-link">Pricing</button>

      </div>


    
      <div className="navbar-right">

        <img src="/profile.png" alt="Profile" className="navbar-profile" />

      </div>

    </nav>
  );
};

export default Navbar;
