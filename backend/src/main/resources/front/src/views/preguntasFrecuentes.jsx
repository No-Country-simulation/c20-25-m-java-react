import React, { useState } from 'react';
import Navbar from "../components/navbar";
import Footer from "../components/Footer";


const QuestionFrequently = () => {
  // Estado para manejar la apertura de las respuestas
  const [openQuestion, setOpenQuestion] = useState(null);

  // Función para alternar la visibilidad de las respuestas
  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  // Lista de preguntas y respuestas
  const faqData = [
    {
      question: "¿Cómo puedo participar en el proyecto de reforestación?",
      answer: "Al adquirir un árbol, estarás contribuyendo directamente a la reforestación. Empresas asociadas se encargarán de plantarlo en los bosques seleccionados."
    },
    {
      question: "¿Dónde se plantan los árboles que compro?",
      answer: "Contamos con una lista de bosques específicos en Argentina. La ubicación exacta dependerá del tipo de árbol que elijas."
    },
    {
      question: "¿Cómo se realiza el seguimiento de los árboles plantados?",
      answer: "Al realizar una compra, te proporcionamos un PDF y un enlace para que puedas hacer el seguimiento del árbol plantado."
    },
    {
      question: "¿Qué tipo de árboles se plantan y por qué?",
      answer: "Los árboles seleccionados están en peligro de extinción. Su disponibilidad se actualiza en la sección 'Plantar'."
    },
    {
      question: "¿Cuál es el impacto ambiental de cada árbol que planto?",
      answer: "Cada árbol contribuye a la reducción de CO2 y sirve como hábitat natural para diversas especies, ayudando a limpiar el medio ambiente."
    },
    {
      question: "Soy una empresa, ¿cómo puedo participar y colaborar con el proyecto?",
      answer: "Envíanos un email a futuroverde@reforestart.com para que podamos ponernos en contacto contigo."
    },
  ];

  return (
    <>
      <Navbar />
     
      
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#F4F4F4] px-4 py-8">
        <h1 className="text-3xl font-semibold mb-6 text-green-800">Preguntas Frecuentes</h1>
        <div className="w-full max-w-2xl">
          {faqData.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full text-left bg-white border border-gray-300 p-4 rounded-md shadow-md text-lg font-medium hover:bg-green-100 focus:outline-none"
              >
                {faq.question}
              </button>
              {openQuestion === index && (
                <div className="mt-2 bg-white p-4 border border-t-0 border-gray-300 rounded-md">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
            </div>
  
      <Footer />
    </>
  );
};

export default QuestionFrequently;
