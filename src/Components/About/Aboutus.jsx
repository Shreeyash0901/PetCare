import React from 'react'
import '../About/AboutUs.css'
import Button from 'react-bootstrap/Button';
import img1 from '../../img/about-1.jpg'
import img2 from '../../img/about-2.jpg'
import img3 from '../../img/about-3.jpg'
const Aboutus = () => {
  return (
    <div className='main-section'>
        <div className='Text-section'> 
            <h4 style={{color:'rgb(50, 206, 128)'}}>About us</h4>
           
            <h1 style={{color:'rgb(250, 58, 0)'}}>Boarding &</h1>
            <h1 style={{color:'rgb(50, 206, 128)'}}>Daycare</h1>
           
            <p style={{color:'rgb(107, 107, 107)'}} className='fw-bold fs-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, tempora. Reprehenderit perferendis maxime optio ab libero? </p>
           
            <p style={{color:'rgb(107, 107, 107)'}} className='fs-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error saepe sed hic eius asperiores, laudantium ut voluptatibus laboriosam tempora. </p>

            <ul className='fs-4  fw-bolder' >
              <li>Fusce dapibus, tellus ac cursus </li>
              <li>Curabitur blandit tempus porttitor.</li>
              <li>Vivamus sagittis lacus vel augue </li>
            </ul>
            <div className='aboutUs-btn py-4'>
            <Button variant='danger' size="lg">
          Learn More
        </Button>{' '}
            </div>
        </div>
        <div className='image-section'>
        <div className='imgsection'>
    
            <img src={img1} alt="" className='img-1'/>
            <div className=' img-2-sec'>
            <img src={img2} alt="" className='img-3' />
            <img src={img3} alt="" className='img-4' /> 
               
            </div>
</div>
           
            

        </div>
    </div>
  )
}

export default Aboutus