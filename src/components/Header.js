import { Nav, Navbar, Container } from 'react-bootstrap';
import header from '../img/header-black-removebg-preview.png';

export default function Header() {
    return (
        <header>
            <NavigationBar />
        </header>
    );
}

function NavigationBar() {
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
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#topstats">Top Stats</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#login">Log In</Nav.Link>
                        <Nav.Link eventKey={2} href="#signup">
                            Sign Up
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    );
}