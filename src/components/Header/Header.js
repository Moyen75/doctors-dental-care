import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Form, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant='dark' fixed='top' expand="lg">
                <Container >
                    <Link to='/home'><Navbar.Brand >Doctors's Dental Care</Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link><Link to='/home'>Home</Link></Nav.Link>
                            <Nav.Link><Link to='/about'>About us</Link></Nav.Link>
                            <Nav.Link><Link to='/services'>services</Link></Nav.Link>
                            <Nav.Link><Link to='/contact'>contact us</Link></Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Nav.Link><Link to='/login'>Sign in</Link></Nav.Link>
                        </Form>
                    </Navbar.Collapse>
                </Container>
                <hr />
            </Navbar>
        </div>
    );
};

export default Header;