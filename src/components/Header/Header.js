import React from 'react';
import { Container, Form, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar bg="dark" variant='dark' fixed='top' expand="lg">
                <Container >
                    <Link to='/home'><Navbar.Brand >Doctor's Dental Care</Navbar.Brand></Link>
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
                            {
                                user.email && <h4 className='text-light'>Hello {user.displayName}</h4>
                            }
                            {
                                user.email ?
                                    <Link to='/login'><button onClick={logOut} className='btn btn-warning'>log out</button></Link>
                                    :
                                    <Nav.Link><Link to='/login'>Sign in</Link></Nav.Link>}
                        </Form>
                    </Navbar.Collapse>
                </Container>
                <hr />
            </Navbar>
        </div>
    );
};

export default Header;