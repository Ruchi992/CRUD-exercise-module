import React from "react";
import { Link, NavLink  } from "react-router-dom";
import {  Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <Navbar className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" href="/">
          Page User
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse">
          <Nav className="navbar-nav mr-auto">            
              <Nav.Link href="#home"><Link to="/"><FontAwesomeIcon icon={faHome} /> Home</Link></Nav.Link>
               
            

            <li className="nav-item">
              <NavLink className="nav-link"  to="/Login">
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link"  to="/Items">
                ListingUsers
              </NavLink>
            </li>
           
            <li className="nav-item">
              <NavLink className="nav-link"  to="/contact">
                Contact
              </NavLink>
            </li>
            {
              localStorage.getItem('login') ?
              
              <li className="nav-item">
              <NavLink className="nav-link"  to="/Logout">
                Logout
              </NavLink>
            </li>
            :
            <li className="nav-item">
            <NavLink className="nav-link"  to="/Logout">
              Logout
            </NavLink>
          </li>
            }
          
        

        <Link className="btn btn-outline-light" to="/users/add"> Create New User</Link>
        </Nav>
        </div>
        </div>
        </Navbar>
    
  );
};

export default Navbar;