import { Button, Form } from "react-bootstrap"
import { useFieldArray, useForm } from "react-hook-form"
import { crearRecetaAPI, editarRecetaAPI, obtenerRecetaAPI } from "../../../helpers/queries";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";

const FormularioReceta = ({crear, titulo}) => {
  useEffect(() =>{
    if(!crear){
      cargarDatosFormulario()
    }
  }, [])

  //  Hooks de React Hook Form
  const {
    control,
    register,
    reset,
    setValue,
    handleSubmit,
    formState: {errors}
  } = useForm()
  
  //  Hooks para usar UseFieldArray (campo de ingredientes)
  const {
    fields: ingredientes,
    append: appendIngredientes,
    remove: removeIngredientes
  } = useFieldArray({
    control,
    name: "ingredientes",
    rules: {
      required: 'Debe agregar al menos 1 ítem.'
    }
  });
  
  //  Hooks para usar UseFieldArray (campo de preparación)
  const {
    fields: preparacion,
    append: appendPreparacion,
    remove: removePreparacion 
  } = useFieldArray({
    control,
    name: "preparacion",
    rules: {
      required: 'Debe agregar al menos 1 paso de la preparación.'
    }
  });

  //  Variables que traigo de react-router
  const {id} = useParams()
  const navegacion = useNavigate()

  //  Función para mostrar los datos de la receta en el formulario al editar
  const cargarDatosFormulario = async() => {
    const respuesta = await obtenerRecetaAPI(id)
    if(respuesta.status === 200){
      const recetaBuscada = await respuesta.json()
      //  Asignar valores en los campos del formulario para su edición
      setValue('nombreReceta', recetaBuscada.nombreReceta)
      setValue('categoria', recetaBuscada.categoria)
      setValue('descripcionBreve', recetaBuscada.descripcionBreve)
      setValue('descripcionAmplia', recetaBuscada.descripcionAmplia)
      setValue('imagen', recetaBuscada.imagen)
      setValue('ingredientes', recetaBuscada.ingredientes)
      setValue('preparacion', recetaBuscada.preparacion)
    } else{
      Swal.fire({
        title: "Ocurrió un error",
        text: "Intente realizar esta operación en unos minutos.",
        icon: "error"
      });
    }
  }

  const recetaValida = async(receta) => {
    try {
      if(crear){
        //  Lógica de CREAR RECETA
        const respuesta = await crearRecetaAPI(receta);
        if(respuesta.status === 201){
          //  Mensaje para el usuario con SweetAlert
          Swal.fire({
            title: "Receta creada",
            text: `La receta ${receta.nombreReceta} fue creada exitosamente.`,
            icon: "success"
          });
          reset();
          removeIngredientes()
          removePreparacion()
        } else{
          Swal.fire({
            title: "Ocurrió un error",
            text: "Intente crear la receta en unos minutos.",
            icon: "error"
          });
        }
      } else{
        //  Lógica de EDITAR RECETA
        const respuesta = await editarRecetaAPI(id, receta)
        if(respuesta.status === 200){
          Swal.fire({
            title: "Receta editada",
            text: `La receta ${receta.nombreReceta} fue modificada exitosamente.`,
            icon: "success"
          });
          //  Redireccionar a tabla de Administrador una vez terminada la edición
          navegacion('/admin')
        } else{
          Swal.fire({
            title: "Ocurrió un error",
            text: "Intente modificar la receta en unos minutos.",
            icon: "error"
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section className="container mainPage">
      <h1 className="display-3 mt-5">{titulo}</h1>
      <hr />
      <Form onSubmit={handleSubmit(recetaValida)} className="my-4">
        <Form.Group className="mb-3" controlId="formNombreReceta">
          <Form.Label>Nombre de receta<span className="text-danger">*</span></Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Pollo al horno"
            {
              ...register("nombreReceta", {
                required: 'El nombre de la receta es obligatorio.',
                minLength:{
                  value: 2,
                  message: 'Debe ingresar como mínimo 2 carácteres para el nombre de la receta.'
                },
                maxLength:{
                  value: 50,
                  message: 'Debe ingresar como máximo 50 carácteres para el nombre de la receta.'
                },
              })
            }
          />
          <Form.Text className="text-danger">{errors.nombreReceta?.message}</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Imagen URL<span className="text-danger">*</span></Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://www.annarecetasfaciles.com/files/contramusloa-pollo-salsa-cebolla-3-815x458.jpg"
            {
              ...register("imagen", {
                required: 'La URL de la imagen de la receta es obligatoria.',
                pattern:{
                  value: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/,
                  message: 'La URL ingresada debe ser una imagen.'
                }
              })
            }
          />
          <Form.Text className="text-danger">{errors.imagen?.message}</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCategoria">
          <Form.Label>Categoría<span className="text-danger">*</span></Form.Label>
          <Form.Select 
            {
              ...register("categoria",{
                required:'La categoría de la receta es obligatoria.'
              })
            }
          >
            <option value="">Seleccione una opcion</option>
            <option value="Entradas">Entradas</option>
            <option value="Guarnicion">Guarnición</option>
            <option value="Plato Principal">Plato Principal</option>
            <option value="Postres">Postres</option>
            <option value="Salsas">Salsas</option>
            <option value="Masas">Pizzas y Masas</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDescripcionBreve">
          <Form.Label>Descripción breve<span className="text-danger">*</span></Form.Label>
          <Form.Control
            type="text"
            className="textareaForm"
            placeholder="Ej: Un exquisito plato con atrapante aroma."
            as="textarea"
            {
              ...register("descripcionBreve", {
                required: 'La descripción breve de la receta es obligatoria.',
                minLength:{
                  value: 10,
                  message: 'Debe ingresar como mínimo 10 carácteres para la descripción breve de la receta.'
                },
                maxLength:{
                  value: 200,
                  message: 'Debe ingresar como máximo 200 carácteres para la descripción breve de la receta.'
                }
              })
            }
          />
          <Form.Text className="text-danger">{errors.descripcionBreve?.message}</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDescripcionAmplia">
          <Form.Label>Descripción amplia<span className="text-danger">*</span></Form.Label>
          <Form.Control
            type="text"
            className="textareaForm"
            placeholder="Una descripción más detallada del plato."
            as="textarea"
            {
              ...register("descripcionAmplia", {
                required: 'La descripción amplia de la receta es obligatoria.',
                minLength:{
                  value: 50,
                  message: 'Debe ingresar como mínimo 50 carácteres para la descripción amplia de la receta.'
                },
                maxLength:{
                  value: 1000,
                  message: 'Debe ingresar como máximo 1000 carácteres para la descripción amplia de la receta.'
                }
              })
            }
          />
          <Form.Text className="text-danger">{errors.descripcionAmplia?.message}</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3 d-flex flex-column">
          <Form.Label>Ingredientes<span className="text-danger">*</span></Form.Label>
          <ul className="m-0 list-unstyled">
            {ingredientes.map(({id, producto, cantidad, unidad}, index) => (
              <li key={id}>
                <Form.Control
                  className="inputIngrediente d-inline-block"
                  type="text"
                  name={`ingredientes[${index}].producto`}
                  placeholder="Producto"
                  defaultValue={producto}
                  {...register(`ingredientes.${index}.producto`, {
                    required: 'El nombre del ingrediente es obligatorio.',
                    minLength:{
                      value: 2,
                      message: 'Debe ingresar como mínimo 2 carácteres para el nombre del ingrediente.'
                    },
                    maxLength:{
                      value: 50,
                      message: 'Debe ingresar como máximo 50 carácteres para el nombre del ingrediente.'
                    }
                  })}
                />
                
                <Form.Control
                  className="inputIngrediente d-inline-block my-3 mx-sm-2"
                  type="number"
                  name={`ingredientes[${index}].cantidad`}
                  placeholder="Cantidad"
                  defaultValue={cantidad}
                  {...register(`ingredientes.${index}.cantidad`, {
                    required: 'La cantidad a usar del ingrediente es obligatoria.',
                    valueAsNumber: true,
                    min:{
                      value: 1,
                      message: 'La cantidad mínima debe ser 1.'
                    },
                    max:{
                      value: 999,
                      message: 'La cantidad máxima debe ser 999.'
                    }
                  })} 
                />
                
                <select
                  className="form-select d-inline-block inputIngrediente"
                  name={`ingredientes[${index}].unidad`}
                  placeholder="Unidad de medida"
                  defaultValue={unidad}
                  {...register(`ingredientes.${index}.unidad`, {
                    required: 'La unidad de medida del ingrediente es obligatoria.'
                  })}
                >
                  <option value="">Seleccione una unidad de medida</option>
                  <option value="unidad/es">Unidades</option>
                  <option value="mg">Miligramos</option>
                  <option value="g">Gramos</option>
                  <option value="kg">Kilogramos</option>
                  <option value="ml">Mililitros</option>
                  <option value="l">Litros</option>
                  <option value="cc.">Centímetros cúbicos</option>
                </select>
                <Button variant="danger" className="my-3" type="button" onClick={() => removeIngredientes(index)}>Borrar ingrediente</Button>
                <Form.Text className="d-block text-danger">{errors.ingredientes?.[index]?.producto?.message}</Form.Text>
                <Form.Text className="d-block text-danger">{errors.ingredientes?.[index]?.cantidad?.message}</Form.Text>
                <Form.Text className="text-danger">{errors.ingredientes?.[index]?.unidad?.message}</Form.Text>
              </li>
            ))}
          </ul>
          <Button className="align-self-start" type="button" onClick={() => appendIngredientes({producto: 'Ingrediente', cantidad: 1, unidad: 'Elija una unidad de medida'})}>Agregar ingrediente</Button>
        </Form.Group>

        <Form.Group className="mb-3 d-flex flex-column">
          <Form.Label>Preparación (agregue paso a paso en cada campo de texto)<span className="text-danger">*</span></Form.Label>
          <ol className="m-0 list-unstyled">
            {preparacion.map(({id}, index) => (
              <li key={id}>
                <Form.Control
                  type="text"
                  as="textarea"
                  className="textareaForm"
                  name={`preparacion[${index}].paso`}
                  placeholder="Agregue el próximo paso para preparar la receta..."
                  {...register(`preparacion.${index}.paso`, {
                    required: 'El paso a paso de la receta es obligatorio.',
                    minLength:{
                      value: 10,
                      message: 'Debe ingresar como mínimo 10 carácteres para el paso de la receta.'
                    },
                    maxLength:{
                      value: 500,
                      message: 'Debe ingresar como máximo 500 carácteres para el paso de la receta.'
                    }
                  })}
                />
                <Button variant="danger" className="mt-3" type="button" onClick={() => removePreparacion(index)}>Borrar paso</Button>
                <Form.Text className="d-block text-danger">{errors.preparacion?.[index]?.paso?.message}</Form.Text>
              </li>
            ))}
          </ol>
          <Button className="mt-3 align-self-start" type="button" onClick={() => appendPreparacion({paso: 'Siguiente paso...'})}>Agregar paso</Button>
        </Form.Group>

        <Button type="submit" variant="success">Guardar</Button>
      </Form>
    </section>
  )
}

export default FormularioReceta