import { useState, useEffect } from "react";
import FormularioReceta from "./FormularioReceta";
import Receta from "./Receta";

const ListaRecetas = () => {
  const [recetaCount, setRecetaCount] = useState(0);
  const [recetas, setRecetas] = useState([
    {
      nombre:"Flan",
      tiempo:45,
      foto:'https://www.thatskinnychickcanbake.com/wp-content/uploads/2020/02/Cream-Cheese-Caramel-Flan-6-Copy-480x480.jpg',
      ingredientes:[
        '5 Huevos',
        '4 c de azucar',
        'Lata de leche evaporada',
        'Lata de leche condenzada'
      ]
    },
    {
      nombre:"Pizza",
      tiempo:60,
      foto:'https://napolicartagena.com/wp-content/uploads/2022/01/La-Pizza-Hawaiana-de-Canada.jpg',
      ingredientes:[
        '1/2 kg Harina',
        '11 gr levadura en polvo',
        '10 gr azucar',
        '5 gr sal',
        '375 ml agua',
        '500 gr Queso mozzarella',
        'Salsa de tomate',
        'Jamón',
        'Salami',
        'Piña'
      ]
    }
  ]);

  const addReceta = (receta) => {
    setRecetas([...recetas, receta]);
  };

  useEffect(() => {
    setRecetaCount(recetas.length);
  }, [recetas]);

  return (
    <>
    <div className="row">
      <div className="h2 text-danger text-center col-12">Recetario ({recetaCount} recetas para ti) </div>
    </div>
      <FormularioReceta onSubmit={addReceta} />
      <br/>
      <div className="row">
        {recetas.map((receta) => (
            <Receta receta={receta} />
        ))}
      </div>
    </>
  );
};

export default ListaRecetas;