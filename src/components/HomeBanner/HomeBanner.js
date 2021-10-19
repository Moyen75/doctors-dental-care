import React from 'react';
import { Carousel } from 'react-bootstrap';
import bannerImg1 from '../../images/beautiful-dentist-working-dental-clinic.jpg'
import bannerImg2 from '../../images/happy-young-woman-smiling.jpg'
import bannerImg3 from '../../images/stomatologist-doctor-explaining-proper-dental-hygiene-patient-holding-sample-human-jaw.jpg'
import '../Header/Header.css'

const HomeBanner = () => {
    return (
        <div className='mt-2 carousel'>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="w-100 img"
                        src={bannerImg1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <div>
                            <h1 className='text-dark'>Education and Clinical Training</h1>
                            <p>The level of education and clinical training required to earn a dental degree, and the high academic standards of dental schools.</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="w-100 img"
                        src={bannerImg2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <div>
                            <h1 className='text-dark'>More than Just Teeth and Gums</h1>
                            <p>Dentists' areas of care include not only their patients' teeth and gums but also the muscles of the head.</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="w-100 img"
                        src={bannerImg3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <div>
                            <h1 className='text-dark'>Doctors of Oral Health</h1>
                            <p>The team approach to dentistry promotes continuity of care that is comprehensive, convenient.</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default HomeBanner;