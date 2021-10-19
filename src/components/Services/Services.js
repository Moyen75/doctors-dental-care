import React from 'react';
import { Row } from 'react-bootstrap';
import useData from '../../hooks/useData'
import Service from '../Service/Service';

const Services = () => {
    const services = useData();
    return (
        <div className='mt-3 pt-5'>
            <h1>Our Services</h1>
            <Row xs={1} md={3} xl={4} sm={2} className="g-4">
                {
                    services?.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </Row>
        </div>
    );
};

export default Services;