import { Button, Card, CardBody, CardFooter, CardHeader, CardText, CardTitle, Col } from "react-bootstrap"

const CardReceta = () => {
  return (
    <Col xs={12} sm={6} md={4} className="my-2">
      <Card className="px-0">
        <CardHeader className="p-0">
          Imagen de la receta
        </CardHeader>
        <CardBody>
          <CardTitle>Nombre de receta</CardTitle>
          <CardText>
            Descripción
            <br />
            Ingredientes
            <br />
            Preparación
          </CardText>
        </CardBody>
        <CardFooter className="d-flex flex-column">
          <Button className="btn btn-success align-self-end">Ver más</Button>
        </CardFooter>
      </Card>
    </Col>
  )
}

export default CardReceta