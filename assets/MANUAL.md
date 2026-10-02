# log studio

log studio es un estudio de Shopify que arma tiendas a medida y mantiene una suite de apps propias (log + función: logBundle, logCheckout, logGift, logPromos). La identidad nace de una idea: el castor no corta el río, lo canaliza. Los troncos son el código, el castor es quien construye y el río es el flujo de ventas que la tienda dirige. El castor es la **mascota** de la marca; el **logo** no lo dibuja: es un tronco cortado, visto de frente, con anillos de crecimiento y una punta que sugiere el brote.

El nombre se escribe siempre **log studio**, todo en minúscula, también al inicio de una oración.

## Fundamentos de contenido

- Voz cercana y concreta, con humor nerd en los detalles (estados vacíos, errores, loaders), nunca en la propuesta comercial.
- Verbos de construcción: armamos, levantamos, conectamos, canalizamos.
- Sentence case en todo: "Ver nuestras apps", no "VER NUESTRAS APPS".
- Mercado global: inglés primero, español como segundo idioma.
- Las dos puertas del sitio se llaman siempre igual: "Quiero mi tienda" (agencia) y "Ver nuestras apps" (suite).

## Fundamentos visuales

**Color.** La paleta sale del pelaje del castor y suma el río y el brote como acentos propios:

- `crema` es el fondo; `crema-alta` las superficies elevadas.
- `negro` es el negro de la marca (`#1a1412`, cálido): el logo y las piezas de alto contraste. Es igual en los dos temas; sobre fondo oscuro el logo se usa en `ink`.
- `castor` es el color de la marca, tomado del pelaje de la mascota: ilustración, íconos y titulares grandes. En texto chico sobre crema no alcanza contraste.
- `castor-hondo` es el botón de la agencia; `rio` es el botón de las apps y los links. Las dos puertas se distinguen por color y por claridad.
- `brote` es el verde de acento: crecimiento, éxito, ventas confirmadas, "nuevo". Se usa poco, como la hoja que asoma del tronco; no compite con `castor` ni con `rio`.
- `panza` resalta (badges, tips) siempre con `ink` encima.
- `tronco` es la madera del sistema gráfico.

**Tipografía.** `display` y `sans` son la misma familia, Atkinson Hyperlegible: Bold para titulares y nombres de apps, Regular para todo lo que se lee. `mono` (JetBrains Mono) para código real. La palabra del logo va en JetBrains Mono Bold, convertida a trazos (ver Logo). Pixelify Sans queda fuera de la marca.

**Grilla y forma.** Todo se mide en múltiplos de 4px (`space-1` = un pixel de marca). Radios mínimos (`radius-0` a `radius-md`): la marca es pixel, no burbuja. Sin sombras difusas ni gradientes.

**Sistema gráfico.** Troncos como bloques rectangulares apilados (piezas de código) y bandas de `rio` que fluyen hacia un punto, como un embudo.

## Logo

El logo es un tronco cortado visto de frente: un círculo con la mitad izquierda sólida y la derecha con **3 anillos** de crecimiento recortados en negativo, y **una punta a 90°** arriba a la derecha, con la esquina levemente redondeada. La punta es el brote: sugiere la hoja sin dibujarla. A su lado va la palabra "log studio" en JetBrains Mono Bold, todo en minúscula.

**Archivos** (carpeta Logo):

- **logo / logo-oscuro**: símbolo + palabra, en `negro` sobre fondos claros y en `ink` (crema) sobre fondos oscuros.
- **marca / marca-oscuro**: el símbolo solo, para avatares, íconos y piezas chicas.

**Reglas**

- Un solo color: `negro` sobre claro, `ink` sobre oscuro. No se colorea ninguna parte.
- La punta es exactamente de 90° y tangente al círculo; el radio de la esquina es de 14 sobre un círculo de 88. No se cambia el ángulo ni se afila.
- Siempre 3 anillos y el núcleo. No se agregan ni se quitan.
- Aire alrededor igual al alto de una `x` de la palabra. Tamaño mínimo del símbolo: 24 px de alto; por debajo de eso se usa el favicon.
- No se escribe la palabra con la fuente: se usa siempre el archivo, que ya viene en trazos.
- Los logos anteriores (castor, palabra en pixeles) están en la carpeta Archivo y no se usan en piezas nuevas.

## Favicon

El símbolo del logo, sin la palabra. `favicon.svg` cambia a `ink` cuando el navegador está en modo oscuro; `favicon-32.png` y `apple-touch-icon.png` (180×180) van sobre `crema`. A 16 px los tres anillos se funden en una textura, pero la forma con la punta se sigue reconociendo.

## Mascota

El castor es la mascota de la agencia y de la marca: es quien aparece en ilustraciones, estados de la interfaz, onboarding y comunicación cercana, nunca como logo. Se dibuja en grilla de 32×32, contorno `ink`, pelaje `castor` con sombra `castor-hondo` a la derecha, panza y hocico `panza`, dientes crema. Su rasgo clave es la **cola plana y cuadriculada** en `tronco`: es lo que lo diferencia de una ardilla y dialoga con la grilla pixel.

| Pose | Para qué |
| --- | --- |
| castor-logo (sentado) | Avatar de redes, firma, pose base de la mascota |
| castor-cargando | Onboarding de apps, "estamos armando tu tienda" |
| castor-construyendo | Sección agencia, procesos, carga |
| castor-celebrando | Venta confirmada, instalación exitosa, lanzamientos |
| castor-pensando | Estados vacíos, búsquedas sin resultado, ayuda |

El boceto original queda como referencia de estilo.

## Iconografía

Íconos de apps en grilla pixel de 32×32, contorno `ink`, fondo `crema` o un color de identidad por app. Cada ícono de la suite comparte el tronco o el castor como base y cambia un elemento según la función. Pendiente de diseñar.

## Pendiente de revisar

Con el giro de la marca (sin pixel art) quedan por revisar: la grilla y los radios mínimos, el sistema gráfico de troncos apilados, el estilo pixel de la mascota y de los íconos de apps, y los componentes (hoy solo hay una portada). Se mantienen mientras tanto.
