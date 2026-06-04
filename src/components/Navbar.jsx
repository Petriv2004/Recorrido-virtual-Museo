export default function Navbar({ paginaActiva, setPagina }) {
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
      padding: "1.25rem 2rem",
      position: "sticky",
      top: 0,
      zIndex: 100,
      borderBottom: "0.5px solid var(--borde)",
      backdropFilter: "blur(10px)",
      background: "rgba(17,17,17,0.85)",
    }}>
      <div style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: "20px",
        letterSpacing: "0.15em",
        color: "var(--texto)",
      }}>
        LA PERSEVERANCIA
        <span style={{
          fontSize: "10px",
          fontFamily: "'DM Sans', sans-serif",
          color: "var(--rojo)",
          letterSpacing: "0.1em",
          display: "block",
          marginTop: "-4px",
        }}>
          CRA 4 # 31-76 · BOGOTÁ
        </span>
      </div>

      <div style={{
        display: "flex",
        gap: "2rem",
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
    </nav>
  );
}