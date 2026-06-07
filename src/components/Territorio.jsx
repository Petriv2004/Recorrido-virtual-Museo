export default function Territorio() {
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
            Análisis urbano compartido
          </p>
          <h2 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(48px, 12vw, 96px)",
            lineHeight: 0.9,
            color: "var(--texto)",
          }}>
            TERRI-<br />TORIO
          </h2>
        </div>
      </div>

      {/* Datos urbanos */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
        gap: "0",
        borderTop: "0.5px solid var(--borde)",
        marginBottom: "3rem",
      }}>
        {[
          { label: "Área del barrio", valor: "Por agregar" },
          { label: "Estrato", valor: "Por agregar" },
          { label: "Localidad", valor: "Por agregar" },
          { label: "Año fundación", valor: "Por agregar" },
        ].map((item) => (
          <div key={item.label} style={{
            padding: "1.5rem 1rem",
            borderRight: "0.5px solid var(--borde)",
            borderBottom: "0.5px solid var(--borde)",
          }}>
            <div style={{
              fontSize: "9px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--texto-secundario)",
              marginBottom: "0.5rem",
            }}>
              {item.label}
            </div>
            <div style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "24px",
              letterSpacing: "0.05em",
              color: "var(--texto)",
            }}>
              {item.valor}
            </div>
          </div>
        ))}
      </div>

      {/* Placeholder mapa */}
      <div style={{
        height: "50vh",
        background: "rgba(255,255,255,0.02)",
        border: "0.5px dashed var(--borde)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "0.75rem",
        marginBottom: "3rem",
      }}>
        <div style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "14px",
          letterSpacing: "0.2em",
          color: "var(--borde)",
        }}>
          MAPA DEL TERRITORIO
        </div>
        <div style={{
          fontSize: "11px",
          color: "var(--borde)",
          letterSpacing: "0.08em",
        }}>
          Mapa interactivo del barrio · Por agregar
        </div>
      </div>

      {/* Análisis urbano */}
      <div style={{
        borderTop: "0.5px solid var(--borde)",
      }}>
        <div style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "13px",
          letterSpacing: "0.2em",
          color: "var(--rojo)",
          padding: "1.5rem 0 1rem",
        }}>
          Reconocimiento urbano
        </div>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "0",
        }}>
          {[
            { num: "01", titulo: "Morfología urbana", desc: "Trazado, manzanas, lotes y estructura vial del barrio." },
            { num: "02", titulo: "Usos del suelo", desc: "Distribución de usos residencial, comercial e institucional." },
            { num: "03", titulo: "Espacio público", desc: "Parques, plazas, andenes y zonas de encuentro comunitario." },
            { num: "04", titulo: "Movilidad", desc: "Flujos peatonales, vehiculares y accesibilidad al sector." },
          ].map((item) => (
            <div key={item.num} style={{
              padding: "1.5rem 1rem",
              borderRight: "0.5px solid var(--borde)",
              borderBottom: "0.5px solid var(--borde)",
            }}>
              <div style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "40px",
                color: "var(--borde)",
                lineHeight: 1,
                marginBottom: "0.5rem",
              }}>
                {item.num}
              </div>
              <div style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "18px",
                letterSpacing: "0.08em",
                color: "var(--texto)",
                marginBottom: "0.5rem",
              }}>
                {item.titulo}
              </div>
              <div style={{
                fontSize: "12px",
                color: "var(--texto-secundario)",
                lineHeight: 1.6,
                marginBottom: "1.25rem",
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
                Contenido por agregar
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}