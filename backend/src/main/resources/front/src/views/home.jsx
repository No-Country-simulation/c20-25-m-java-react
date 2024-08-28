import Navbar from "../components/navbar";
import backgroundImage from '../assets/imgPrincipal.jpg'; // Asegúrate de que esta ruta sea correcta


const Home = () => {

return(
<>

<div>
      {/* Navbar */}
      <Navbar/>

      {/* Sección de imagen de fondo */}
      <div
        className="w-full"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '607px',
          position: 'relative', // Necesario para el ajuste de la posición del navbar
        }}
      >
        {/* Aquí puedes agregar el texto y el botón más tarde */}
      </div>
    </div>
</>


)



}

export default Home;