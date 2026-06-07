export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
<div style={{
  minHeight: "auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  padding: "80px 1.25rem 2rem",
}}>
      <p style={{
        fontSize: "11px",
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: "var(--rojo)",
        marginBottom: "1rem",
      }}>
        Proyecto interdisciplinar · 2026
      </p>

      <h1 style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: "clamp(60px, 18vw, 180px)",
        lineHeight: 0.85,
        color: "var(--texto)",
        marginBottom: "2rem",
      }}>
        LA<br />PERSE-<br />VERANCIA
      </h1>

      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "2rem",
        flexWrap: "wrap",
      }}>
        <p style={{
          fontSize: "13px",
          color: "var(--texto-secundario)",
          lineHeight: 1.7,
          maxWidth: "420px",
          margin: 0,
        }}>
          Un barrio con historia, identidad y comunidad.
          Dos propuestas de intervención urbana desde
          arquitectura e ingeniería de sistemas.
        </p>

        <button
          onClick={() => scrollTo("barrio")}
          style={{
            background: "none",
            border: "0.5px solid var(--borde)",
            color: "var(--texto-secundario)",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "11px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            padding: "10px 20px",
            cursor: "pointer",
            whiteSpace: "nowrap",
          }}
        >
          Explorar ↓
        </button>
      </div>
    </div>
  );
}