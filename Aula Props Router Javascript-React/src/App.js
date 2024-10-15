import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Categorias from './pages/categorias'
import Favoritos from './pages/favoritos'
import MinhaEstante from './pages/minhaEstante'

function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}> </Route>
        <Route path="/home" element={<Home/>}> </Route>
        <Route path="/categorias" element={<Categorias/>}> </Route>
        <Route path="/favoritos" element={<Favoritos/>}> </Route>
        <Route path="/minhaestante" element={<MinhaEstante/>}> </Route>
      </Routes>
    </Router>
  )
}