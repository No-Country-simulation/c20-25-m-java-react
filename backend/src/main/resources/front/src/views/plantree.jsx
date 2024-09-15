import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import Carousel from '../components/carruselTree';
import TreeInfo from '../components/treeInfo';

const images = [
  "public/imgTree/arbolQubrancho.jpg",
  "public/imgTree/timbo.jpg",
  "public/imgTree/arrayan.jpg"
];

const trees = [
  {
    name: 'Quebracho Colorado',
    species: 'Schinopsis balansae',
    description: (
      <>
  El Quebracho Colorado es un árbol nativo que se encuentra en las provincias de Corrientes, Chaco, Formosa, y en el norte de Santa Fe y Entre Ríos.
  <br />
  Es el árbol forestal argentino desde 1956 y, desde 1998, está incluido entre las especies amenazadas de la lista roja de la Unión Internacional para la Conservación de la Naturaleza (UICN).
</>

    )
    ,
    co2Compensated: '50',
  },
  {
    name: 'Timbó',
    species: 'Enterolobium contortisiliquum',
    description: 'El Timbó es un árbol grande que se encuentra en las selvas tropicales y subtropicales especificamente en en la provincia de Misiones, es en una de las regiones donde acoge la mayor biodiversidad de la Argentina donde habitan mas de 500 especies de aves.',
    co2Compensated: '45',
  },
  {
    name: 'Arrayán',
    species: 'Luma apiculata',
    description: 'El Arrayán es un árbol de la Patagonia,especificamente en las  zonas andina desde el centro de Neuquén, hasta el norte de la provincia del Chubut. Los arrayanes más antiguos pueden tener hasta 600 años, aproximadamente,.',
    co2Compensated: '55',
  }
];

const PlanTree = () => {
  const [currentTree, setCurrentTree] = useState(trees[0]);
  const [quantity, setQuantity] = useState(1);

  const handleImageChange = (index) => {
    if (index >= trees.length) {
      setCurrentTree(trees[0]);
    } else if (index < 0) {
      setCurrentTree(trees[trees.length - 1]);
    } else {
      setCurrentTree(trees[index]);
    }
  };

  const handleAddToCart = () => {
    alert(`Se han agregado ${quantity} ${currentTree.name} al carrito.`);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#F2F1EB]">
        <div className="pt-20 flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-4">
            <Carousel images={images} onImageChange={handleImageChange} />
          </div>
          <div className="lg:w-1/2 p-4">
            <TreeInfo tree={currentTree} />
            
            {/* Contenedor de cantidad y botones */}
            <div className="flex items-center space-x-2 mt-4">
              <button
                className="bg-green-600 text-white p-2 rounded-l"
                onClick={decreaseQuantity}
              >
                -
              </button>
              <span className="bg-gray-200 p-2">{quantity}</span>
              <button
                className="bg-green-600 text-white p-2 rounded-r"
                onClick={increaseQuantity}
              >
                +
              </button>
            </div>
            
            {/* Mostrar el monto total basado en la cantidad */}
            <p className="font-semibold mt-4">
              Monto Total: ${7000 * quantity}
            </p>

            {/* Botón de comprar */}
            <button
              onClick={handleAddToCart}
              className="bg-green-600 text-white mt-4 p-2 w-full rounded"
            >
              Comprar
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PlanTree;