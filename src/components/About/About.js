import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import logo from '../../images/dentalia-demo-team-720x720.jpg'
import '../Header/Header.css'

const About = () => {
    return (
        <div className='mt-5 p-5'>
            <Row xs={1} md={3} className="g-4">
                <Col className='mt-5 pt-5'>
                    <h6>WE ARE DENTALIA</h6>
                    <h1>Creating Beautiful Smiles Since 1999</h1>
                    <p className='doc-about'>Dentalia is a modern dental clinic, specialised in advanced diagnostics and treatment of dental disorders. We guarantee comprehensive diagnostics and offer various forms of dental care, surgical procedures, and cosmetic dental services.</p>
                </Col>
                <Col>
                    <Card.Img variant="top" className='rounded-circle' src={logo} />
                </Col>
                <Col className='mt-5 pt-5'>
                    <h1>Our mission</h1>
                    <p className='doc-about'>Dentalia is a modern dental clinic, specialised in advanced diagnostics and treatment of dental disorders. We guarantee comprehensive diagnostics and offer various forms of dental care, surgical procedures, and cosmetic dental services.</p>
                </Col>
            </Row>
        </div>
    );
};

export default About;