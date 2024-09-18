import React, { useState } from 'react'
import Button from './button';

const commetnBox = () => {
    // Estado para almacenar el comentario actual y la lista de comentarios
    const [comment, setComment]=useState('');
    const [comments, setComments]=useState([]);

    // Función para manejar el envío del comentario
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(comment.trim()){
            setComments([...comments, comment])
            setComment('') // Limpiar la caja de comentarios después de enviar
        }
    }

  return (
    <div>
      <h2>Comentarios</h2>
      <form onSubmit={handleSubmit}>
        <textarea
         value={comment}
         onChange={(e)=> setComment(e.target.value)}
         placeholder='Tus comentarios son muy valiosos para nosotros'
         rows="4"
         cols="50"
        />
        <br />
        {/*<button type='submit'>Enviar</button>*/} 
        <Button>Enviar </Button>           
      </form>

      <div>
        <h3>Lista de comentarios: </h3>
        {comments.map((c, index)=>(
            <div key={index} style={{marginTop: '10px', padding: '10px', border: '1px solid #ddd'}}>
                {c}

            </div>
        ))}
      </div>
    </div>
  )
}

export default commetnBox
