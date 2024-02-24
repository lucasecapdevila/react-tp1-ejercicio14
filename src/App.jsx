import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Administrador from './components/pages/Administrador'
import DetalleReceta from './components/pages/DetalleReceta'
import Error404 from './components/pages/Error404'
import Inicio from './components/pages/Inicio'
import BarraNavegacion from './components/common/BarraNavegacion'
import FormularioReceta from './components/pages/receta/FormularioReceta'
import Footer from './components/common/Footer'

function App() {
  return (
    <BrowserRouter>
      <BarraNavegacion />
      <Routes>
        <Route exact path='/' element={<Inicio></Inicio>} />
        <Route exact path='/admin' element={<Administrador></Administrador>} />
        <Route exact path='/admin/crear' element={<FormularioReceta crear={true} titulo='Crear receta'></FormularioReceta>} />
        <Route exact path='/admin/editar/:id' element={<FormularioReceta crear={false} titulo='Editar receta'></FormularioReceta>}  />
        <Route exact path='/detalle' element={<DetalleReceta></DetalleReceta>} />
        <Route exact path='*' element={<Error404></Error404>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
