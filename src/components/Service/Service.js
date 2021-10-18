import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Header/Header.css'

const Service = (props) => {
    const { name, title, img, description, price, id } = props.service;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body className='service'>
                        <p>{title}</p>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{description.slice(0, 200)}
                        </Card.Text>
                        <Link to={`/service/${id}`}><button className='btn btn-success'>See details</button></Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;