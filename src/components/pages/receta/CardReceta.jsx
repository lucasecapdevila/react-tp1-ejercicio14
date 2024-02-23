import { Card, CardBody, CardFooter, CardHeader, CardImg, CardText, CardTitle, Col } from "react-bootstrap"
import { Link } from "react-router-dom"

const CardReceta = ({receta}) => {
  return (
    <Col xs={12} sm={6} md={4} className="my-2">
      <Card className="px-0 h-100">
        <CardHeader className="p-0">
          <CardImg className="img-fluid card-img" src={receta.imagen} alt={receta.nombreReceta} />
        </CardHeader>
        <CardBody>
          <CardTitle>{receta.nombreReceta}</CardTitle>
          <CardText>
            <b>Categoría:</b> {receta.categoria}
            <br />
            <br />
            {receta.descripcion}
          </CardText>
        </CardBody>
        <CardFooter className="d-flex flex-column">
          <Link to='/detalle' className="btn btn-success align-self-end">Ver más</Link>
        </CardFooter>
      </Card>
    </Col>
  )
}

export default CardReceta