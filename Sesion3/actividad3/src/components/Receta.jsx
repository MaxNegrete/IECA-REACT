const Receta = ({ receta }) => {
  const { nombre, tiempo, foto, ingredientes } = receta;

  return (

      <div className="col-4">
        <div className="card">
          <div className="card-header bg-danger text-light h2">{nombre}</div>
          <div className="card-body">
            <div className="row">
              <div className="col-6">
                <h4 className="text-dark h4">Ingredientes:</h4>
                <br/>
                  <ul>
                  {ingredientes.map((ingrediente) => (
                    <li>{ingrediente}</li>
                    ))}
                  </ul>
              </div>
              <div className="col-6">
                <img src={foto}></img>
              </div>
            </div>
          </div>
          <div className="card-footer bg-transparent text-right">Tiempo preparación: {tiempo} Min</div>
        </div>
      </div>
  );
};

export default Receta;