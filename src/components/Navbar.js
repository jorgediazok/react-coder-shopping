import React from 'react';
import { Link, NavLink } from 'react-router-dom';

//COMPONENTS
import CartWidget from './CartWidget';

//STYLES
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <NavLink exact className="navbar-brand" to="/">
          DevsShop
        </NavLink>
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
              <NavLink
                className="nav-link"
                to="/category/comfort"
                activeClassName="activeClass">
                Comfort <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/category/tecnologia"
                activeClassName="activeClass">
                Tecnología
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/category/accesorios"
                activeClassName="activeClass">
                Accesorios
              </NavLink>
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
        <Link to="/cart">
          <CartWidget />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
