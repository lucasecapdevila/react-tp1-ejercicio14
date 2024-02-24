import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"

const ItemReceta = ({receta}) => {
  return (
    <tr>
      <td>{receta.id}</td>
      <td>{receta.nombreReceta}</td>
      <td className="w-25"><img className="img-fluid" src={receta.imagen} alt="imagen de la receta" /></td>
      <td>{receta.categoria}</td>
      <td>
        <div className="d-flex align-items-center justify-content-center">
          <Link to={`/admin/editar/${receta.id}`} className="btn btn-warning me-2"><FontAwesomeIcon icon={faPenToSquare} /></Link>
          <Button variant="danger"><FontAwesomeIcon icon={faTrashCan} /></Button>
        </div>
      </td>
    </tr>
  )
}

export default ItemReceta