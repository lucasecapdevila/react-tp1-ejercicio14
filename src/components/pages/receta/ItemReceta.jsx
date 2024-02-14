import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button } from "react-bootstrap"

const ItemReceta = () => {
  return (
    <tr>
      <td>ID</td>
      <td>Nombre de Receta</td>
      <td>Imagen</td>
      <td>Categoría</td>
      <td>
        <div className="d-flex align-items-center justify-content-center">
          <Button variant="warning" className="me-2"><FontAwesomeIcon icon={faPenToSquare} /></Button>
          <Button variant="danger"><FontAwesomeIcon icon={faTrashCan} /></Button>
        </div>
      </td>
    </tr>
  )
}

export default ItemReceta