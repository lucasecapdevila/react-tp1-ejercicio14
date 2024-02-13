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
          <Button variant="warning" className="me-2">Editar</Button>
          <Button variant="danger">Eliminar</Button>
        </div>
      </td>
    </tr>
  )
}

export default ItemReceta