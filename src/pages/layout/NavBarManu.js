import  React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faCode, faHome, faList, faPhone, faUser } from '@fortawesome/free-solid-svg-icons'
import { Navbar, Nav } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
 
class NavBarManu extends Component {
    render() {

        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home"> User page</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-na" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home"><Link to="/">
                                <FontAwesomeIcon icon={faHome} /> Home</Link></Nav.Link>
                                <Nav.Link href="#link"><Link to="/Items">
                                <FontAwesomeIcon icon={faList} /> ListingUsers </Link></Nav.Link>
                                
                        
                                {
                                    localStorage.getItem('SignInOutContainer') ?
                                    <Nav.Link href="#link"><Link to="/logout">
                                <FontAwesomeIcon icon={faUser} /> Logout</Link></Nav.Link>
                                    :
                                    <Nav.Link href="#link"><Link to="/SignInOutContainer">
                                <FontAwesomeIcon icon={faUser} /> SignInOutContainer</Link></Nav.Link>
                                }
                                
                                
                        </Nav>
                        
                    </Navbar.Collapse>
                    <Nav.Link href="#link"><Link to="/users/add"><FontAwesomeIcon icon={faAddressBook} /> Create New User</Link></Nav.Link>
                </Navbar>
            </div>
        )

    }
    
}

export default NavBarManu;