const URI_RECETAS = import.meta.env.VITE_API_RECETAS

//  Solicitud tipo GET (o Request) para el array de recetas almacenadas
export const leerRecetasAPI = async() => {
  try {
    const respuesta = await fetch(URI_RECETAS)
    console.log(respuesta);
    const listaRecetas = await respuesta.json()
    return listaRecetas

  } catch (error) {
    console.log(error);
  }
}



//  Solicitud tipo GET (o Request) para una única receta
export const obtenerRecetaAPI = async(id) => {
  try {
    const respuesta = await fetch(`${URI_RECETAS}/${id}`)
    return respuesta;
  } catch (error) {
    console.log(error);
  }
}


//  Solicitud tipo POST (crear receta)
export const crearRecetaAPI = async(recetaNueva) => {
  try {
    const respuesta = await fetch(URI_RECETAS, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(recetaNueva)
    })
    return respuesta
  } catch (error) {
    console.log(error);
  }
}


//  Solicitud tipo PUT (editar receta)
export const editarRecetaAPI = async(id, receta) => {
  try {
    const respuesta = await fetch(`${URI_RECETAS}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(receta)
    })
    return respuesta
  } catch (error) {
    console.log(error);
  }
}
