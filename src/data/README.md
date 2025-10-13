# Guía de uso de datos para CodeOn 2025

## 📁 Estructura de archivos

### Speakers (`src/data/speakers.json`)
Este archivo contiene la información de todos los speakers del evento.

**Estructura:**
```json
{
  "id": número único,
  "name": "Nombre completo del speaker",
  "role": "Cargo/Empresa",
  "bio": "Breve descripción del speaker",
  "image": "ruta de la imagen (relativa a src/assets/images/speakers/)",
  "social": {
    "linkedin": "URL opcional",
    "twitter": "URL opcional", 
    "github": "URL opcional"
  },
  "topic": "Título de la charla/taller"
}
```

**Pasos para agregar un speaker:**
1. Coloca la imagen del speaker en `src/assets/images/speakers/`
2. Agrega un nuevo objeto al array en `speakers.json`
3. La imagen se mostrará automáticamente en el carrusel

---

### Sponsors (`src/data/sponsors.json`)
Este archivo contiene la información de sponsors organizados por categoría.

**Estructura:**
```json
{
  "platinum": [],  // Sponsors nivel Platinum
  "golden": [],    // Sponsors nivel Golden
  "partners": []   // Comunidades Aliadas
}
```

**Cada sponsor tiene:**
```json
{
  "id": número único dentro de la categoría,
  "name": "Nombre del sponsor",
  "logo": "ruta del logo (relativa a src/assets/images/sponsors/)",
  "website": "URL del sitio web",
  "description": "Descripción opcional"
}
```

**Pasos para agregar un sponsor:**
1. Coloca el logo del sponsor en `src/assets/images/sponsors/`
2. Agrega un nuevo objeto al array de la categoría correspondiente
3. El logo se mostrará automáticamente en la sección

---

## 🎨 Recomendaciones de imágenes

### Speakers:
- **Formato:** JPG o PNG
- **Dimensiones recomendadas:** 400x400px (cuadrado)
- **Peso máximo:** 200KB
- **Fondo:** Preferiblemente uniforme o con buena iluminación

### Sponsors:
- **Formato:** PNG (con fondo transparente preferiblemente)
- **Dimensiones:** 
  - Platinum: 300x150px
  - Golden: 250x125px
  - Partners: 200x100px
- **Peso máximo:** 100KB

---

## ⚡ Ventajas de este sistema

✅ **Sin tocar código:** Solo editas los archivos JSON
✅ **Sin impacto en rendimiento:** Las imágenes se cargan igual de rápido
✅ **Fácil mantenimiento:** Actualiza speakers y sponsors sin ser desarrollador
✅ **Escalable:** Agrega tantos como necesites

---

## 🔧 Troubleshooting

**Si una imagen no se muestra:**
1. Verifica que la ruta en el JSON sea correcta
2. Asegúrate de que la imagen esté en la carpeta correspondiente
3. Revisa que el nombre del archivo coincida (respeta mayúsculas/minúsculas)

**Si los sponsors no aparecen:**
1. Verifica que el array de la categoría no esté vacío
2. Asegúrate de que cada sponsor tenga un `id` único
3. Revisa la consola del navegador para errores
