import logo from "./logo.svg";

import {Route,BrowserRouter,Routes,Link} from "react-router-dom";
import HolaMundo from "./components/HolaMundo";
import SegundaPagina from "./components/SegundaPagina";

function App() {
  return (
    <BrowserRouter>
      <main className="w-screen h-screen bg-slate-400 flex flex-col items-center justify-center">
        <img src={logo} className="w-96" alt="logo" />
        <h1 className="text-4xl font-bold">Desarrollo web con React - IECA</h1>
        <div className="flex gap-4 py-4">
          <Link to="/hola-mundo" className="font-bold text-2xl text-blue-700">
            Hola Mundo
          </Link>
          <Link to="/otra-pagina" className="font-bold text-2xl text-blue-700">
            Otra página
          </Link>
        </div>
        <Routes>
          <Route path="/hola-mundo" exact element={<HolaMundo />} />
          <Route path="/otra-pagina" exact element={<SegundaPagina />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;