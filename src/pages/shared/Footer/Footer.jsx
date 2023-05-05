import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container className='d-block text-center'>
            <h4 className='text-white my-auto d-block py-2'><b>BDChefs</b></h4>
            <div className='d-flex justify-content-center py-2'>
                <Link className='text-decoration-none mx-2 text-white' to="/">Home</Link>
                <Link className='text-decoration-none mx-2 text-white' to="/">Blog</Link>
            </div>
            <div>
                <p className='text-white pt-4'><small>Copyright 2023 - BD Chef - All Rights Reserved</small></p>
            </div>
        </Container>
        </Navbar>
    );
};

export default Footer;