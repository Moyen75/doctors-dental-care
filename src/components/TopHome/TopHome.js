import React from 'react';
import logo from '../../images/after11.jpg'
import '../Header/Header.css'

const TopHome = () => {
    return (
        <div className=' bg-dark'>
            <div className='row m-4'>
                <div className='col-md-6 col-sm-12'>
                    <img className='w-100 p-3' src={logo} alt="" />
                </div>
                <div className='col-md-6 col-sm-12 text-light doc-about p-3'>

                    <h5 className='text-primary'>Before and after teeth whitening</h5>
                    <h1>Get a Hollywood Smile Today!</h1>
                    <p>A comprehensive Dental Centre became operational at United Hospital on 29th April 2012. The Dental Centre has been set up with the aim to provide an international standard dental treatment facility to satisfy and meet the demands of our community.</p>
                    <br />
                    <p>Our dentists Dr Md. Nazrul Islam and Dr Lutfun Nahar both completed their Masters from National University of Singapore and have a 5-years working experience in Singapore.</p>
                    <h3 className='text-success'>Dr. Jhankar Mahbub</h3>
                </div>
            </div>
        </div>
    );
};

export default TopHome;