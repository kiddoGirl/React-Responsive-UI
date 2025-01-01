import React, { useState } from 'react';
import '../index.css';

const Navbar = () => {

  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (

    <section>
      
      <nav className="navbar">
        
        <div className="navbar-left">

          <img src="/brand.png" alt="Logo" className="navbar-logo" />
        
          <button className="nav-link">Home</button>

          <div

            className="dropdown"
            onMouseEnter={() => toggleDropdown('products')}
            onMouseLeave={() => toggleDropdown(null)}
          >

            <button className="nav-link dropdown-toggle">
              Products <img src="/drop-down.png" alt="Arrow" className="dropdown-icon" />
            </button>

            {activeDropdown === 'products' && (
              <div className="dropdown-menu">
                <span className="dropdown-item">Product 1</span>
                <span className="dropdown-item">Product 2</span>
                <span className="dropdown-item">Product 3</span>
              </div>
            )}

          </div>



          <div
            className="dropdown"
            onMouseEnter={() => toggleDropdown('resources')}
            onMouseLeave={() => toggleDropdown(null)}
          >

            <button className="nav-link dropdown-toggle">
              Resources <img src="/drop-down.png" alt="Arrow" className="dropdown-icon" />
            </button>

            {activeDropdown === 'resources' && (
              <div className="dropdown-menu">
                <span className="dropdown-item">Resource 1</span>
                <span className="dropdown-item">Resource 2</span>
              </div>
            )}

          </div>


          <button className="nav-link">Pricing</button>

        </div>



        
        <div className="navbar-right">

          <img
            src="/profile.png"
            alt="Menu"
            className="side-navbar-icon"
            onClick={toggleSideNav}
          />

        </div>

      </nav>


      
      <div className={`side-navbar ${isSideNavOpen ? 'open' : ''}`}>

        <button className="close-btn" onClick={toggleSideNav}>
          &times;
        </button>

        <button className="nav-link">Home</button>

        <div className="dropdown">

          <button className="nav-link dropdown-toggle" onClick={() => toggleDropdown('products')}>
            Products
          </button>

          {activeDropdown === 'products' && (
            <div className="dropdown-menu">
              <span className="dropdown-item">Product 1</span>
              <span className="dropdown-item">Product 2</span>
              <span className="dropdown-item">Product 3</span>
            </div>
          )}

        </div>


        <div className="dropdown">

          <button className="nav-link dropdown-toggle" onClick={() => toggleDropdown('resources')}>
            Resources
          </button>

          {activeDropdown === 'resources' && (
            <div className="dropdown-menu">
              <span className="dropdown-item">Resource 1</span>
              <span className="dropdown-item">Resource 2</span>
            </div>

          )}

        </div>

        <button className="nav-link">Pricing</button>

      </div>

    </section>


  );
};

export default Navbar;
