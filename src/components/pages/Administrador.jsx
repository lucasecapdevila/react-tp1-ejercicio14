import { Container, Table } from "react-bootstrap"
import ItemReceta from "./receta/ItemReceta"
import { Link } from "react-router-dom"

const Administrador = () => {
  return (
    <main className="mainPage">
      <Container>
        <div className="d-flex align-items-center justify-content-between">
          <h1 className="display-3">Recetas disponibles</h1>
          <Link to='admin/crear' className="btn btn-primary">Agregar</Link>
        </div>

        <Table striped bordered responsive>
          <thead>
            <tr>
              <th>Cod</th>
              <th>Nombre de Receta</th>
              <th>URL de Imagen</th>
              <th>Categoría</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            <ItemReceta />
            <ItemReceta />
            <ItemReceta />
            <ItemReceta />
            <ItemReceta />
          </tbody>
        </Table>
      </Container>
    </main>
  )
}

export default Administrador