import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../Header/header.css'


const Header =()=>{
    return (
        <>

    <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">Marques Passeios</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#sobre">Sobre</Nav.Link>
                <NavDropdown title="Viagens" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Fora do País</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">No Brasil</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Cruzeiros</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Saiba mais</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
 
        </>
    )
}
export default Header