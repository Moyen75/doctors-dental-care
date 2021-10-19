import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import '../Header/Header.css'

const Footer = () => {
    return (
        <div className='footer mt-5'>
            <Row xs={1} md={3} xl={3} className="g-4">
                <Col>
                    <Card.Body>
                        <Card.Title> <h2>Doctors Dental Care</h2> </Card.Title>
                        <Card.Text>
                            We’re a friendly team of dentists working together to ensure that you receive the best treatment that you require
                        </Card.Text>
                    </Card.Body>
                </Col>
                <Col>
                    <Card.Body>
                        <Card.Title> <h3>About Doctor's Dental Care</h3> </Card.Title>
                        <Card.Text>
                            <div className='d-flex justify-content-between'>
                                <div>
                                    <a href="/home">Our Dental</a>
                                    <a href="#doctors">Team</a>
                                    <a href="#awards">Our Awards</a>
                                    <a href="services">Sevices</a>
                                </div>
                                <div>
                                    <a href="#price">Pricing & pricelist</a>
                                    <a href="#clients">Clients</a>
                                    <a href="#solutions">Our solutions</a>
                                </div>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Col>
                <Col>
                    <Card.Body>
                        <Card.Title> <h2>Social Networks</h2> </Card.Title>
                        <Card.Text>
                            Visit Doctors's Dental Care  on these social links.
                            <div>
                                <i className="fab fa-facebook-f p-2"></i>
                                <i className="fab fa-twitter p-2"></i>
                                <i className="fab fa-instagram p-2"></i>
                            </div>
                        </Card.Text>
                    </Card.Body>

                </Col>
            </Row>
            <p className='text-light bg-dark'>&copy;2021,allrights reserved. Doctor's Dental Care.</p>
        </div>
    );
};

export default Footer;