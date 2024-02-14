import { Container, Nav, Navbar } from "react-bootstrap"
import { Link, NavLink } from "react-router-dom"

const BarraNavegacion = () => {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to='/'>RollingCook</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink end className="nav-link" to='/'>Inicio</NavLink>
            <NavLink end className="nav-link" to='/admin'>Administrador</NavLink>
            <NavLink end className="nav-link" to='/login'>Login</NavLink>
            <NavLink end className="nav-link" to='/registro'>Registro</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default BarraNavegacion