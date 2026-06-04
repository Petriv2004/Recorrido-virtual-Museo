import { useState } from "react";

export default function Lugar() {
    const [hover, setHover] = useState(false);

    return (
        <div style={{ minHeight: "100vh", padding: "2rem 2rem 2rem" }}>

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
                        EL<br />LUGAR
                    </h1>
                    <p style={{
                        fontSize: "12px",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        color: "var(--rojo)",
                        marginTop: "0.75rem",
                    }}>
                        Análisis digital · Barrio La Perseverancia · 2026
                    </p>
                </div>
                <div style={{
                    fontSize: "11px",
                    color: "var(--texto-secundario)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    textAlign: "right",
                    lineHeight: 1.8,
                }}>
                    <span style={{ color: "var(--texto)" }}>Cra 4 # 31-76</span><br />
                    3 pisos + azotea<br />
                    Esquinera curva<br />
                    Est. ~1940
                </div>
            </div>

            <div
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                style={{
                    position: "relative",
                    width: "100%",
                    height: "80vh",
                    cursor: "crosshair",
                    overflow: "hidden",
                    background: "#111111",
                }}
            >
                <img
                    src={`${import.meta.env.BASE_URL}fotos/antes.jpg`}
                    alt="Estado actual"
                    style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        objectPosition: "center",
                        opacity: hover ? 0 : 1,
                        transition: "opacity 0.8s ease",
                    }}
                />
                <img
                    src={`${import.meta.env.BASE_URL}fotos/despues.jpg`}
                    alt="Propuesta museo"
                    style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        objectPosition: "center",
                        opacity: hover ? 1 : 0,
                        transition: "opacity 0.8s ease",
                    }}
                />

                <div style={{
                    position: "absolute",
                    bottom: "1.5rem",
                    left: "1.5rem",
                    zIndex: 10,
                }}>
                    <div style={{
                        fontFamily: "'Bebas Neue', sans-serif",
                        fontSize: "32px",
                        letterSpacing: "0.1em",
                        color: "#fff",
                        lineHeight: 1,
                    }}>
                        {hover ? "MUSEO COMUNITARIO" : "ESTADO ACTUAL"}
                    </div>
                    <div style={{
                        fontSize: "11px",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: hover ? "var(--rojo-vivo)" : "var(--texto-secundario)",
                        marginTop: "4px",
                        transition: "color 0.4s",
                    }}>
                        {hover ? "Rehabilitación y puesta en valor" : "Sin intervención · Cra 4 # 31-76"}
                    </div>
                </div>

                <div style={{
                    position: "absolute",
                    top: "1.5rem",
                    right: "1.5rem",
                    zIndex: 10,
                    fontSize: "10px",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.4)",
                }}>
                    {hover ? "← Estado actual" : "Hover → Propuesta"}
                </div>
            </div>

            <div style={{
                display: "flex",
                gap: "3rem",
                marginTop: "2rem",
                borderTop: "0.5px solid var(--borde)",
                paddingTop: "1.5rem",
            }}>
                {[
                    { label: "Tipología", valor: "Esquinera curva" },
                    { label: "Área estimada", valor: "~280 m²" },
                    { label: "Accesos", valor: "3 identificados" },
                    { label: "Cobertura 4G", valor: "Confirmada" },
                    { label: "Presencia digital", valor: "Inexistente" },
                ].map((item) => (
                    <div key={item.label}>
                        <div style={{
                            fontSize: "10px",
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            color: "var(--texto-secundario)",
                            marginBottom: "4px",
                        }}>
                            {item.label}
                        </div>
                        <div style={{
                            fontFamily: "'Bebas Neue', sans-serif",
                            fontSize: "20px",
                            letterSpacing: "0.05em",
                            color: "var(--texto)",
                        }}>
                            {item.valor}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}