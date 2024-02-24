const URI_RECETAS = import.meta.env.VITE_API_RECETAS

//  Solicitud tipo GET (para el array de recetas almacenados)
export const leerRecetasAPI = async() => {
  try {
    const respuesta = await fetch(URI_RECETAS)
    console.log(respuesta);
    const listaRecetas = await respuesta.json()
    console.log(listaRecetas);
    return listaRecetas

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


//  Solicitud tipo PUT (editar)
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
