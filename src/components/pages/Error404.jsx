import { Button } from 'react-bootstrap'
import error404 from '../../assets/404.png'

const Error404 = () => {
  return (
    <main className="d-flex flex-column align-items-center my-4 mainPage">
      <h1 className='text-center'>Lo sentimos, no pudimos encontrar la página</h1>
      <img className='img-fluid my-2' src={error404} alt="imagen error 404" />
      <Button>Volver al inicio</Button>
    </main>
  )
}

export default Error404