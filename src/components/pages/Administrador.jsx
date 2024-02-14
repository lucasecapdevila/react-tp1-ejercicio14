import { Container, Table } from "react-bootstrap"
import ItemReceta from "./receta/ItemReceta"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import { leerRecetasAPI } from "../../helpers/queries"

const Administrador = () => {
  const [listaRecetas, setListaRecetas] = useState([])

  useEffect(() => {
    traerRecetas()
  }, [])

  const traerRecetas = async() => {
    try {
      const listaRecetasAPI = await leerRecetasAPI()
      setListaRecetas(listaRecetasAPI)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main className="mainPage">
      <Container>
        <div className="d-flex align-items-center justify-content-between">
          <h1 className="display-3">Recetas disponibles</h1>
          <Link to='/admin/crear' className="btn btn-primary"><FontAwesomeIcon icon={faPlus} /></Link>
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