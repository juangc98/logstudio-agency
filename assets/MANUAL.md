# log studio — Manual de marca v2

Este manual reemplaza al anterior. Todo se rehízo desde cero, **incluido el logo** (tronco flotando, ver sección 2), con una idea: **técnico y artesanal, pero con color y chispa**. Profesionales sin ser aburridos.

Los valores exactos viven en `tokens.json` (fuente) y `tokens.css` (generado). Las tipografías están en `fonts/` y se cargan con `fonts.css`. `tablero-v2.png` muestra el sistema de un vistazo. La versión anterior quedó en `archivo-v1/`.

---

## 1. Esencia

log studio arma tiendas a medida y mantiene una suite de apps propias para Shopify. El nombre tiene tres lecturas a la vez: el registro del código (`console.log`), el tronco (la materia prima) y el castor (quien construye y canaliza el río). El castor no corta el río: lo canaliza. Una tienda bien hecha no frena el tráfico, lo dirige hacia la venta.

**Firma:** Código con criterio. Construido para durar.

**Tres atributos**

| Atributo | Qué significa | Cómo se nota |
|---|---|---|
| Artesanal | Hecho por personas, con oficio y cuidado | Bordes firmes, sombras sólidas, detalles hechos a mano, soporte con nombre y apellido |
| Técnico | Preciso, sin humo | Tipografía mono para etiquetas, números en vez de adjetivos, lenguaje de terminal en dosis |
| Con chispa | Cálido y vivo | Color saturado, formas redondeadas, humor seco en los detalles |

**Referencia:** SkaiLama. Nos quedamos con su orden (tarjetas modulares, mucho aire, mensajes que hablan de resultados) y su promesa de soporte humano. Le sumamos más color, más carácter y la mano artesanal.

---

## 2. Logo

Un tronco flotando, visto de frente y hundido: asoma el **40%**. Queda una media luna con el **núcleo y 3 anillos** del tronco (todos del mismo grosor), **una punta a 90°** arriba a la derecha y **una línea de superficie** debajo. La punta es el brote; los anillos son los del tronco y también las ondas del agua. Al lado va la palabra `log studio` en JetBrains Mono Bold, todo en minúscula, también al inicio de una oración.

**Archivos (`brand/logo/`)**

| Archivo | Uso |
|---|---|
| `logo-horizontal.svg` | Símbolo + palabra, en tinta (fondos claros) |
| `logo-horizontal-papel.svg` | Símbolo + palabra, en papel (fondos oscuros) |
| `simbolo.svg` / `simbolo-papel.svg` / `simbolo-brasa.svg` | Solo símbolo (el brasa solo sobre tinta) |
| `simbolo-cuadrado.svg` | Símbolo en caja cuadrada, para avatares |
| `../favicon/` | `favicon.svg` (cambia a papel en modo oscuro) y PNG 16, 32, 48, 192, 512 y apple-touch |

**Colores permitidos (uno solo, sin partir el logo):**

| Fondo | Logo |
|---|---|
| papel, arena, brasa, sol, brote | tinta |
| tinta, río, uva | papel |
| tinta | brasa (solo el símbolo) |

**Reglas**

- La punta es exactamente de 90°, en la esquina superior derecha. No se afila ni se cambia el ángulo.
- Núcleo y 3 anillos, todos del mismo grosor. No se agregan ni se quitan.
- La línea de superficie es única y tan ancha como el símbolo. No se duplica ni se curva.
- Siempre se ve el 40% del tronco: no se muestra completo ni a la mitad.
- Aire alrededor: como mínimo la altura de una `x` de la palabra.
- Tamaño mínimo del símbolo: 32 px de ancho. Por debajo se usa el favicon.
- La palabra no se reescribe con la fuente: se usa siempre el archivo, que ya viene en trazos.
- No se aplican gradientes, sombras, contornos ni se rota.
- No se coloca sobre fotos sin un fondo liso detrás.

> Logo anterior (círculo con anillos): `brand/archivo-v1/`.

---

## 3. Color

Una base cálida y neutra (papel, arena, tinta), cinco colores vivos con rol propio y un marrón reservado al castor. El color acompaña, el neutro ordena.

| Nombre | Hex | Rol |
|---|---|---|
| papel | #FFF9EE | Fondo base |
| arena | #F0DCB3 | Superficies y bandas alternas. Un tono más oscuro que papel, sin llegar al marrón |
| tinta | #1A1412 | Texto, bordes, sombras, logo (el negro cálido de la marca) |
| tinta-suave | #5C4A42 | Texto secundario (8,0:1 sobre papel, 6,2:1 sobre arena) |
| **brasa** | #FF6A2B | Color de marca. Botón principal, Promo Log |
| **sol** | #FFC93C | Resaltados, badges, marcadores |
| **brote** | #19B77A | Éxito, crecimiento, Bundle Log |
| **río** | #2F5BFF | Links, foco, datos, Test Log |
| **uva** | #7A4DF0 | Cuarto color: apps futuras y acentos lúdicos |
| castor | #8B5A3C | **Reservado al personaje.** Ver más abajo |

Cada color vivo tiene una versión suave (`brasa-claro`, `sol-claro`, `brote-claro`, `rio-claro`, `uva-claro`) para fondos de tarjetas, avisos y estados. Hay modo oscuro completo en `tokens.json`.

**Combinaciones aprobadas (contraste)**

| Texto sobre fondo | Contraste |
|---|---|
| tinta sobre papel | 17,4:1 |
| tinta sobre arena | 13,5:1 |
| tinta sobre brasa | 6,4:1 |
| tinta sobre sol | 11,9:1 |
| tinta sobre brote | 7,0:1 |
| papel sobre río | 4,9:1 |
| papel sobre uva | 4,8:1 |
| río sobre papel (links) | 4,9:1 |

Sol, brasa y brote **nunca** van como texto sobre papel: no alcanzan contraste. Sirven como fondo con tinta encima.

**El marrón es del castor.** `castor` (#8B5A3C), `castor-hondo` (#5C3A28) y `castor-claro` (#D9AE7E) existen solo para ilustrar al personaje: no se usan en interfaz, botones, textos ni fondos. Si la mascota no se suma, el marrón no entra en el sistema.

**Proporción:** 60 % papel/arena, 25 % tinta, 10 % un color vivo protagonista por pieza, 5 % acentos. Una pieza tiene un protagonista (casi siempre brasa) y, como mucho, otros dos colores de apoyo.

---

## 4. Tipografía

| Rol | Familia | Uso |
|---|---|---|
| Display | **Bricolage Grotesque** 700 / 800 | Titulares, nombres de apps. Tiene carácter y un toque lúdico sin perder seriedad |
| Texto | **Inter** 400 / 600 | Texto corrido, interfaz, documentación |
| Etiquetas y código | **JetBrains Mono** 400 / 700 | Etiquetas, badges, números y detalles de terminal. Es la misma de la palabra del logo |

Escala: display-xl 64/64 (800), display-l 40/44 (700), titulo 22/28 (600), cuerpo 16/26, chico 14/20, etiqueta 12/16 mono bold en mayúscula con tracking +0,06 em, codigo 14/20.

Sentence case en todo: "Ver nuestras apps", no "VER NUESTRAS APPS". Las etiquetas mono son la excepción (mayúscula).

---

## 5. Forma y sistema gráfico

**Bordes y sombras.** Los elementos interactivos y las tarjetas llevan borde de 2 px en `tinta` y una **sombra dura** sólida (`0 4px 0 tinta`), sin desenfoque. Da un aire de pieza hecha a mano y mantiene todo nítido. Sin gradientes.

**Radios.** 8 px en inputs y badges, 16 px en tarjetas chicas, 24 px en paneles y ventanas de terminal, pastilla completa en chips de estado. Los botones tienen su propio radio (ver Botones).

**Botones.** Redondeados en tres esquinas y con la **esquina superior derecha en 4 px**: es la punta del logo llevada al botón. Esa esquina no baja de 4 px.

| Tamaño | Alto | Radio (`superior-izq superior-der inferior-der inferior-izq`) | Token |
|---|---|---|---|
| Chico | 36 px | `18px 4px 18px 18px` | `radius-boton-sm` |
| Estándar | 48 px | `24px 4px 24px 24px` | `radius-boton-md` |
| Grande | 56 px | `28px 4px 28px 28px` | `radius-boton-lg` |

- Borde de 2 px en tinta y sombra dura `0 4px 0 tinta`. Texto en Inter SemiBold, sentence case.
- **Botón primario:** fondo brasa, texto tinta. **Secundario:** fondo papel. Éxito o instalar: fondo brote.
- **Con ícono:** el ícono va **siempre a la izquierda, contra el borde, dentro de un círculo**. El círculo mide el alto del botón menos 12 px (36 px en uno de 48 px) y queda a 4 px del borde. Círculo tinta con ícono papel en botones de color; círculo brasa con ícono tinta en botones papel. Íconos de trazo grueso y puntas redondeadas, igual que los glifos de las apps.
- Nunca pastilla completa ni cuatro esquinas iguales.
- En el admin de Shopify, donde la app usa componentes Polaris, el botón puede no permitir este radio: ahí se mantiene el color de marca y la regla se aplica a widgets de tienda, páginas de la app y sitio. Conviene verificarlo al desarrollar.

```css
.btn{display:inline-flex;align-items:center;gap:12px;height:48px;padding:0 24px;
  border:2px solid var(--tinta);border-radius:var(--radius-boton-md);
  background:var(--brasa);color:var(--tinta);box-shadow:var(--sombra-dura);font:600 16px Inter}
.btn--icono{padding:0 24px 0 4px}
.btn--icono .circulo{width:36px;height:36px;border-radius:50%;background:var(--tinta);
  color:var(--papel);display:grid;place-items:center}
```

**La punta.** La forma del logo anterior y de la esquina del símbolo (círculo con una esquina de 90°) es el recurso gráfico propio: avatares, badges, resaltados y contenedores de ilustración. Token `radius-punta`.

**Anillos.** Arcos concéntricos como los del tronco: patrón de fondo, divisores y animaciones de carga. Siempre en un solo color y con trazo grueso.

**Layout.** Tarjetas modulares con mucho aire, grilla de 4 px. Fondos que alternan papel, arena y un bloque de color vivo para marcar ritmo.

**Ventana de terminal.** Panel en tinta con radio 24, texto papel y detalles en brasa y brote. Se usa en hero, contacto, 404 y estados vacíos. Humor seco, nunca en la propuesta comercial.

---

## 6. Personaje

El castor es el personaje de la marca: aparece en ilustraciones, onboarding, estados vacíos y comunicación cercana, **nunca como logo**. Se redibuja en el nuevo estilo: formas geométricas planas, borde tinta de 2 px y sombra dura. Sin pixel art. Mantiene su cola plana y cuadriculada. **El marrón es suyo:** pelaje en `castor`, sombras en `castor-hondo` y panza en `castor-claro`. Los colores vivos del sistema aparecen en lo que lo rodea (troncos, ropa, objetos, fondos).

Poses base: sentado (avatar), cargando un tronco, construyendo, celebrando, pensando. Pendiente de ilustrar.

---

## 7. Íconos de apps

Cada app tiene **un color vivo y un glifo simple**. El ícono vive dentro de la **forma del logo** (círculo con la punta de 90° arriba a la derecha), centrada en un cuadrado redondeado, que es el formato que pide Shopify (1200×1200). La forma no lleva anillos: es la silueta llena.

**Variante principal, "forma de color" (`icon.svg`)**

1. Fondo cuadrado en papel.
2. La forma del logo en el color de la app, a ~70 % del ancho del ícono.
3. El glifo en papel, centrado, a ~35 % del ancho, con trazo grueso y puntas redondeadas.

**Variante "forma tinta" (`icon-forma-tinta.svg`)**

1. Fondo cuadrado en el color de la app.
2. La forma del logo en tinta.
3. El glifo en el color de la app, igual que el fondo.

La principal se lee mejor sobre fondos claros y en el listado de la App Store; la de forma tinta tiene más presencia sobre fondos de color y en redes. Ambas se mantienen: una misma app no mezcla variantes dentro de una misma pieza.

| App | Color | Glifo | Archivos |
|---|---|---|---|
| Promo Log | brasa | porcentaje | `apps/promo-log/icon.svg`, `icon-forma-tinta.svg` |
| Bundle Log | brote | cubo | `apps/bundle-log/icon.svg`, `icon-forma-tinta.svg` |
| Test Log | río | matraz | `apps/test-log/icon.svg`, `icon-forma-tinta.svg` |
| (siguiente app) | uva | a definir | |

**Para una app nueva:** elegir color libre de la paleta, glifo reconocible en un trazo, probar a 48 px y a 1200 px, verificar que el glifo en papel contrasta con el color elegido (el color de la app como fondo del glifo en la variante tinta debe contrastar con tinta). Naming: `<Función> Log`, con "Log" al final (a confirmar contra `log + función` del brief).

---

## 8. Voz y contenido

**Principios**

1. **Claro antes que ingenioso.** Una idea por frase, verbos concretos, números en vez de adjetivos.
2. **Cercano, con oficio.** Hablamos como el compañero que arregla el problema y te explica qué hizo.
3. **Humor en los detalles.** Estados vacíos, errores, cargas. Nunca en la propuesta comercial.
4. **Promesas que podemos cumplir.** Sin cifras ni clientes que no podamos respaldar.

**Dos tonos, una voz**

| Línea | Tono | Ejemplo |
|---|---|---|
| Agencia | Cercano, consultivo | "Contanos qué necesitás. Te respondemos en menos de 48 horas." |
| Apps | Directo, orientado a resultado | "Instalá, configurá en minutos, mirá el resultado." |

**Reglas de escritura**

- Verbos de construcción: armamos, levantamos, conectamos, canalizamos.
- Sentence case en títulos y botones. Voseo argentino en español.
- Evitar: "soluciones end-to-end", "revolucionario", "potenciá tu negocio".
- Mercado global: inglés primero, español como segundo idioma.
- Cada acción conserva su nombre en todo el flujo: si el botón dice "Enviar mensaje", la confirmación dice "mensaje enviado".

**Promesa de soporte** (lo que más pesa en reviews): gente real que responde y conoce el código porque lo escribió. Tiempo de respuesta publicado y cumplido, ayuda de instalación incluida en todos los planes.

**Presentación (boilerplate)**

- 15 palabras: log studio es un estudio de Shopify: tiendas a medida y apps propias, hechas con criterio.
- 30 palabras: log studio es un estudio de dos programadores, de Buenos Aires y Rosario. Armamos tiendas a medida y mantenemos una suite de apps para Shopify. Código con criterio, construido para durar.
- EN: log studio is a two-developer Shopify studio. We build custom stores and maintain a suite of apps for merchants. Code with judgment, built to last.

**Microcopy**

| Situación | Texto |
|---|---|
| Éxito | `> mensaje enviado ✓  te respondemos en menos de 48 horas` |
| Cargando | `> armando tu tienda...` |
| Estado vacío | `Todavía no hay nada acá. $ crear el primero` |
| Error | `No pudimos guardar el cambio. Probá de nuevo o escribinos.` |
| 404 | `404: command not found. $ cd ~` |
| Cierre de página | `$ exit · session closed.` |

Los dos llamados a la acción del sitio se llaman siempre igual: **Agendar una call** y **Ver las apps** (a confirmar frente a "Quiero mi tienda" del brief).

---

## 9. Pendiente

- Ilustrar el castor en el estilo nuevo.
- Confirmar naming de apps (`Promo Log` o `logPromos`).
- Decidir si los íconos de apps (sección 7) siguen usando la silueta del logo anterior (círculo con punta) o se rediseñan con el símbolo nuevo (media luna con línea de superficie).
- Revisar los componentes del sitio (hoy solo hay portada) con los tokens v2: si el sitio ya usa nombres de tokens v1 (`crema`, `crema-alta`, `castor`...), hay que mapearlos. Ojo: `castor` ahora es el marrón del personaje y no se usa en interfaz.
