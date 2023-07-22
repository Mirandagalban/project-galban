import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './components.css'
import CartWidget from './CartWidget';

const NavBar = () => {
        return (
            <Navbar expand="lg" className="--bs-body-bg navbar-bg">
              <Container>
                <Navbar.Brand href="#home"><a href="index.html"> <img src="./public/logoCrochetComplete.png" alt="logo" className='logo-complete' /></a></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav ">
                  <Nav className="me-auto navbar-ul ">
                    <Nav.Link className= 'navbar-li' href="#" >Almohadones</Nav.Link>
                    <Nav.Link className= 'navbar-li' href="#">Peluches</Nav.Link>
                    <Nav.Link className= 'navbar-li' href="#">personajes</Nav.Link>
                    <Nav.Link className= 'navbar-li' href="#">contactanos</Nav.Link>
                  </Nav>
                  <CartWidget/>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          );
        }

export default NavBar;
        
