import React from 'react'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../../img/carousel-1.jpg'; 
import ExampleCarouselImage1 from '../../img/carousel-2.jpg'; 

import '../hero/Cardcarosol.css';
import Button from 'react-bootstrap/Button';


const Cardcarosol = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
    
  return (
    <div>
         <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
       <img  src={ExampleCarouselImage} alt=""  
                       />
        <Carousel.Caption >
           <b> <h3>Best Pet Services</h3></b>
        <b>  <h1 style={{ fontWeight:'bolder'}}>Pet Spa & Grooming</h1></b>
          <p>Where Pets Feel Paw-some</p>
          <span>
        <div className="mb-2">
        <Button variant="danger" size="md">
          Book Now
        </Button>{' '}
        <Button variant="success" size="md">
          Learn More
        </Button>
      </div>
        </span>
        </Carousel.Caption>
       
      </Carousel.Item>
      <Carousel.Item>
       <img  src={ExampleCarouselImage1} alt=""   />
        <Carousel.Caption >
           <b> <h3>Best Pet Services</h3></b>
        <b>  <h1 style={{ fontWeight:'bolder'}}>Pet Spa & Grooming</h1></b>
          <p>Where Pets Feel Paw-some </p>
         
        <div className="mb-2">
        <Button variant="danger" size="sm">
          Book Now
        </Button>{' '}
        <Button variant="success" size="sm">
          Learn More
        </Button>
      </div>
        
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
        
    </div>
  )
}

export default Cardcarosol