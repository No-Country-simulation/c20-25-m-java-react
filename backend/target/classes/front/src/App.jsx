import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css'
import './index.css'
import Home from './views/home'
import AboutUs from "./views/aboutUs";
import AccountRegister from "./views/accountRegister";
import Login from "./views/login";
import PlanTree from "./views/plantree";




function App() {
 

  return (
    <BrowserRouter>
      <>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/nosotros" element={<AboutUs/>}/>  
        <Route path="/registro"element={<AccountRegister/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/plantree"element={<PlanTree/>}/>

        



        </Routes>
      </>
    </BrowserRouter>
  )
}

export default App
