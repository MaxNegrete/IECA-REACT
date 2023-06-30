const Ingredientes = ({ ingredientes }) => {

  return (
    <>
      <ul>
      {ingredientes.map((ingrediente) => (
        <li>{ingrediente}</li>
        ))}
      </ul>
    </>    
  );
};

export default Ingredientes;