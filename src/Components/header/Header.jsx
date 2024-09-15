import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../header/header.css'
function NavScrollExample() {
  return (

    <Navbar expand="lg" bg="dark" data-bs-theme="dark" className="">
      <Container className='lower-nav ' fluid>
        
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav 
            className="me-auto my-6 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <div className='home' >Home</div>
            <Nav.Link href="#action2">About</Nav.Link> 
            <Nav.Link href="#action1">Service</Nav.Link>
            <Nav.Link href="#action2">Price</Nav.Link>
            <Nav.Link href="#action2">Booking</Nav.Link>

            <NavDropdown title="Pages" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            
            <Nav.Link href="#action2">Contact</Nav.Link>

          </Nav>
          
            <Button className='me-5 ' style={{backgroundColor:'rgb(255 118 0)'}}>Get Quote</Button>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;