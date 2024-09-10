import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Carousel from '../components/carruselTree';
import TreeInfo from '../components/treeInfo';

const images = [
  '/path/to/tree1.jpg',
  '/path/to/tree2.jpg',
  '/path/to/tree3.jpg',
  // Añadir más imágenes según sea necesario
];

const trees = [
  {
    name: 'Quebracho Colorado',
    species: 'Schinopsis balansae',
    description: 'El Quebracho Colorado es un árbol nativo del Gran Chaco que se destaca por su madera dura y resistente.',
    co2Compensated: '50',
  },
  {
    name: 'Lapacho',
    species: 'Handroanthus impetiginosus',
    description: 'El Lapacho es conocido por su hermosa floración y su resistencia a la sequía.',
    co2Compensated: '40',
  },
  // Añadir más árboles según sea necesario
];

const PlanTree = () => {
  const [currentTree, setCurrentTree] = useState(trees[0]);

  const handleImageChange = (index) => {
    setCurrentTree(trees[index]);
  };

  const handleAddToCart = (quantity) => {
    // Lógica para agregar al carrito (o realizar el registro de la compra)
    alert(`Se han agregado ${quantity} ${currentTree.name} al carrito.`);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#C4DAD2]">
        <div className="pt-20 flex flex-col lg:flex-row"> {/* Añadir pt-20 para el relleno superior */}
          <div className="lg:w-1/2 p-4">
            <Carousel images={images} onImageChange={handleImageChange} />
          </div>
          <div className="lg:w-1/2 p-4">
            <TreeInfo tree={currentTree} onAddToCart={handleAddToCart} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PlanTree;
