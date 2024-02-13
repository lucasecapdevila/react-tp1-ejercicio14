import { Button, Container, Table } from "react-bootstrap"
import ItemReceta from "./receta/ItemReceta"

const Administrador = () => {
  return (
    <main className="mainPage">
      <Container>
        <div className="d-flex align-items-center justify-content-between">
          <h1 className="display-3">Recetas disponibles</h1>
          <Button>Agregar</Button>
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
          </tbody>
        </Table>
      </Container>
    </main>
  )
}

export default Administrador