const TreeInfo = ({ tree }) => {
  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-2">{tree.name}</h2>
      <p className="font-semibold mb-2">Especie: {tree.species}</p>
      <p className="mb-4">{tree.description}</p>
      <p className="font-semibold mb-2">Total de CO2 compensado: {tree.co2Compensated} kg</p>
    </div>
  );
};

export default TreeInfo;
