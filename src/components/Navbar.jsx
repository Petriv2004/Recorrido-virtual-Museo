import { useState } from "react";

export default function Navbar({ paginaActiva, setPagina }) {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const tabs = [
    { id: "lugar", label: "El Lugar" },
    { id: "analisis", label: "Análisis" },
    { id: "recorrido", label: "Recorrido" },
    { id: "galeria", label: "Galería" },
  ];

  return (
    <nav style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "1rem 1.25rem",
      position: "sticky",
      top: 0,
      zIndex: 100,
      borderBottom: "0.5px solid var(--borde)",
      backdropFilter: "blur(10px)",
      background: "rgba(17,17,17,0.95)",
    }}>
      <div style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: "16px",
        letterSpacing: "0.1em",
        color: "var(--texto)",
        lineHeight: 1.2,
      }}>
        LA PERSEVERANCIA
        <span style={{
          fontSize: "9px",
          fontFamily: "'DM Sans', sans-serif",
          color: "var(--rojo)",
          letterSpacing: "0.1em",
          display: "block",
        }}>
          CRA 4 # 31-76 · BOGOTÁ
        </span>
      </div>

      {/* Desktop tabs */}
      <div style={{
        display: "flex",
        gap: "1.5rem",
      }}
        className="desktop-nav"
      >
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
              color: paginaActiva === tab.id ? "var(--texto)" : "var(--texto-secundario)",
              borderBottom: paginaActiva === tab.id ? "1px solid var(--rojo)" : "1px solid transparent",
              paddingBottom: "2px",
              transition: "all 0.2s",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Hamburger móvil */}
      <button
        onClick={() => setMenuAbierto(!menuAbierto)}
        className="mobile-nav-btn"
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "var(--texto)",
          fontSize: "20px",
          padding: "4px",
          display: "none",
        }}
      >
        {menuAbierto ? "✕" : "☰"}
      </button>

      {/* Menú móvil desplegable */}
      {menuAbierto && (
        <div style={{
          position: "absolute",
          top: "100%",
          left: 0,
          right: 0,
          background: "rgba(17,17,17,0.98)",
          borderBottom: "0.5px solid var(--borde)",
          padding: "1rem 1.25rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
          className="mobile-menu"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => { setPagina(tab.id); setMenuAbierto(false); }}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "13px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: paginaActiva === tab.id ? "var(--texto)" : "var(--texto-secundario)",
                borderLeft: paginaActiva === tab.id ? "2px solid var(--rojo)" : "2px solid transparent",
                paddingLeft: "0.75rem",
                textAlign: "left",
                transition: "all 0.2s",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}