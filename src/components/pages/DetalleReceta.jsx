import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import Swal from "sweetalert2"
import { obtenerRecetaAPI } from "../../helpers/queries"

const DetalleReceta = () => {
  const [receta, setReceta] = useState({})

  useEffect(() => {
    cargarDatosReceta()
  }, [])

  //  Variables de react-router
  const {id} = useParams()

  const preparacion = [receta.preparacion]

  const cargarDatosReceta = async() => {
    const respuesta = await obtenerRecetaAPI(id)
    if(respuesta.status === 200){
      const datosReceta = await respuesta.json()
      setReceta(datosReceta)
    } else{
      Swal.fire({
        title: "Ocurrió un error",
        text: "Intente realizar esta operación en unos minutos.",
        icon: "error"
      });
    }
  }

  return (
    <main className="container my-2 mainPage">
      <h2 className="display-4 text-center">{receta.nombreReceta}</h2>
      <div className="d-flex justify-content-center">
        <img className="img-fluid" src={receta.imagen} alt={receta.nombreReceta} />
      </div>
      <p className="my-2">{receta.descripcionAmplia}</p>
      <h3 className="text-center my-3">Ingredientes</h3>
      <ul>
        {
          receta.ingredientes && receta.ingredientes.map((item) => (
            <li key={receta.id}>{item.producto}: {item.cantidad} {item.unidad}</li>
          ))
        }
      </ul>

      <h3 className="text-center my-3">Paso a paso</h3>
      <ol>
        {
          receta.preparacion && receta.preparacion.map((item) => (
            <li key={receta.id}>{item.paso}</li>
          ))
        }
      </ol>
    </main>
  )
}

export default DetalleReceta