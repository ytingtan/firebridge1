import React from 'react';
import { Nav, Navbar, Container, Button } from 'react-bootstrap';
import header from '../img/header-black-removebg-preview.png';
import { useAuth } from "../hooks/useAuth";

export default function Header2() {
    return (
        <header>
            <NavigationBar />
        </header>
    );
}

function NavigationBar() {
    const { signout } = useAuth();
    const { user } = useAuth();

    return (
        <div className="App">
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={header} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#about">Home</Nav.Link>
                        <Nav.Link href="#about">Boards</Nav.Link>
                        <Nav.Link href="#topstats">Statistics</Nav.Link>
                        <Nav.Link href="#topstats">Profile</Nav.Link>
                    </Nav>
                    <Nav>
                        <div className="loginButton">
                        <Nav.Link onClick={signout}>Log Out</Nav.Link>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    );
}