import React from 'react';
import { Row } from 'react-bootstrap';
import useData from '../../hooks/useData';
import Doctors from '../Doctors/Doctors';
import HomeBanner from '../HomeBanner/HomeBanner';
import Service from '../Service/Service';

const Home = () => {
    const services = useData();
    return (
        <div className='pt-5'>
            <HomeBanner></HomeBanner>
            <h1>Our services</h1>
            <Row xs={1} sm={2} xl={3} className='g-4'>
                {
                    services?.slice(0, 6).map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </Row>
            <Doctors></Doctors>
        </div>
    );
};

export default Home;