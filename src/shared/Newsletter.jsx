import React from 'react'
import './newsletter.css';

import { Container, Row, Col } from 'reactstrap';
import maleTourist from 'F:/MernStack-Tour-Management-main/tour-management/frontend/src/assets/images/male-tourist.png'

const Newsletter = () => {
  return( 
    <section className='newsletter'>
    <Container>
        <Row>
            <Col lg='6'>
                <div className="newsletter__content">
                    <h2>Subscribe now to get useful traveling information.</h2>
                    <div className="newsletter__input">
                        <input type="email" placeholder='Enter your email'/>
                        <button className="btn newsletter__btn">Subscribe</button>
                    </div>
                    <p>Travel gives us our greatest stories, our most cherished memories and countless irreplaceable learnings that we can choose to pay forward to others. </p>
                </div>
            </Col>
            <Col lg='6'>
                <div className="newsletter__img">
                    <img src={maleTourist} alt="" />
                </div>
            </Col>
        </Row>
    </Container>
  </section>
  )
}

export default Newsletter