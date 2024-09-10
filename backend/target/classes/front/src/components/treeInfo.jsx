import React, { useState } from 'react';
import Button from './Button'; // Asegúrate de que este sea el botón adecuado

const TreeInfo = ({ tree, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleAddToCart = () => {
    onAddToCart(quantity);
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-2">{tree.name}</h2>
      <p className="font-semibold mb-2">Especie: {tree.species}</p>
      <p className="mb-4">{tree.description}</p>
      <p className="font-semibold mb-2">Total de CO2 compensado: {tree.co2Compensated} kg</p>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Cantidad</label>
        <input
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-green-500"
          min="1"
        />
      </div>
      <p className="font-semibold mb-4">Monto Total: ${7000 * quantity}</p>
      <Button onClick={handleAddToCart} className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-300">
        Comprar
      </Button>
    </div>
  );
};

export default TreeInfo;
