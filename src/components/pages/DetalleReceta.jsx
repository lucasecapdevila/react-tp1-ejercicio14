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
        <img className="img-fluid" src="https://1.bp.blogspot.com/-0knKqJDJPqo/VhZqXdXIpHI/AAAAAAAAPLs/_78vNUgpN60/s1600/tapa-de-asado-princ-2.jpg" alt="tapa de asado con verduras" />
      </div>
      <h3 className="text-center my-3">Ingredientes (para 3 porciones)</h3>
      <ul>
        <li>Tapa de asado: 800g</li>
        <li>Zanahorias baby o zanahorias comunes: 150g</li>
        <li>Cebolla: 100g</li>
        <li>Batata: 150g</li>
        <li>Bolsa de horno Knorr Romero y Tomillo: 1</li>
        <li>Aceite: 1 cucharadita</li>
        <li>Azúcar negra: 1 cucharadita</li>
      </ul>

      <h3 className="text-center my-3">Paso a paso</h3>
      <ol>
        <li className="my-4 ms-3">
          Cortar las verduras y desgrasar la carne.
        </li>
        <div className="d-flex justify-content-center">
          <img className="img-fluid" src="https://4.bp.blogspot.com/-ws1B6JQ1IM4/VhZqRTjNwKI/AAAAAAAAPLA/5S-0-Hox4rE/s1600/Tapa-de-asado-paso-1.jpg" alt="verduras picadas y carne desgrasada" />
        </div>

        <li className="my-4 ms-3">
          Rociar las verduras con el aceite y el azúcar ayudándose con las manos para que se impregnen de esta manera las verduras van a quedar con un toque agridulce.
        </li>
        <div className="d-flex justify-content-center">
          <img className="img-fluid" src="https://4.bp.blogspot.com/-9SZozGsMf_w/VhZqSgLy2JI/AAAAAAAAPLM/q6usyTgBrOk/s1600/tapa-de-asado-paso-2.jpg" alt="verduras sazonadas" />
        </div>

        <li className="my-4 ms-3">
          Abrir la bolsa de horno y ponerla sobre una asadera. Colocar la carne y las verduras, y esparcir el condimento ayudándose con las manos. Cerrar la bolsa.
        </li>
        <div className="d-flex justify-content-center">
          <img className="img-fluid" src="https://4.bp.blogspot.com/-c7Hwkm8HqsU/VhZqT-v6frI/AAAAAAAAPLU/7SzjdEF-XBY/s1600/tapa-de-asado-paso3.jpg" alt="carne y verduras en la bolsa para horno" />
        </div>

        <li className="my-4 ms-3">
          Llevar a horno 180° y cocinar por 60/70 minutos (mientras se cocina tenés una hora para hacer lo que quieras!). Cortar la bolsa con cuidado porque sale mucho vapor, servir.
        </li>
        <div className="d-flex justify-content-center">
          <img className="img-fluid" src="https://3.bp.blogspot.com/-Rl0edLDtcGo/VhZqVTRHLwI/AAAAAAAAPLc/DpmQAdzm3rQ/s1600/tapa-de-asado-paso-4.jpg" alt="carne y verduras horneadas" />
        </div>

        <li className="my-4 ms-3">
          A comer!!
        </li>
        <div className="d-flex justify-content-center">
          <img className="img-fluid" src="https://4.bp.blogspot.com/-ps_LZOz-RIY/VhZqWVqlfYI/AAAAAAAAPLk/gG_1bNiwVxY/s1600/tapa-de-asado-princ-1.jpg" alt="Tapa de asado con verduras al horno" />
        </div>
      </ol>
    </main>
  )
}

export default DetalleReceta