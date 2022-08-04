import React from 'react'
import logo from '../assets/img/logo.png'

import {Container, Nav, Navbar } from 'react-bootstrap';

function MainHeader() {
    return (
        <Navbar collapseOnSelect expand="lg" fixed="top">
            <Container>
                <Navbar.Brand href="#">
                    <span class="logo">
                        <img src={logo} alt="Web Logo"/>
                        <span>Virtually Testing Foundation</span>
                    </span>
                </Navbar.Brand>
                
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                
                <Navbar.Collapse>

                    <Nav className="justify-content-end flex-grow-1">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="#">VTF Speakers</Nav.Link>
                        <Nav.Link href="#">Submission Guideline</Nav.Link>
                        <Nav.Link href="/trackusecases">Track & Use Cases</Nav.Link>
                        <Nav.Link href="#">Program Policies</Nav.Link>
                        <Nav.Link href="#">FAQ</Nav.Link>
                        <Nav.Link href="#">Contact Us</Nav.Link>
                    </Nav>
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default MainHeader