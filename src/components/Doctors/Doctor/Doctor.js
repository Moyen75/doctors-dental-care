import React from 'react';
import { Card, Col } from 'react-bootstrap';
import '../../Header/Header.css'

const Doctor = (props) => {
    const { name, title, about, img } = props.doctor;
    return (
        <div>
            <Col className='doc'>
                <Card.Img variant="top" src={img} />
                <Card.Body className='doctor'>
                    <p>{title}</p>
                    <Card.Title> {name} </Card.Title>
                    <Card.Text className='doc-about'>{about}
                    </Card.Text>
                </Card.Body>
            </Col>
        </div>
    );
};

export default Doctor;