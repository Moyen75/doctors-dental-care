import React from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useData from '../../hooks/useData';
import Doctors from '../Doctors/Doctors';
import HomeBanner from '../HomeBanner/HomeBanner';
import Service from '../Service/Service';
import TopHome from '../TopHome/TopHome';

const Home = () => {
    const services = useData();
    return (
        <div className='pt-5'>
            <HomeBanner></HomeBanner>
            <TopHome></TopHome>
            <h1>Our services</h1>
            <hr className='w-25 mx-auto text-success ' />
            <Row xs={1} sm={2} xl={3} className='g-4 pb-3'>
                {
                    services?.slice(0, 6).map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </Row>
            <Link to='/services'>
                <button className='btn btn-warning'>View all services</button></Link>
            <Doctors></Doctors>
        </div>
    );
};

export default Home;