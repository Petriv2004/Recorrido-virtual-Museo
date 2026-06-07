import { useState } from "react";

const zonas = [
  {
    id: 0,
    numero: "01",
    nombre: "Hall de entrada",
    piso: "Planta baja · Acceso principal Calle 32",
    descripcion: "Zona de bienvenida al museo. Recibe al visitante desde la esquina curva, el elemento más icónico del edificio. Aquí se propone ubicar la recepción, taquilla y un panel introductorio sobre la historia del barrio.",
    tags: ["Recepción", "Taquilla", "Panel introductorio"],
    color: "#F5C4B3",
  },
  {
    id: 1,
    numero: "02",
    nombre: "Sala Historia",
    piso: "Planta baja · Ala derecha",
    descripcion: "Sala permanente dedicada a la memoria de La Perseverancia. Fotografías históricas, línea de tiempo del barrio, testimonios de habitantes y objetos de la vida cotidiana del sector desde inicios del siglo XX.",
    tags: ["Exhibición permanente", "Archivo fotográfico", "Línea de tiempo"],
    color: "#C0DD97",
  },
  {
    id: 2,
    numero: "03",
    nombre: "Sala Arte",
    piso: "Segundo piso · Esquina curva",
    descripcion: "La sala más icónica del museo, ubicada en la curva del segundo piso con ventanas hacia ambas calles. Espacio para arte contemporáneo vinculado al barrio, intervenciones de artistas locales y murales interiores.",
    tags: ["Arte contemporáneo", "Artistas locales", "Vista panorámica"],
    color: "#B5D4F4",
  },
  {
    id: 3,
    numero: "04",
    nombre: "Sala Temporal",
    piso: "Segundo piso · Ala lateral",
    descripcion: "Sala flexible para exposiciones rotativas, talleres comunitarios y eventos culturales del barrio. El espacio puede reconfigurarse para distintos usos según la programación del museo.",
    tags: ["Exposición rotativa", "Talleres", "Espacio flexible"],
    color: "#CECBF6",
  },
  {
    id: 4,
    numero: "05",
    nombre: "Terraza",
    piso: "Tercer piso · Azotea",
    descripcion: "Espacio abierto en la parte superior del edificio con vista directa hacia los cerros orientales de Bogotá. Zona de descanso, café al aire libre y punto fotográfico privilegiado del barrio.",
    tags: ["Mirador", "Café", "Vista a los cerros"],
    color: "#D3D1C7",
  },
];

export default function Recorrido() {
  const [activa, setActiva] = useState(0);
  const zona = zonas[activa];

  return (
    <div style={{ minHeight: "100vh", padding: "2rem 1.25rem" }}>

      <div style={{ marginBottom: "2rem" }}>
        <h1 style={{
          fontSize: "clamp(48px, 12vw, 96px)",
          lineHeight: 0.9,
          color: "var(--texto)",
        }}>
          RECORRIDO<br />VIRTUAL
        </h1>
        <p style={{
          fontSize: "11px",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "var(--rojo)",
          marginTop: "0.75rem",
        }}>
          Propuesta conceptual · Museo Comunitario La Perseverancia
        </p>
      </div>

      {/* Selector de zonas horizontal en móvil */}
      <div style={{
        display: "flex",
        gap: "8px",
        overflowX: "auto",
        paddingBottom: "1rem",
        borderBottom: "0.5px solid var(--borde)",
        marginBottom: "1.5rem",
        scrollbarWidth: "none",
      }}>
        {zonas.map((z) => (
          <button
            key={z.id}
            onClick={() => setActiva(z.id)}
            style={{
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 14px",
              background: activa === z.id ? "var(--rojo)" : "transparent",
              border: "0.5px solid",
              borderColor: activa === z.id ? "var(--rojo)" : "var(--borde)",
              borderRadius: "4px",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
          >
            <span style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "13px",
              color: activa === z.id ? "#fff" : "var(--texto-secundario)",
              letterSpacing: "0.08em",
            }}>
              {z.numero}
            </span>
            <span style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "11px",
              color: activa === z.id ? "#fff" : "var(--texto-secundario)",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              whiteSpace: "nowrap",
            }}>
              {z.nombre}
            </span>
          </button>
        ))}
      </div>

      {/* Detalle zona activa */}
      <div>
        <div style={{
          height: "240px",
          background: zona.color,
          borderRadius: "var(--radio-lg)",
          marginBottom: "1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "background 0.4s ease",
        }}>
          <div style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(60px, 15vw, 100px)",
            color: "rgba(0,0,0,0.1)",
            letterSpacing: "0.05em",
          }}>
            {zona.numero}
          </div>
        </div>

        <div style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "clamp(28px, 7vw, 48px)",
          letterSpacing: "0.05em",
          color: "var(--texto)",
          lineHeight: 1,
          marginBottom: "0.5rem",
        }}>
          {zona.nombre}
        </div>

        <div style={{
          fontSize: "11px",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "var(--rojo)",
          marginBottom: "1rem",
        }}>
          {zona.piso}
        </div>

        <p style={{
          fontSize: "14px",
          color: "var(--texto-secundario)",
          lineHeight: 1.7,
          marginBottom: "1.25rem",
        }}>
          {zona.descripcion}
        </p>

        <div style={{
          display: "flex",
          gap: "8px",
          flexWrap: "wrap",
        }}>
          {zona.tags.map((tag) => (
            <span key={tag} style={{
              fontSize: "10px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "4px 12px",
              border: "0.5px solid var(--borde)",
              color: "var(--texto-secundario)",
              borderRadius: "var(--radio)",
            }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}