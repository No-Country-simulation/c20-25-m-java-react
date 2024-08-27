import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css'
import './index.css'
import Home from './views/home'

function App() {
 

  return (
    <BrowserRouter>
      <>
        <Routes>
        <Route path="/" element={<Home/>}/>


        </Routes>
      </>
    </BrowserRouter>
  )
}

export default App
