
import { Navbar, Container, Nav, } from "react-bootstrap";

const Header = () => {
  return(
<>
  <Navbar fixed="top" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/contact">Contact</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
</>
  )
}

export default Header;