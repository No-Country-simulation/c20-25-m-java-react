import React from 'react'
import Navbar from '../components/navbar'
import Section from '../components/section'
import Footer from '../components/footer'
import "../App.css"
import CommetnBox from '../components/commetnBox'
import Questions from '../components/questions'

const data = [
  { imageSrc: 'https://www.shutterstock.com/image-photo/children-join-volunteers-reforestation-earth-260nw-2160172273.jpg' },
  { imageSrc: 'https://www.shutterstock.com/image-photo/children-join-volunteers-reforestation-earth-260nw-2160172273.jpg' },
  { imageSrc: 'https://www.shutterstock.com/image-photo/children-join-volunteers-reforestation-earth-260nw-2160172273.jpg' },
  { imageSrc: 'https://www.shutterstock.com/image-photo/children-join-volunteers-reforestation-earth-260nw-2160172273.jpg' },
];

const aboutUs = () => {
  return (
    <>
        <Navbar/>
        {/* Sección principal con imagen y contenido */}
        <div>

            <Section
                imgSrc={"https://www.reddearboles.org/nwlib6/includes/phpthumb/phpThumb.php?src=/imagenes/nwproject5.forms.f_news/1/rda-firmo-acuerdos-entidades-valle-cauca.webp&w=700&f=webp"}
                imgAlt={"reforesArt en accion"}
                title={"Únete a nuestra misión para reforestar y proteger los bosques nativos de Argentina."}
                content="La Fundación ReforestArt es una organizacion naciente dedicada a la conservación de nuestros ecosistemas. Nuestra meta principal es plantar árboles en las zonas afectadas por las actividades humanas y por desastres naturales.
                Gracias a las empresas y personas naturales que han hecho posible realizar esta contribución a nuestros ecosistemas
                ¡Este tan solo es el inicio!"
                buttonText={"Únete y Empieza a Plantar"}
            />
            <br />
            <Questions
              data={data}
            />

            <CommetnBox/>
           <Footer/>
        </div>
     </>
  )
}

export default aboutUs
