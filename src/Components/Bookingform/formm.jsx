import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const Formm = () => {
  return (
    <div className='internal-form'>
        <Form className='py-4'>
        <Form.Control type="text" placeholder="your name" className='my-3'/>
        <Form.Control type="email" placeholder="Your Email" className='my-3' />
        <Form.Control type="date" placeholder="Reservation date" className='my-3' />
        <Form.Control type="time" placeholder="Reservation time" className='my-3' />
        <Form.Select aria-label="Default select example">
      <option>Select Service</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
        </Form>
        <Button className='form-btn' variant="dark" size="lg">
        Book Now
      </Button>
    </div>
  )
}

export default Formm