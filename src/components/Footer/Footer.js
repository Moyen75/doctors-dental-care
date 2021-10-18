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
                                    <a href="#">Our Dental</a>
                                    <a href="#">Team</a>
                                    <a href="#">Our Awards</a>
                                    <a href="#">Sevices</a>
                                </div>
                                <div>
                                    <a href="">Pricing & pricelist</a>
                                    <a href="">Clients</a>
                                    <a href="">Our solutions</a>
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
                        </Card.Text>
                    </Card.Body>

                </Col>
            </Row>
        </div>
    );
};

export default Footer;