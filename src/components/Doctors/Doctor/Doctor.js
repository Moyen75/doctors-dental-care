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
                    <button className='btn btn-success'>Book Your Appointment</button>
                    <div>
                        <i className="fab fa-facebook-f p-2"></i>
                        <i className="fab fa-twitter p-2"></i>
                        <i className="fab fa-instagram p-2"></i>
                    </div>
                </Card.Body>
            </Col>
        </div>
    );
};

export default Doctor;