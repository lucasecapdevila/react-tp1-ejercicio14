import { Button, Form } from "react-bootstrap"
import { useForm } from "react-hook-form"

const FormularioReceta = () => {
  const {register, handleSubmit, formState: {errors}} = useForm()

  const recetaValida = (receta) => {
    console.log(receta);
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
            <option value="entradas">Entradas</option>
            <option value="guarnicion">Guarnición</option>
            <option value="platoPrincipal">Plato Principal</option>
            <option value="postres">Postres</option>
            <option value="salsas">Salsas</option>
            <option value="masas">Pizzas y Masas</option>
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

        {/* <Form.Group className="mb-3" controlId="formIngredientes">
          <Form.Label>Ingredientes<span className="text-danger">*</span></Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingredientes de la receta"
            required
          />
          <Form.Text className="text-danger">mensaje de error</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPreparacion">
          <Form.Label>Preparación<span className="text-danger">*</span></Form.Label>
          <Form.Control
            type="text"
            placeholder="Preparación de la receta"
            required
          />
          <Form.Text className="text-danger">mensaje de error</Form.Text>
        </Form.Group> */}

        <Button type="submit" variant="success">Guardar</Button>
      </Form>
    </section>
  )
}

export default FormularioReceta