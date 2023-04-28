import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";
import { AuthContext } from '../../../Provider/AuthProder/AuthProvider';
import { FaUser } from 'react-icons/fa';

const NavigationBar = () => {
    const { user } = useContext(AuthContext)
    return (
        <Container>
            <div className='d-flex text-center ' >
                <Button variant="danger">Danger</Button>
                <Marquee className='text-danger' speed={50}>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link className='text-decoration-none text-success mt-2' to='/'>Home</Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#pricing">Career</Nav.Link>
                        </Nav>
                        <Nav>
                            {user ?
                                <>
                                    <FaUser className='me-2 mt-2'></FaUser>
                                    <Link className='btn btn-secondary'>LogOut</Link>
                                </> :
                                <Link className='btn btn-secondary' to="/login">logIn</Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;