import { Navbar, Nav, Container, Form } from "react-bootstrap";

    function AppNavbar() {
      return (
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">My Brand</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">About</Nav.Link>
                <Nav.Link href="#link">Projects</Nav.Link>
                <Nav.Link href="#link">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }

    export default AppNavbar;