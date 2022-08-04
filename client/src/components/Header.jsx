import React from 'react'
import logo from '../assets/img/logo.png'
import LoginButton from './LoginButton'

import {Container, Nav, Navbar } from 'react-bootstrap';

function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" fixed="top">
            <Container>
                <Navbar.Brand href="#">
                    <span className="logo">
                        <img src={logo} alt="Web Logo"/>
                        <span>Virtually Testing Foundation</span>
                    </span>
                </Navbar.Brand>
                
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                
                <Navbar.Collapse>

                    <Nav className="justify-content-end flex-grow-1">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/callforpapers">Call for Papers</Nav.Link>
                        <Nav.Link href="/guidelines">Guidelines</Nav.Link>
                        <Nav.Link href="/#FAQ">FAQ</Nav.Link>
                        <Nav.Link href="/contact">Stay Updated</Nav.Link>
                        <Nav.Link href="#"><LoginButton /></Nav.Link>
                    </Nav>
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default Header