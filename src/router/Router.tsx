import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Cadastro from '../pages/Cadastro'

function Router() {

  return (    
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route path="cadastro" element={<Cadastro />}/>
        </Routes>
      </BrowserRouter>
    
  )
}

export default Router