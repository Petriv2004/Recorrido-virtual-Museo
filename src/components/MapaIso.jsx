export default function MapaIso() {
  return (
    <div style={{ padding: "1.25rem 1.5rem" }}>
      <div style={{
        background: "var(--fondo-card)",
        border: "0.5px solid var(--borde)",
        borderRadius: "var(--radio-lg)",
        padding: "1.25rem",
      }}>
        <div style={{
          display: "flex",
          gap: "1rem",
          marginBottom: "1rem",
          flexWrap: "wrap",
        }}>
          {[
            { color: "#993C1D", label: "Planta baja" },
            { color: "#185FA5", label: "Segundo piso" },
            { color: "#5F5E5A", label: "Terraza" },
            { color: "#639922", label: "Accesos" },
          ].map((item) => (
            <div key={item.label} style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "12px",
              color: "var(--texto-secundario)",
            }}>
              <div style={{
                width: "10px",
                height: "10px",
                borderRadius: "2px",
                background: item.color,
              }} />
              {item.label}
            </div>
          ))}
        </div>

        <svg viewBox="0 0 520 320" width="100%" style={{ display: "block" }}>
          <ellipse cx="260" cy="285" rx="180" ry="20" fill="#888780" opacity="0.08" />
          <polygon points="60,200 60,240 200,280 200,240" fill="#712B13" opacity="0.7" />
          <polygon points="60,200 200,240 340,200 200,160" fill="#993C1D" />
          <polygon points="200,160 340,200 340,240 200,240" fill="#D85A30" opacity="0.6" />
          <ellipse cx="340" cy="200" rx="55" ry="28" fill="#993C1D" opacity="0.9" />
          <polygon points="285,200 285,240 395,240 395,200" fill="#712B13" opacity="0.5" />
          <ellipse cx="340" cy="240" rx="55" ry="28" fill="#D85A30" opacity="0.4" />
          <text x="170" y="210" textAnchor="middle" fontSize="10" fill="#FAECE7" fontFamily="DM Sans" fontWeight="500">Hall entrada</text>
          <text x="170" y="222" textAnchor="middle" fontSize="9" fill="#F5C4B3" fontFamily="DM Sans">Sala 1 · Historia</text>
          <polygon points="80,155 80,200 220,160 220,115" fill="#0C447C" opacity="0.7" />
          <polygon points="80,155 220,115 360,155 220,195" fill="#185FA5" />
          <polygon points="220,115 360,155 360,200 220,160" fill="#378ADD" opacity="0.5" />
          <ellipse cx="355" cy="152" rx="52" ry="26" fill="#185FA5" opacity="0.95" />
          <polygon points="303,152 303,200 407,200 407,152" fill="#0C447C" opacity="0.4" />
          <ellipse cx="355" cy="200" rx="52" ry="26" fill="#378ADD" opacity="0.3" />
          <text x="200" y="155" textAnchor="middle" fontSize="10" fill="#E6F1FB" fontFamily="DM Sans" fontWeight="500">Sala 2 · Arte</text>
          <text x="200" y="167" textAnchor="middle" fontSize="9" fill="#B5D4F4" fontFamily="DM Sans">Sala 3 · Temporal</text>
          <polygon points="100,115 100,155 240,115 240,75" fill="#444441" opacity="0.6" />
          <polygon points="100,115 240,75 370,115 240,155" fill="#5F5E5A" />
          <polygon points="240,75 370,115 370,155 240,115" fill="#888780" opacity="0.5" />
          <text x="230" y="108" textAnchor="middle" fontSize="10" fill="#F1EFE8" fontFamily="DM Sans" fontWeight="500">Terraza mirador</text>
          <circle cx="140" cy="250" r="7" fill="#639922" opacity="0.9" />
          <text x="140" y="265" textAnchor="middle" fontSize="9" fill="#3B6D11" fontFamily="DM Sans">Acceso Cl 32</text>
          <circle cx="280" cy="260" r="7" fill="#639922" opacity="0.9" />
          <text x="280" y="275" textAnchor="middle" fontSize="9" fill="#3B6D11" fontFamily="DM Sans">Acceso Kr 4</text>
          <text x="30" y="260" fontSize="9" fill="#888780" fontFamily="DM Sans" transform="rotate(-30, 30, 260)">Calle 32</text>
          <text x="390" y="220" fontSize="9" fill="#888780" fontFamily="DM Sans" transform="rotate(30, 390, 220)">Carrera 4</text>
        </svg>

        <p style={{
          fontSize: "11px",
          color: "var(--texto-secundario)",
          textAlign: "center",
          marginTop: "0.75rem",
          fontStyle: "italic",
        }}>
          Vista isométrica conceptual · Navega por "Recorrido" para explorar cada zona
        </p>
      </div>
    </div>
  );
}