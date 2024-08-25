import React from 'react';
import 'F:/MernStack-Tour-Management-main/tour-management/frontend/src/styles/home.css'
import {Container, Row,Col } from 'reactstrap';
import heroImg from 'F:/MernStack-Tour-Management-main/tour-management/frontend/src/assets/images/hero-img01.jpg';
import heroImg02 from 'F:/MernStack-Tour-Management-main/tour-management/frontend/src/assets/images/hero-img02.jpg';
import heroVideo from 'F:/MernStack-Tour-Management-main/tour-management/frontend/src/assets/images/hero-video.mp4';
import worldImg from 'F:/MernStack-Tour-Management-main/tour-management/frontend/src/assets/images/world.png';
import experienceImg from 'F:/MernStack-Tour-Management-main/tour-management/frontend/src/assets/images/experience.png'

import Subtitle from 'F:/MernStack-Tour-Management-main/tour-management/frontend/src/shared/Subtitle.jsx';

import SearchBar from 'F:/MernStack-Tour-Management-main/tour-management/frontend/src/shared/SearchBar.jsx';
import ServiceList from '../components/services/ServiceList';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';
import MasonryImagesGallery from 'F:/MernStack-Tour-Management-main/tour-management/frontend/src/components/Image-gallery/MasonryImagesGallery.jsx';
import Testimonials from '../components/Testimonial/Testimonials';
import Newsletter from '../shared/Newsletter';


const Home = () => {
  return( <>
  {/*==========hero section start =========== */}
  <section>
    <Container>
      <Row>
        <Col lg='6'>
          <div className="hero__content">
            <div className="hero__subtitle d-flex align-items-center">
              <Subtitle subtitle={'know Before You Go'}/>
              <img src={worldImg} alt="" />
            </div>
            <h1>Travelling opens the door to creating{""} 
            <span className="highlight"> memories</span></h1>
            <p> A hobby is a favorite pastime or activity that a person enjoys doing for fun in their free time. Hobbies can range from arts and crafts such as drawing, painting, and photography to outdoor activities such as hiking, skiing, and mountaineering. For some, hobbies also include traveling to different parts of the world, to explore new cultures and sights. Traveling is always enjoyable for many of us. Today we will get to know about traveling in detail.</p>
          </div>
        </Col>
        <Col lg='2'>
          <div className="hero__img-box">
            <img src={heroImg} alt="" />
          </div>
        </Col>
        <Col lg='2'>
          <div className="hero__img-box mt-4">
            <video src={heroVideo} alt="" controls />
          </div>
        </Col>
        <Col lg='2'>
          <div className="hero__img-box mt-5">
            <img src={heroImg02} alt="" />
          </div>
        </Col>

           <SearchBar/>
         </Row>
       </Container>
     </section>
     {/*==========hero section start==========*/}
     <section>
        <container>
           <Row>
               <Col lg='4'>
                <h5 className="services__subtitle">What we serve</h5>
                <h2 className="services__title">We offer our best services</h2>
             </Col>
              <ServiceList />
           </Row>
        </container>
     </section>
     {/*============== featured tour section start ===============*/}
     <section>
      <Container>
        <Row>
          <Col lg='12' className="mb-5">
            <Subtitle subtitle={'Explore'}/>
            <h2 className="featured__tour-title">Our featured tours</h2>
          </Col>
          <FeaturedTourList />
          
        </Row>
      </Container>
     </section>
     {/*============== featured tour section end ===============*/}

     {/*=============== experience section start ===============*/}
     <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="experience__content">
              <Subtitle subtitle={'Experience'}/>
              <h2>With our all experience<br/>we will serve you</h2>
              <p>The travel services sector helps travellers and their vacation or business trips. 
                <br/>
                This sector is made up of and that work in a coordinated effort to provide travellers with seamless arrangements to maximize their travel experience.
              </p>
            </div>
            <div className="counter__wrapper d-flex align-items-center gap-5">
              <div className="counter__box">
                <span>12k+</span>
                <h6>Successful trip</h6>
              </div>
              <div className="counter__box">
                <span>2k+</span>
                <h6>Regular clients</h6>
              </div>
              <div className="counter__box">
                <span>15</span>
                <h6>Years experience</h6>
              </div>
            </div>
            
            
          </Col>
          <Col lg='6'> 
          <div className="experience__img">
            <img src={experienceImg} alt="" />
          </div>
          
          </Col>

        </Row>
      </Container>
     </section>
     {/*============== experience section end ===============*/}
     {/*============== gallery section start ===============*/}
     <Container>
      <Row>
        <Col>
            <Subtitle subtitle={'Gallery'}/>
            <h2 className="gallery__title">Visit our customers tour gallery</h2>
        </Col>
        <Col lg='12'>
            <MasonryImagesGallery />
        </Col>
      </Row>
     </Container>
     
    {/*============== gallery section end ===============*/}  
    {/*============== testimonal section end ===============*/} 
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <Subtitle subtitle={'Fans Love'}/>
            <h2 className="testimonal__title">What our fans say about us</h2>
          </Col>
          <Col lg='12'>
            <Testimonials/>
          </Col>
        </Row>
      </Container>
    </section> 
    {/*============== testimonal section end ===============*/}     
    <Newsletter/>
   
   </>
  );
};

export default Home;