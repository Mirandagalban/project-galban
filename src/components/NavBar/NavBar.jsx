import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css'
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
        return (
            <Navbar expand="lg" className="--bs-body-bg navbar-bg">
              <Container>
                <Navbar.Brand as= {NavLink} to= '/' ><img src="../public/logoCrochetComplete.png" alt="logo" className='logo-complete' /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav " className='navbar-ul'>
                  <Nav className="me-auto navbar-ul ">
                    <Nav.Link as= {NavLink} to= '/categoria/almohadones' className= 'navbar-li' >Almohadones</Nav.Link>
                    <Nav.Link as= {NavLink} to= '/categoria/peluches'className= 'navbar-li'>Peluches</Nav.Link>
                    <Nav.Link as= {NavLink} to= '/categoria/bebes' className= 'navbar-li'>recien nacidos</Nav.Link>
                    <Nav.Link className= 'navbar-li' href="#">contactanos</Nav.Link>
                  </Nav>
                 <NavLink to='/Cart'><CartWidget/></NavLink> 
                </Navbar.Collapse>
              </Container>
            </Navbar>
          );
        }

export default NavBar;
        
