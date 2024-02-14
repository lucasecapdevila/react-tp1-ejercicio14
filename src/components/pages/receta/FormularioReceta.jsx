import { Button, Form } from "react-bootstrap"

const FormularioReceta = () => {
  return (
    <section className="container mainPage">
      <h1 className="display-3 mt-5">Nueva Receta</h1>
      <hr />
      <Form className="my-4">
        <Form.Group className="mb-3" controlId="formNombreReceta">
          <Form.Label>Nombre de receta<span className="text-danger">*</span></Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Cafe"
            required
          />
          <Form.Text className="text-danger">mensaje de error{/* {errors.nombreProducto?.message} */}</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Imagen URL<span className="text-danger">*</span></Form.Label>
          <Form.Control
            type="text"
            placeholder="URL de imagen de la receta"
            required
          />
          <Form.Text className="text-danger">mensaje de error</Form.Text>
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
            placeholder="Descripción de la receta"
            required
          />
          <Form.Text className="text-danger">mensaje de error</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formIngredientes">
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
        </Form.Group>

        <Button type="submit" variant="success">Guardar</Button>
      </Form>
    </section>
  )
}

export default FormularioReceta