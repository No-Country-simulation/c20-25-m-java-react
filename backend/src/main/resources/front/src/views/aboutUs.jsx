import React from 'react'
import Navbar from '../components/navbar'
import Button from '../components/button'

const aboutUs = () => {
  return (
    <>
        <Navbar/>
        {/* Sección principal con imagen y contenido */}
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            {/* Contenedor en dos columnas */}
            <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-7xl mx-auto p-4">

                {/* Columna de la imagen */}
                <div className="flex justify-center items-center">
                    <img src="https://www.reddearboles.org/nwlib6/includes/phpthumb/phpThumb.php?src=/imagenes/nwproject5.forms.f_news/1/rda-firmo-acuerdos-entidades-valle-cauca.webp&w=700&f=webp" 
                    alt="EquipoReforestando" 
                    className="w-full h-auto rounded-md shadow-lg"/>
                </div>

                {/* Columna de contenido */}
                <div className="flex flex-col justify-center items-start p-6 bg-white rounded-md shadow-lg">
                    <h1 className="text-3xl font-bold text-black mb-4">
                    Haz la diferencia: únete a nuestra misión para reforestar y
                    proteger los bosques nativos de Argentina.
                    </h1>
                    <p>
                    La Fundación ReforestArt es una organizacion naciente dedicada a la conservación de nuestros ecosistemas y contribuir con la disminución del impacto ambiental que se genera día a día. Esto se hace principalmente con el apoyo de la empresa Grupos especailizados y apasionados por la naturaleza y la reforestacion. 
                    Nuestra meta principal es plantar árboles en las zonas afectadas por las actividades humanas y por desastres naturales. Hemos plantado más de xxxx árboles nativos en diferentes lugares de Argentina, como provincias de Salta, Santiago del Estero, Chaco y Formosa.
                    Gracias a las empresas y personas naturales que han hecho posible realizar esta contribución a nuestros ecosistemas.<br/>
                    <b>¡Este tan solo es el inicio!</b>
                    </p>

                </div>

            </div>
        </div>
     </>
  )
}

export default aboutUs
