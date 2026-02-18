import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import DemosExpress from './pages/DemosExpress'
import DemosNegocio from './pages/DemosNegocio'
import DemosPro from './pages/DemosPro'
import './styles/global.css'
import './styles/variables.css'
import './styles/demos.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demos/express" element={<DemosExpress />} />
        <Route path="/demos/negocio" element={<DemosNegocio />} />
        <Route path="/demos/pro" element={<DemosPro />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
