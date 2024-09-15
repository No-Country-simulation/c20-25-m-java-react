import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Section from '../components/section'


const aboutUs = () => {
    return (
        <>
            <Navbar />
            <div className="min-h-screen [#F2F1EB]">
                <Section
                    imgSrc="/imgAbout/nosotros.webp"
                    imgAlt="nosotros"
                    title="Unete a nuestra misión para reforestar y
                    proteger los bosques nativos de Argentina."
                    content="La Fundación ReforestArt es una organización enfocada en la conservación de ecosistemas y 
                    la reducción del impacto ambiental, con el apoyo de empresas y grupos apasionados por la naturaleza. 
                    Su principal objetivo es reforestar áreas afectadas por actividades humanas y desastres naturales.
                    Tu tambien puedes formar parte de este gran proyecto. "
                   
                    buttonText="Unete a nosotros"
                  
                />
            </div>
            <Footer />
        </>
    )
}

export default aboutUs
