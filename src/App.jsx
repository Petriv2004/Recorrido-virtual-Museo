import { useState } from "react";
import Navbar from "./components/Navbar";
import Lugar from "./components/Lugar";
import Analisis from "./components/Analisis";
import Recorrido from "./components/Recorrido";
import Galeria from "./components/Galeria";

export default function App() {
  const [pagina, setPagina] = useState("lugar");

  const renderPagina = () => {
    switch (pagina) {
      case "lugar": return <Lugar />;
      case "analisis": return <Analisis />;
      case "recorrido": return <Recorrido />;
      case "galeria": return <Galeria />;
      default: return <Lugar />;
    }
  };

  return (
    <div style={{ minHeight: "100vh" }}>
      <Navbar paginaActiva={pagina} setPagina={setPagina} />
      <main>
        {renderPagina()}
      </main>
    </div>
  );
}