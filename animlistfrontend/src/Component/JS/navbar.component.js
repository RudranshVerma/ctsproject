import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <LinkContainer to={"/login"}>
            <Nav.Link>AnimList</Nav.Link>
          </LinkContainer>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/animes">
              <Nav.Link>Animes</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/watchedAnimes">
              <Nav.Link>Watched</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/favoriteAnimes">
              <Nav.Link>Favourite</Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav>
            <LinkContainer to="/myprofile">
              <Nav.Link>My Profile</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
