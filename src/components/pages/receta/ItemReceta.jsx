import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import Swal from "sweetalert2"
import { borrarRecetaAPI, leerRecetasAPI } from "../../../helpers/queries"

const ItemReceta = ({receta, setListaRecetas}) => {
  //  Función para eliminar una receta
  const borrarReceta = () => {
    Swal.fire({
      title: "¿Estás seguro de eliminar la receta?",
      text: "No podrás revertir este proceso.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar"
    }).then(async(result) => {
      if (result.isConfirmed) {
        const respuesta = await borrarRecetaAPI(receta.id)
        if(respuesta.status === 200){
          //  Actualizo la tabla
          const recetasActualizadas = await leerRecetasAPI()
          setListaRecetas(recetasActualizadas)
          
          Swal.fire({
            title: "Eliminada!",
            text: `La receta "${receta.nombreReceta}" se eliminó exitosamente.`,
            icon: "success"
          });
        } else{
          Swal.fire({
            title: "Ocurrió un error",
            text: `No se pudo eliminar la receta ${receta.nombreReceta}. Vuelva a intentarlo en unos momentos.`,
            icon: "error"
          });
        }
      }
    });
  }

  return (
    <tr>
      <td>{receta.id}</td>
      <td>{receta.nombreReceta}</td>
      <td className="w-25"><img className="img-fluid" src={receta.imagen} alt="imagen de la receta" /></td>
      <td>{receta.categoria}</td>
      <td>
        <div className="d-flex align-items-center justify-content-center">
          <Link to={`/admin/editar/${receta.id}`} className="btn btn-warning me-2"><FontAwesomeIcon icon={faPenToSquare} /></Link>
          <Button onClick={borrarReceta} variant="danger"><FontAwesomeIcon icon={faTrashCan} /></Button>
        </div>
      </td>
    </tr>
  )
}

export default ItemReceta