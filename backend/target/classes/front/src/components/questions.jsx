import React from 'react'
import Section from './section'


const questions = ({data}) => {
  return (
    <div style={{ maxWidth: '1500px', margin: '0 auto' }}>
      {data.map((item, index) => (
        <div
          key={index}
          style={{ display: 'flex', flexDirection: index % 2 === 0 ? 'row' : 'row-reverse', marginBottom: '20px'  }}
        >
          <br />
          <Section 
           imgSrc={item.imageSrc}
           imgAlt={`Imagen ${index + 1}`} 
           title={`Título de la sección ${index + 1}`}
           content={`Este es el contenido de la sección ${index + 1}.`}
          />
        </div>
      ))}
    </div>
  );
};

  


export default questions
