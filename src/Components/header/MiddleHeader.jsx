import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import '../header/header.css'
import dividerimg from '../../img/Vector 1.png'
function TextLinkExample() {
  return (
    <Navbar className="bg-body-white d-md-block d-none">
      <Container>
       <h1 style={{color:"red"}}>Pet</h1>
       <h1>Lover</h1>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end ">
          <Navbar.Text>
            <div className='text-dark nav-left-text'>
            <div className=' nav-left-text-item'>
                <b><h6 >Opning Hours</h6></b>
                <h6 >9.00am-8.00pm</h6>
            </div>
            <img className='dividerimg' src={dividerimg} alt="" />
            <div className='nav-left-text-item'>
                <b><h6 >Email us</h6>   </b>     
                    <h6 >yash@gamil.com</h6>
            </div>
            <img className='dividerimg' src={dividerimg} alt="" />
            <div className='nav-left-text-item'>
                <b><h6 >Call us</h6>
                <h6 >+91 8766436683</h6>
                </b></div>
                
            </div>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TextLinkExample;