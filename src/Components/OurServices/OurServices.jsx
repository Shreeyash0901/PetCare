import React from 'react'
import '../OurServices/OurServices.css';
import GridExample from './Card';
const OurServices = () => {
  return (
    <div className='main-area py-3'>
        <div className='title-area' >
            <h4 style={{color:'rgb(50, 206, 128)'}}>Our services</h4>
            <h1> <span style={{color:'rgba(255, 81, 0, 0.815)'}}>Premium</span>  Pet Services</h1>
        </div>
        <div className='Card-section'>
      <GridExample/>
        </div>
    </div>
  )
}

export default OurServices