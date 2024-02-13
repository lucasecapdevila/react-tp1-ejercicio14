import { Container, Row } from "react-bootstrap"
import CardReceta from "./receta/CardReceta"
import BarraNavegacion from "../common/BarraNavegacion"
import Footer from "../common/Footer"

const Inicio = () => {
  return (
    <main className="mainPage">
      <BarraNavegacion />
      <img className="banner" src="https://images.unsplash.com/photo-1635321593217-40050ad13c74?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="ingredientes en la cocina" />
      <Container className="mt-3">
        <h1 className="display-3 text-center">RollingCook, tu blog de recetas</h1>
        <Row>
          <CardReceta />
          <CardReceta />
          <CardReceta />
          <CardReceta />
          <CardReceta />
          <CardReceta />
        </Row>
      </Container>
      <Footer />
    </main>
  )
}

export default Inicio