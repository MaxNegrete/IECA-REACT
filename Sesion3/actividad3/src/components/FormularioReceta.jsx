import Ingredientes from "./Ingredientes";



let ingredientes = [];

const agregaIngrediente = () => {
  ingredientes.push(document.getElementById("txtIngrediente").value);
  document.getElementById("txtIngrediente").value='';
  document.getElementById("txtIngrediente").focus();
  //Ingredientes(ingredientes);
};
const FormularioReceta = ({ onSubmit }) => {
  const submit = (event) => {
    event.preventDefault();
    const form = event.target;
    const nombre = form[0].value;
    const tiempo = form[1].value;
    const foto = form[2].value;
    const receta = { nombre, tiempo, foto,ingredientes };
    onSubmit(receta);
    form.reset();
    ingredientes = [];
  };

  return (
            <div className="container  col-12">
              <div className="card col-4">
                <form onSubmit={submit}>
                  <div className="card-header bg-info text-light">
                    Crear Receta
                  </div>
                  <div className="card-body">
                    <div id="creaReceta">
                      <div className="contenedor-receta">
                        <label type="label" name="lblReceta" htmlFor="txtReceta">Receta:</label>
                        <input type="text" name="txtReceta" id="txtReceta" className="form-control"/>
                        <label type="label" name="lblTiempo" htmlFor="txtTiempo">Tiempo de preparación:</label>
                        <input type="number" name="txtTiempo" id="txtTiempo" className="form-control"/>
                        <label type="label" name="lblFoto" htmlFor="txtFoto">Foto:</label>
                        <input type="text" name="txtFoto" id="txtFoto" className="form-control"/>
                        <br/>
                        <div className="contenedor-ingredientes row col-12">
                          <div className="col-8">
                            {/* <label type="label" name="lbl" htmlFor="txtIngrediente">Ingrediente:</label> */}
                            <input type="text" name="ingrediente" id="txtIngrediente" className="form-control" placeholder="Ingrediente"/>

                          </div>
                          <div className="col-4">
                            <button type="button" className="btn btn-primary" onClick={agregaIngrediente}>Agregar</button>
                          </div>
                          <div className="lista-ingredientes row col-12">
                              <Ingredientes ingredientes={ingredientes} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer bg-transparent text-right">
                    <div className="row" id="btnGuardaReceta">
                      <button type="submit" className="btn btn-success">Guardar</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
  );
};

export default FormularioReceta;