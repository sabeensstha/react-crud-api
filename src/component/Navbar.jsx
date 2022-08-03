import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function Navbarrr() {
    const linkStyle = {
        margin: "1rem",
        textDecoration: "none",
        color: 'white',
    };
    return (
        <Navbar bg="dark" variant="dark" style={{ marginBottom: '10px' }}>
            <Container>
                <Navbar.Brand><Link to='/' style={linkStyle}>S M System</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link ><Link to='/' style={linkStyle}>Home</Link></Nav.Link>
                        <Nav.Link ><Link to='/create' style={linkStyle}>Create</Link></Nav.Link>
                        <Nav.Link ><Link to='/read' style={linkStyle}>View</Link></Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navbarrr;