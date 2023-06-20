import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">AnimList</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/login">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/animes">
              <Nav.Link>Animes</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/watchedAnimes">
              <Nav.Link>Watched</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Movies">
              <Nav.Link>Favourite</Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Logout</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              My Profile
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
