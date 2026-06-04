import { useState } from "react";

const diagnostico = [
  { estado: "ok", texto: "Cobertura 4G confirmada — aviso Claro visible a media cuadra" },
  { estado: "ok", texto: "Cámara de seguridad del Distrito instalada en fachada lateral" },
  { estado: "ok", texto: "Servicio eléctrico activo — medidor visible en fachada" },
  { estado: "warn", texto: "Infraestructura de telecomunicaciones aérea — sin fibra aparente" },
  { estado: "bad", texto: "Sin presencia digital actual — el lugar no existe en plataformas" },
];

const colores = {
  ok: "#4caf50",
  warn: "#ff9800",
  bad: "#f44336",
};

export default function Inicio() {
  const [hover, setHover] = useState(false);

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      padding: "1.25rem 1.5rem",
    }}>

      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          position: "relative",
          borderRadius: "var(--radio-lg)",
          overflow: "hidden",
          cursor: "pointer",
          height: "420px",
        }}
      >
        <img
          src="/fotos/antes.jpg"
          alt="Estado actual"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: hover ? 0 : 1,
            transition: "opacity 0.6s ease",
          }}
        />
        <img
          src="/fotos/despues.jpg"
          alt="Propuesta museo"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: hover ? 1 : 0,
            transition: "opacity 0.6s ease",
          }}
        />

        <div style={{
          position: "absolute",
          bottom: "1rem",
          left: "1rem",
          zIndex: 10,
        }}>
          <div style={{
            background: hover ? "var(--rojo)" : "rgba(0,0,0,0.6)",
            color: "#fff",
            fontSize: "11px",
            padding: "4px 12px",
            borderRadius: "var(--radio)",
            fontWeight: 500,
            transition: "background 0.4s ease",
            display: "inline-block",
          }}>
            {hover ? "PROPUESTA · Museo Comunitario" : "ESTADO ACTUAL · Cra 4 # 31-76"}
          </div>
        </div>

        <div style={{
          position: "absolute",
          top: "1rem",
          right: "1rem",
          zIndex: 10,
          background: "rgba(0,0,0,0.5)",
          color: "rgba(255,255,255,0.7)",
          fontSize: "10px",
          padding: "3px 10px",
          borderRadius: "var(--radio)",
        }}>
          {hover ? "← volver" : "pasa el cursor →"}
        </div>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "12px",
      }}>
        {[
          { label: "Dirección", valor: "Cra 4 # 31-76\nBarrio La Perseverancia" },
          { label: "Pisos identificados", valor: "3 + azotea", acento: true },
          { label: "Tipología", valor: "Esquinera curva\nFachada doble" },
          { label: "Estado actual", valor: "Uso habitacional\nParcialmente activo" },
        ].map((card) => (
          <div key={card.label} style={{
            background: "var(--fondo-card)",
            border: "0.5px solid var(--borde)",
            borderRadius: "var(--radio-lg)",
            padding: "1rem 1.25rem",
          }}>
            <div style={{
              fontSize: "11px",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "var(--texto-secundario)",
              marginBottom: "0.5rem",
              fontWeight: 500,
            }}>
              {card.label}
            </div>
            <div style={{
              fontSize: card.acento ? "20px" : "14px",
              color: card.acento ? "var(--rojo-medio)" : "var(--texto)",
              fontWeight: 500,
              lineHeight: 1.5,
              whiteSpace: "pre-line",
            }}>
              {card.valor}
            </div>
          </div>
        ))}

        <div style={{
          gridColumn: "1 / -1",
          background: "var(--fondo-card)",
          border: "0.5px solid var(--borde)",
          borderRadius: "var(--radio-lg)",
          padding: "1rem 1.25rem",
        }}>
          <div style={{
            fontSize: "11px",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            color: "var(--texto-secundario)",
            marginBottom: "0.75rem",
            fontWeight: 500,
          }}>
            Diagnóstico digital del entorno
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {diagnostico.map((item) => (
              <div key={item.texto} style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontSize: "13px",
                padding: "8px 10px",
                background: "var(--fondo)",
                borderRadius: "var(--radio)",
              }}>
                <div style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  flexShrink: 0,
                  background: colores[item.estado],
                }} />
                {item.texto}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}