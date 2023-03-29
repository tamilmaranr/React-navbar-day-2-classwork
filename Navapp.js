import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Boat from './Boat.png'



function Navapp() {
  return (
    <div className='div1'>
      <center>
        
      <Navbar bg="light" variant="primary">
        <Container>
          <Navbar.Brand href="https://www.boat-lifestyle.com/"><img src={Boat} width={100} height={50} alt=""/></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="https://www.boat-lifestyle.com/collections/true-wireless-earbuds"><b>Wireless Earbuds-</b></Nav.Link>  
            <Nav.Link href="https://www.boat-lifestyle.com/collections/bluetooth-speakers"><b>  Blutooth Speakers-</b></Nav.Link>
            <Nav.Link href="https://www.boat-lifestyle.com/collections/wired-headphones-1"><b>  Wired Headphones-</b></Nav.Link>
            <Nav.Link href="https://www.boat-lifestyle.com/collections/wireless-earphones"><b>  Wireless Earphones</b></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </center>

    </div>
  )
}

export default Navapp