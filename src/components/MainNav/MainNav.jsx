import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './MainNav.scss';

const MainNav = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto navLinks">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? 'nav-active' : ''
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive ? 'nav-active' : ''
                            }
                        >
                            About
                        </NavLink>
                        <NavLink
                            to="/test"
                            className={({ isActive }) =>
                                isActive ? 'nav-active' : ''
                            }
                        >
                            Test
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MainNav;