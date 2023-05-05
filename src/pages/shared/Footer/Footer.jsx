import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';


const Footer = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container className='d-block text-center'>
            <h4 className='text-white my-auto d-block py-2'><b>BDChefs</b></h4>
            <div className='d-flex justify-content-center py-2'>
            <Nav className="mx-auto">
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
            </div>
            <div>
                <p className='text-white pt-4'><small>Copyright 2023 - BD Chef - All Rights Reserved</small></p>
            </div>
        </Container>
        </Navbar>
    );
};

export default Footer;