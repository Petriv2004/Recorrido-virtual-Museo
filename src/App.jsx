import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Barrio from "./components/Barrio";
import Territorio from "./components/Territorio";
import Selector from "./components/Selector";
import GrupoMuseo from "./components/GrupoMuseo";
import GrupoCentro from "./components/GrupoCentro";

function Inicio() {
  return (
    <div>
      <section id="inicio"><Hero /></section>
      <section id="barrio"><Barrio /></section>
      <section id="territorio"><Territorio /></section>
      <section id="proyectos"><Selector /></section>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter basename="/Recorrido-virtual-Museo">
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/museo" element={<GrupoMuseo />} />
        <Route path="/centro" element={<GrupoCentro />} />
      </Routes>
    </BrowserRouter>
  );
}