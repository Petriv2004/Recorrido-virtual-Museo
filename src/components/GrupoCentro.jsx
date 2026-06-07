export default function GrupoCentro() {
  return (
    <div style={{ borderTop: "0.5px solid var(--borde)" }}>

      {/* Header del grupo */}
      <div style={{
        padding: "6rem 1.25rem 3rem",
        borderBottom: "0.5px solid var(--borde)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        flexWrap: "wrap",
        gap: "1rem",
      }}>
        <div>
          <p style={{
            fontSize: "11px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--texto-secundario)",
            marginBottom: "0.75rem",
          }}>
            Grupo 2 · Arquitectura
          </p>
          <h2 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(48px, 12vw, 96px)",
            lineHeight: 0.9,
            color: "var(--texto)",
          }}>
            CENTRO<br />DE<br />AYUDA
          </h2>
        </div>
        <div style={{
          fontSize: "11px",
          color: "var(--texto-secundario)",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          textAlign: "right",
          lineHeight: 2,
        }}>
          Cra 4 # 31-76<br />
          La Perseverancia<br />
          Bogotá D.C.
        </div>
      </div>

      {/* Placeholder secciones */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "0",
        borderBottom: "0.5px solid var(--borde)",
      }}>
        {[
          { num: "01", titulo: "El lugar", desc: "Análisis del lote y diagnóstico del estado actual del inmueble." },
          { num: "02", titulo: "La propuesta", desc: "Concepto arquitectónico y programa del centro de ayuda comunitaria." },
          { num: "03", titulo: "Espacios", desc: "Distribución, zonificación y descripción de los espacios del centro." },
          { num: "04", titulo: "Impacto", desc: "Alcance social y beneficios para la comunidad del barrio." },
        ].map((item) => (
          <div key={item.num} style={{
            padding: "2.5rem 1.25rem",
            borderRight: "0.5px solid var(--borde)",
            borderBottom: "0.5px solid var(--borde)",
          }}>
            <div style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "48px",
              color: "var(--borde)",
              lineHeight: 1,
              marginBottom: "0.75rem",
            }}>
              {item.num}
            </div>
            <div style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "20px",
              letterSpacing: "0.08em",
              color: "var(--texto)",
              marginBottom: "0.5rem",
            }}>
              {item.titulo}
            </div>
            <div style={{
              fontSize: "13px",
              color: "var(--texto-secundario)",
              lineHeight: 1.6,
              marginBottom: "1.5rem",
            }}>
              {item.desc}
            </div>
            <div style={{
              fontSize: "10px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--borde)",
              borderTop: "0.5px solid var(--borde)",
              paddingTop: "0.75rem",
            }}>
              Contenido por agregar · Grupo 2
            </div>
          </div>
        ))}
      </div>

      {/* Placeholder imagen */}
      <div style={{
        height: "50vh",
        background: "rgba(255,255,255,0.02)",
        border: "0.5px dashed var(--borde)",
        margin: "3rem 1.25rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "0.75rem",
      }}>
        <div style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "14px",
          letterSpacing: "0.2em",
          color: "var(--borde)",
        }}>
          CONTENIDO GRUPO 2
        </div>
        <div style={{
          fontSize: "11px",
          color: "var(--borde)",
          letterSpacing: "0.08em",
          textAlign: "center",
          lineHeight: 1.8,
        }}>
          Renders, planos y propuesta arquitectónica<br />
          del Centro de Ayuda · Por agregar
        </div>
      </div>

      {/* Footer */}
      <div style={{
        padding: "3rem 1.25rem",
        borderTop: "0.5px solid var(--borde)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "1rem",
      }}>
        <div style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "13px",
          letterSpacing: "0.15em",
          color: "var(--texto-secundario)",
        }}>
          Taller Internacional Italia 2026
        </div>
        <div style={{
          fontSize: "11px",
          color: "var(--borde)",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}>
          Universidad Piloto de Colombia
        </div>
      </div>
    </div>
  );
}