import React from 'react'
import Container from 'react-bootstrap/Container';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram ,FaYoutube
} from "react-icons/fa";
import '../header/header.css'
import TextLinkExample from './MiddleHeader';
import dividerimg1 from '../../img/Vector.png'
const TopHeader = () => {
  return (
    <div className=" ">
 
  <div className='top-header d-md-block d-none py-2'>
  <Container className=' justify-content-between'>
    <div className="d-flex justify-content-between">
      <div className='topHeader-right'>
        <a href="#" className="me-3 text-white text-decoration-none">FAQs</a>
        <img className='dividerimg1' src={dividerimg1} alt="" />
        <a href="#" className="me-3 text-white text-decoration-none">Help</a>
        <img className='dividerimg1' src={dividerimg1} alt="" />
        <a href="#" className="me-3 text-white text-decoration-none">Support</a>
      </div>
      <div>
        <a href="#" className="me-2 text-dark"><FaFacebookF /></a>
        <a href="#" className="me-2 text-dark"><FaTwitter /></a>
        <a href="#" className="me-2 text-dark"><FaLinkedinIn /></a>
        <a href="#" className="me-2 text-dark"><FaInstagram /></a>
        <a href="#" className="me-2 text-dark"><FaYoutube />
        </a>
      </div>
    </div>
  </Container>
  </div>
 <div>
 <TextLinkExample/>
 </div>
  </div>


  )
}

export default TopHeader