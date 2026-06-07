import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Lugar from "./Lugar";
import Analisis from "./Analisis";
import Recorrido from "./Recorrido";
import Galeria from "./Galeria";

export default function GrupoMuseo() {
  const [pagina, setPagina] = useState("lugar");
  const navigate = useNavigate();

  const tabs = [
    { id: "lugar", label: "El Lugar" },
    { id: "analisis", label: "Análisis" },
    { id: "recorrido", label: "Recorrido" },
    { id: "galeria", label: "Galería" },
  ];

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
    <div style={{ paddingTop: "60px" }}>

      {/* Sub-navbar del museo */}
      <div style={{
        position: "sticky",
        top: "60px",
        zIndex: 90,
        background: "rgba(17,17,17,0.95)",
        backdropFilter: "blur(10px)",
        borderBottom: "0.5px solid var(--borde)",
        padding: "0.75rem 1.25rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "0.75rem",
      }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
        }}>
          <button
            onClick={() => navigate("/")}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--texto-secundario)",
              fontSize: "11px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontFamily: "'DM Sans', sans-serif",
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            ← Volver
          </button>
          <div style={{
            width: "1px",
            height: "16px",
            background: "var(--borde)",
          }} />
          <div style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "14px",
            letterSpacing: "0.15em",
            color: "var(--rojo)",
          }}>
            Museo Comunitario
          </div>
        </div>

        <div style={{
          display: "flex",
          gap: "1.25rem",
          overflowX: "auto",
        }}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setPagina(tab.id)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "11px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: pagina === tab.id ? "var(--texto)" : "var(--texto-secundario)",
                borderBottom: pagina === tab.id ? "1px solid var(--rojo)" : "1px solid transparent",
                paddingBottom: "2px",
                whiteSpace: "nowrap",
                transition: "all 0.2s",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Contenido */}
      <main>
        {renderPagina()}
      </main>
    </div>
  );
}