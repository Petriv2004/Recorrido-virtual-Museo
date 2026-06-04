const datos = [
  {
    categoria: "Conectividad",
    items: [
      { label: "Cobertura móvil 4G", valor: "Confirmada", estado: "ok" },
      { label: "Fibra óptica visible", valor: "No detectada", estado: "warn" },
      { label: "Cableado telecomunicaciones", valor: "Aéreo / mixto", estado: "warn" },
      { label: "WiFi público", valor: "Ausente", estado: "bad" },
    ],
  },
  {
    categoria: "Presencia digital",
    items: [
      { label: "Google Maps", valor: "Visible sin info", estado: "warn" },
      { label: "Plataformas culturales", valor: "Ausente", estado: "bad" },
      { label: "Datos abiertos IDECA", valor: "Por verificar", estado: "warn" },
      { label: "Redes sociales", valor: "No existe", estado: "bad" },
    ],
  },
  {
    categoria: "Infraestructura física",
    items: [
      { label: "Cámara Distrito", valor: "Confirmada", estado: "ok" },
      { label: "Servicio eléctrico", valor: "Activo", estado: "ok" },
      { label: "Iluminación pública", valor: "Confirmada", estado: "ok" },
      { label: "Semáforo en esquina", valor: "Confirmado", estado: "ok" },
    ],
  },
];

const colores = {
  ok: "#4caf50",
  warn: "#ff9800",
  bad: "#f44336",
};

export default function Analisis() {
  return (
    <div style={{ minHeight: "100vh", padding: "4rem 2rem 2rem" }}>

      {/* Título */}
      <div style={{
        marginBottom: "3rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
      }}>
        <div>
          <h1 style={{
            fontSize: "clamp(48px, 8vw, 96px)",
            lineHeight: 0.9,
            color: "var(--texto)",
          }}>
            ANÁLISIS<br />DIGITAL
          </h1>
          <p style={{
            fontSize: "12px",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--rojo)",
            marginTop: "0.75rem",
          }}>
            Diagnóstico desde ingeniería de sistemas · 2026
          </p>
        </div>
        <div style={{
          fontSize: "11px",
          color: "var(--texto-secundario)",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          textAlign: "right",
          lineHeight: 2,
        }}>
          <span style={{ color: "#4caf50" }}>● </span>Confirmado<br />
          <span style={{ color: "#ff9800" }}>● </span>Sin confirmar<br />
          <span style={{ color: "#f44336" }}>● </span>Ausente
        </div>
      </div>

      {/* Tabla de datos */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "0",
        borderTop: "0.5px solid var(--borde)",
      }}>
        {datos.map((seccion, si) => (
          <div key={seccion.categoria} style={{
            borderRight: si < datos.length - 1 ? "0.5px solid var(--borde)" : "none",
            padding: "2rem",
          }}>
            <div style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "13px",
              letterSpacing: "0.2em",
              color: "var(--rojo)",
              marginBottom: "1.5rem",
            }}>
              {seccion.categoria}
            </div>

            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
            }}>
              {seccion.items.map((item) => (
                <div key={item.label} style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom: "0.5px solid var(--borde)",
                  paddingBottom: "1rem",
                }}>
                  <div style={{
                    fontSize: "11px",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "var(--texto-secundario)",
                  }}>
                    {item.label}
                  </div>
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}>
                    <div style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: colores[item.estado],
                      flexShrink: 0,
                    }} />
                    <div style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: "14px",
                      letterSpacing: "0.08em",
                      color: "var(--texto)",
                    }}>
                      {item.valor}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Aporte desde sistemas */}
      <div style={{
        marginTop: "4rem",
        borderTop: "0.5px solid var(--borde)",
        paddingTop: "2rem",
      }}>
        <div style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "13px",
          letterSpacing: "0.2em",
          color: "var(--rojo)",
          marginBottom: "1.5rem",
        }}>
          Aporte desde ingeniería de sistemas
        </div>
        <div style={{
          display: "flex",
          gap: "0",
          borderTop: "0.5px solid var(--borde)",
        }}>
          {[
            { num: "01", titulo: "Recorrido virtual", desc: "Representación digital del museo propuesto navegable desde cualquier dispositivo" },
            { num: "02", titulo: "Análisis de datos", desc: "Diagnóstico de conectividad y presencia digital del entorno urbano" },
            { num: "03", titulo: "Mapa isométrico", desc: "Visualización interactiva del edificio con navegación por zonas y pisos" },
            { num: "04", titulo: "Galería de campo", desc: "Registro fotográfico del lugar analizado desde perspectiva de sistemas" },
          ].map((item, i) => (
            <div key={item.num} style={{
              flex: 1,
              padding: "1.5rem",
              borderRight: i < 3 ? "0.5px solid var(--borde)" : "none",
            }}>
              <div style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "48px",
                color: "var(--borde)",
                lineHeight: 1,
                marginBottom: "0.5rem",
              }}>
                {item.num}
              </div>
              <div style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "16px",
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
              }}>
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}