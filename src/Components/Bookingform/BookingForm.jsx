import React from 'react';
import Formm from './formm';
import '../Bookingform/Booking.css';
import { SiPetsathome } from "react-icons/si";

const BookingForm = () => {
  return (
    <div className='main'>
      <div className='sub-div'>
        {/* Form Area */}
        <div className='sub-div-left'>
          <Formm />
        </div>

        <div className="sub-div-right">
          <p style={{ color: 'rgb(67, 151, 71)', fontWeight: '700', fontSize: 'x-large' }} className='fs-6'>
            Going For A Vacation?
          </p>
          <h1 className='fw-bold mt-1'>
            <span>Book For</span> &nbsp;
            <span style={{ color: 'rgba(255, 81, 0, 0.815)' }}>Your Pet</span>
          </h1>
          <p style={{ color: 'rgb(122, 120, 116)' }} className='fw-bold fs-6'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>

          <div className='sub-div-right-lower-div'>
            <div>
              <h4>
                <span><SiPetsathome style={{ fontSize: '4rem' }} /></span>
                <span> Pet Boarding</span>
              </h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <div>
              <h4>
                <span><SiPetsathome style={{ fontSize: '4rem' }} /></span>
                <span> Pet Feeding</span>
              </h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <div>
              <h4>
                <span><SiPetsathome style={{ fontSize: '4rem' }} /></span>
                <span> Pet Grooming</span>
              </h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <div>
              <h4>
                <span><SiPetsathome style={{ fontSize: '4rem' }} /></span>
                <span> Pet Training</span>
              </h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingForm;
