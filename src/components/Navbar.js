import React from 'react';
import { Link } from 'react-router-dom';

//COMPONENTS
import CartWidget from './CartWidget';

//STYLES
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand" to="/">
          DevsShop
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon">
            <i className="fas fa-bars"></i>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav m-auto my-2 my-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Nosotros <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Productos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Ofertas
              </Link>
            </li>
          </ul>
          <div className="navbar-right">
            <form className="d-flex">
              <input
                className="px-2 search"
                type="search"
                placeholder="Search Product"
                aria-label="Search"
              />
              <button className="btn-search" type="submit">
                <i className="fas fa-search"></i>
              </button>
            </form>
          </div>
        </div>
        <CartWidget />
      </div>
    </nav>
  );
};

export default Navbar;
