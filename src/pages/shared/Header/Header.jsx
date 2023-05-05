import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="/"><b>BDChefs</b></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "text-white text-decoration-none mx-2" : isActive ? "text-success text-decoration-none mx-2" : "text-decoration-none text-white mx-2"
                }
                > Home
                </NavLink>
                <NavLink
                to="/blog"
                className={({ isActive, isPending }) =>
                    isPending ? "mx-2 text-white text-decoration-none" : isActive ? "mx-2 text-success text-decoration-none" : "text-decoration-none text-white mx-2"
                }
                > Blog
                </NavLink>
                </Nav>
                <Nav>
                <img style={{width: "30px", height: "30px"}} src="../../../../public/vite.svg" alt="" />
                <Link className='mx-2 text-white text-decoration-none' to="/login">Login</Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
};

export default Header;