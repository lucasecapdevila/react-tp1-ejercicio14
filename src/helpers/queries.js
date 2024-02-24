const URI_RECETAS = import.meta.env.VITE_API_RECETAS

//  Solicitud tipo GET o request (para el array de recetas almacenados)
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