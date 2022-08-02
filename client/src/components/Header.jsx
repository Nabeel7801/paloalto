import React from 'react'
import logo from '../assets/img/logo.png'

import {Container, Nav, Navbar } from 'react-bootstrap';

function Header() {
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
                        <Nav.Link href="#Introduction">Introduction</Nav.Link>
                        <Nav.Link href="/callForPapers">Call for Papers</Nav.Link>
                        <Nav.Link href="#FAQ">FAQ</Nav.Link>
                        <Nav.Link href="#">Stay Updated</Nav.Link>
                    </Nav>
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default Header