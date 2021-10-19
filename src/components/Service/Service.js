import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Header/Header.css'

const Service = (props) => {
    const { name, title, img, description, id } = props.service;
    return (
        <div>
            <Col className='doc'>
                <Card>
                    <div className='card-img'>
                        <Card.Img variant="top" src={img} /></div>
                    <Card.Body className='service'>
                        <div>
                            <p>{title}</p>
                        </div>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text className="doc-about">{description.slice(0, 83)}
                        </Card.Text>
                        <Link to={`/service/${id}`}><button className='btn btn-success'>See details</button></Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;