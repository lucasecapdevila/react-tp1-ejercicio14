import { Button, Form } from "react-bootstrap"
import { useFieldArray, useForm, useWatch } from "react-hook-form"

const FormularioReceta = () => {
  const {control, register, handleSubmit, formState: {errors}} = useForm()
  const { fields, append, remove } = useFieldArray({
    control,
    name: "ingredientes",
    rules: {
      required: 'Debe agregar al menos 1 item.'
    }
  });

  const recetaValida = (receta) => {
    console.log(receta);
    //  Guardar receta
    //  Vaciar formulario una vez que la receta es creada
  }

  return (
    <section className="container mainPage">
      <h1 className="display-3 mt-5">Nueva Receta</h1>
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
          <Form.Select required>
            <option value="">Seleccione una opcion</option>
            <option value="Entradas">Entradas</option>
            <option value="Guarnicion">Guarnición</option>
            <option value="PlatoPrincipal">Plato Principal</option>
            <option value="Postres">Postres</option>
            <option value="Salsas">Salsas</option>
            <option value="Masas">Pizzas y Masas</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDescripcion">
          <Form.Label>Descripción<span className="text-danger">*</span></Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Un exquisito plato con atrapante aroma."
            as="textarea"
            {
              ...register("descripcion", {
                required: 'La descripción de la receta es obligatoria.',
                minLength:{
                  value: 10,
                  message: 'Debe ingresar como mínimo 10 carácteres para la descripción de la receta.'
                },
                maxLength:{
                  value: 200,
                  message: 'Debe ingresar como máximo 200 carácteres para la descripción de la receta.'
                }
              })
            }
          />
          <Form.Text className="text-danger">{errors.descripcion?.message}</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3 d-flex flex-column">
          <Form.Label>Ingredientes<span className="text-danger">*</span></Form.Label>
          <ul className="m-0 list-unstyled">
            {fields.map(({id, producto, cantidad, unidad}, index) => (
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
                  className="inputIngrediente d-inline-block my-3 mx-sm-2 mx-lg-0"
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
                  <option value="mg">Miligramos</option>
                  <option value="g">Gramos</option>
                  <option value="kg">Kilogramos</option>
                  <option value="ml">Mililitros</option>
                  <option value="l">Litros</option>
                  <option value="cc.">Centímetros cúbicos</option>
                </select>
                <Button variant="danger" className="my-3" type="button" onClick={() => remove(index)}>Borrar ingrediente</Button>
                <Form.Text className="d-block text-danger">{errors.ingredientes?.[index]?.producto?.message}</Form.Text>
                <Form.Text className="d-block text-danger">{errors.ingredientes?.[index]?.cantidad?.message}</Form.Text>
                <Form.Text className="text-danger">{errors.ingredientes?.[index]?.unidad?.message}</Form.Text>
              </li>
            ))}
          </ul>
          <Button className="align-self-start" type="button" onClick={() => append({nombre: 'Ingrediente', cantidad: 1, unidad: 'Elija una unidad de medida'})}>Agregar ingrediente</Button>
        </Form.Group>

        <Button type="submit" variant="success">Guardar</Button>
      </Form>
    </section>
  )
}

export default FormularioReceta