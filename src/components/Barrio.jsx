export default function Barrio() {
  return (
    <div style={{
      minHeight: "100vh",
      padding: "6rem 1.25rem 4rem",
      borderTop: "0.5px solid var(--borde)",
    }}>

      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "wrap",
        gap: "1rem",
        marginBottom: "4rem",
      }}>
        <div>
          <p style={{
            fontSize: "11px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--rojo)",
            marginBottom: "0.75rem",
          }}>
            Contexto histórico y cultural
          </p>
          <h2 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(48px, 12vw, 96px)",
            lineHeight: 0.9,
            color: "var(--texto)",
          }}>
            EL<br />BARRIO
          </h2>
        </div>
      </div>

      {/* Placeholder contenido */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "0",
        borderTop: "0.5px solid var(--borde)",
      }}>
        {[
          { num: "01", titulo: "Historia", desc: "Origen y consolidación del barrio obrero más antiguo de Bogotá." },
          { num: "02", titulo: "Identidad", desc: "Cultura, tradiciones y patrimonio inmaterial de La Perseverancia." },
          { num: "03", titulo: "Comunidad", desc: "Tejido social, organizaciones barriales y vida cotidiana del sector." },
          { num: "04", titulo: "Patrimonio", desc: "Edificaciones, espacios públicos y elementos arquitectónicos de valor histórico." },
        ].map((item, i) => (
          <div key={item.num} style={{
            padding: "2rem 1.25rem",
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
              paddingTop: "1rem",
            }}>
              Contenido por agregar
            </div>
          </div>
        ))}
      </div>

      {/* Placeholder imagen */}
      <div style={{
        marginTop: "3rem",
        height: "50vh",
        background: "rgba(255,255,255,0.02)",
        border: "0.5px dashed var(--borde)",
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
          IMAGEN DEL BARRIO
        </div>
        <div style={{
          fontSize: "11px",
          color: "var(--borde)",
          letterSpacing: "0.08em",
        }}>
          Fotografía histórica o contemporánea · Por agregar
        </div>
      </div>
    </div>
  );
}