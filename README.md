# Análisis Digital del Lote La Perseverancia

Aporte desde **Ingeniería de Sistemas** al Taller Internacional Italia 2026  
Universidad Piloto de Colombia

---

## Contexto

Este repositorio contiene el análisis urbano digital y el recorrido virtual conceptual del lote asignado al equipo interdisciplinar, ubicado en la **Cra 4 # 31-76, Barrio La Perseverancia, Bogotá**.

El proyecto de intervención física (maqueta y planos) es responsabilidad del equipo de Arquitectura. Este aporte complementa ese trabajo desde la perspectiva de Ingeniería de Sistemas, respondiendo a la pregunta:

> *¿Qué puede decir el territorio desde los datos, y cómo se puede representar digitalmente un espacio que aún no existe físicamente?*

---

## ¿Qué contiene este proyecto?

- **Análisis de conectividad y presencia digital del entorno** — diagnóstico de infraestructura tecnológica del sector a partir de observación en campo
- **Ficha digital del lugar** — datos geoespaciales, estado del inmueble y contexto urbano
- **Mapa isométrico interactivo** — representación visual del edificio con navegación por pisos y zonas
- **Recorrido virtual conceptual** — exploración de las zonas propuestas por el equipo de Arquitectura, sin acceso físico al interior

---

## Enfoque desde Ingeniería de Sistemas

El lugar fue analizado como un **nodo urbano** — no desde lo visual sino desde lo digital:

- ¿Qué infraestructura tecnológica existe en el entorno?
- ¿Cómo está conectado el barrio?
- ¿El lugar tiene presencia digital? ¿Existe en el ecosistema de datos de Bogotá?
- ¿Qué sistema de información podría habitar el espacio según el uso propuesto?

---

## Hallazgos del análisis de campo

| Variable | Observación | Estado |
|---|---|---|
| Cobertura móvil 4G | Aviso Claro visible a media cuadra | ✅ Confirmado |
| Servicio eléctrico | Medidor activo en fachada | ✅ Confirmado |
| Cámara Distrito | Instalada en fachada lateral | ✅ Confirmado |
| Iluminación pública | Postes con luminaria en ambas calles | ✅ Confirmado |
| Fibra óptica | No detectada visualmente | ⚠️ Sin confirmar |
| WiFi público | No detectado en el entorno inmediato | ❌ Ausente |
| Presencia en plataformas digitales | Sin perfil en ninguna plataforma cultural | ❌ Ausente |

---

## Estado del proyecto

| Componente | Estado |
|---|---|
| Análisis de campo y diagnóstico digital | ✅ Completo |
| Prototipo base (React) | 🟡 En desarrollo |
| Mapa isométrico interactivo | 🟡 En desarrollo |
| Recorrido virtual por zonas | 🟡 En desarrollo |
| Imágenes conceptuales de salas (IA) | ⚪ Pendiente |
| Análisis de datos abiertos IDECA | ⚪ Pendiente |
| Integración con propuesta de arquitectura | ⚪ Pendiente |

---

## Tecnologías

- React
- CSS puro (sin frameworks)
- SVG para el mapa isométrico

---

## Estructura del proyecto

```
perseverancia-digital/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Inicio.jsx
│   │   ├── Recorrido.jsx
│   │   ├── MapaIso.jsx
│   │   └── Analisis.jsx
│   ├── App.jsx
│   └── main.jsx
├── public/
│   └── fotos/
├── README.md
└── package.json
```

---

## Fechas clave

| Fecha | Hito |
|---|---|
| 23 de junio de 2026 | Micropitch y planos comparativos |
| 22 de julio de 2026 | Entrega final |

---

## Contexto académico

- **Curso:** Taller Internacional Italia 2026
- **Universidad:** Universidad Piloto de Colombia
- **Área de aporte:** Ingeniería de Sistemas (9° semestre)
- **Lugar de intervención:** Cra 4 # 31-76, Barrio La Perseverancia, Bogotá
- **Equipo:** Interdisciplinar (Arquitectura + Ingeniería de Sistemas)

---

*Repositorio actualizado semanalmente conforme avanza el proyecto.*
