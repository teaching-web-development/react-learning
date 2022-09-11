import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { CountContext } from '../App';
import './MainNav.scss';

const MainNav = () => {
    const result = React.useContext(CountContext);
    console.log('nav', result);
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto navLinks">
                        <Link to="/home">Home</Link>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive ? 'text-danger' : ''
                            }
                        >
                            About
                        </NavLink>
                        <NavLink
                            to="/blog"
                            className={({ isActive }) =>
                                isActive ? 'text-danger' : ''
                            }
                        >
                            Blog
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MainNav;