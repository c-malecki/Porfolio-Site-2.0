import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {NavLink} from 'react-router-dom';
import logo from '../images/CM.png';

// change links to components and proper react-router
class MobileNavigation extends Component {
    handleChangePage(id) {
        this.props.changePage(id)
    }
    render() {
        return (
            <div className='mobile-nav'>
                <Navbar style={{background:'black'}} variant="dark" expand="lg">
                    <Navbar.Brand to="/home"><img src={logo} alt=''/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" style={{borderColor:'rgb(255,255,255,0.8)'}}/>
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavLink 
                            to="/home"
                            onClick={() => this.handleChangePage(0)}
                        >
                            HOME
                        </NavLink>
                        <NavLink 
                            to="/about"
                            onClick={() => this.handleChangePage(1)}
                        >
                            ABOUT
                        </NavLink>
                        <NavLink 
                            to="/projects"
                            onClick={() => this.handleChangePage(2)}
                        >
                            PROJECTS
                        </NavLink>
                        <NavLink 
                            to="/contact"
                            onClick={() => this.handleChangePage(3)}
                        >
                            CONTACT
                        </NavLink>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default MobileNavigation