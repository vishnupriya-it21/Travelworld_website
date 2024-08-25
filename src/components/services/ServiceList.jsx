import React from 'react'
import ServiceCard from './ServiceCard';
import { Col } from "reactstrap";

import weatherImg from 'F:/MernStack-Tour-Management-main/tour-management/frontend/src/assets/images/weather.png'
import guideImg from 'F:/MernStack-Tour-Management-main/tour-management/frontend/src/assets/images/guide.png'
import customizationImg from 'F:/MernStack-Tour-Management-main/tour-management/frontend/src/assets/images/customization.png'

const servicesData =[
{
    imgUrl: weatherImg,
    title: "Calculate Weather",
    desc: "The degree of hotness or coldness of an object",   
},
{
    imgUrl: guideImg,
    title: "Best Tour Guide",
    desc: "Tour guides often have rewarding and fun careers.",   
},
{
    imgUrl: customizationImg,
    title: "Customization",
    desc: "It makes customers happier and enjoyable.",   
},

]

const ServiceList = () => {
  return( 
  <>
  {servicesData.map((item,index) => (
  <Col lg='2' key={index}>
    <ServiceCard item={item}/>
  </Col>
  ))}
  </>
  );
};

export default ServiceList;