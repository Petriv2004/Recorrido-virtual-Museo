import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuAbierto, setMenuAbierto] = useState(false);

  const scrollTo = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setMenuAbierto(false);
  };

const tabs = [
  { tipo: "scroll", id: "barrio", label: "El Barrio" },
  { tipo: "scroll", id: "proyectos", label: "Proyectos" },
];

  return (
    <nav style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "1rem 1.25rem",
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      borderBottom: "0.5px solid var(--borde)",
      backdropFilter: "blur(10px)",
      background: "rgba(17,17,17,0.95)",
    }}>
      <div
        onClick={() => navigate("/")}
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "16px",
          letterSpacing: "0.1em",
          color: "var(--texto)",
          lineHeight: 1.2,
          cursor: "pointer",
        }}
      >
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

      <div style={{ display: "flex", gap: "1.5rem" }} className="desktop-nav">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            onClick={() => tab.tipo === "scroll" ? scrollTo(tab.id) : navigate(tab.ruta)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "11px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: location.pathname === tab.ruta ? "var(--texto)" : "var(--texto-secundario)",
              borderBottom: location.pathname === tab.ruta ? "1px solid var(--rojo)" : "1px solid transparent",
              paddingBottom: "2px",
              transition: "color 0.2s",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <button
        className="mobile-nav-btn"
        onClick={() => setMenuAbierto(!menuAbierto)}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "var(--texto)",
          fontSize: "20px",
          display: "none",
        }}
      >
        {menuAbierto ? "✕" : "☰"}
      </button>

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
        }}>
          {tabs.map((tab) => (
            <button
              key={tab.label}
              onClick={() => {
                tab.tipo === "scroll" ? scrollTo(tab.id) : navigate(tab.ruta);
                setMenuAbierto(false);
              }}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "13px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--texto-secundario)",
                borderLeft: "2px solid var(--borde)",
                paddingLeft: "0.75rem",
                textAlign: "left",
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