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
                        <h3>Education and Clinical Training</h3>
                        <p>The level of education and clinical training required to earn a dental degree, and the high academic standards of dental schools, are on par with those of medical schools and are essential to preparing dentists for the safe and effective practice of modern oral health care.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="w-100 img"
                        src={bannerImg2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>More than Just Teeth and Gums</h3>
                        <p>Dentists' areas of care include not only their patients' teeth and gums but also the muscles of the head, neck and jaw, the tongue, salivary glands, the nervous system of the head and neck and other areas.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="w-100 img"
                        src={bannerImg3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Doctors of Oral Health</h3>
                        <p>The team approach to dentistry promotes continuity of care that is comprehensive, convenient, cost effective and efficient. Members of the team include dental assistants, lab technicians and dental hygienists.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default HomeBanner;