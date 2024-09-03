import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css'
import './index.css'
import Home from './views/home'
import AboutUs from "./views/aboutUs";

function App() {
 

  return (
    <BrowserRouter>
      <>
        <Routes>
        <Route path="/" element={<Home/>}/>

        {/*Ruta para la seccion nosotros*/}
        <Route path="/nosotros" element={<AboutUs/>}/>  

        
        </Routes>
      </>
    </BrowserRouter>
  )
}

export default App
