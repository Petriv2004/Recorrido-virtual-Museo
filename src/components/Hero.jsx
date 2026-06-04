export default function Hero() {
    return (
        <div style={{
            padding: "2rem 1.5rem 1.5rem",
            background: "var(--fondo-card)",
            borderBottom: "0.5px solid var(--borde)",
        }}>
            <div style={{
                display: "inline-block",
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--rojo)",
                background: "var(--rojo-claro)",
                padding: "3px 10px",
                borderRadius: "var(--radio)",
                marginBottom: "0.75rem",
                fontWeight: 500,
            }}>
                Propuesta de intervención · 2026
            </div>

            <h1 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "26px",
                fontWeight: 700,
                lineHeight: 1.2,
                marginBottom: "0.5rem",
            }}>
                Casa Esquinera<br />de La Perseverancia
            </h1>

            <p style={{
                fontSize: "13px",
                color: "var(--texto-secundario)",
                lineHeight: 1.6,
                maxWidth: "480px",
            }}>
                Edificio patrimonial de 3 pisos con planta curva en esquina. Propuesta
                de reconversión como museo comunitario del barrio.
            </p>

            <div style={{
                display: "flex",
                gap: "1.5rem",
                marginTop: "1rem",
                flexWrap: "wrap",
            }}>
                {[
                    { icon: "📍", texto: "Cl 32 con Kr 4" },
                    { icon: "🏛️", texto: "3 pisos + azotea" },
                    { icon: "🕐", texto: "Est. ~1940" },
                ].map((item) => (
                    <div key={item.texto} style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        fontSize: "12px",
                        color: "var(--texto-secundario)",
                    }}>
                        <span>{item.icon}</span>
                        <span>{item.texto}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}