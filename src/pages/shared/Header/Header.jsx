import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {

    

    const {user, logOut} = useContext(AuthContext);
        console.log(user)
    const handleLogOut = () => {
        logOut() 
        .then()
        .catch(error => console.log(error.message))
    }

    const notify = () => toast(`Name: ${user.displayName}`)

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
                    {user && <img onMouseEnter={notify} style={{width: "40px", height: "40px", borderRadius: "50%"}} src={user.photoURL} alt="" />
                    }
                    
                    <ToastContainer></ToastContainer>
                    
                    {user ? <Button onClick={handleLogOut} variant="dark">Logout</Button> : 
                            <NavLink
                            to="/login"
                            className={({ isActive, isPending }) =>
                                isPending ? "mx-2 text-white text-decoration-none" : isActive ? "mx-2 text-success text-decoration-none" : "text-decoration-none text-white mx-2"
                            }
                            > Login
                            </NavLink>
                    }
                    
                </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
};

export default Header;