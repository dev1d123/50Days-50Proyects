### Animación de Carga en CSS y JavaScript

La animación de carga en el código proporcionado es una combinación de técnicas en CSS y JavaScript que trabajan juntas para mostrar un efecto de "esqueleto" o "placeholder" animado mientras se cargan los datos reales.

### 1. **Definición del Gradiente en CSS**

La animación se basa en un fondo de gradiente que simula el efecto de un esqueleto animado.

```css
.animated-bg {
    background-image: linear-gradient(
        to right,
        #f6f7f8 0%,
        #edeef1 10%,
        #f6f7f8 20%,
        #f6f7f8 100%
    );
    background-size: 200% 100%;
    animation: bgPos 1s linear infinite;
}
```

- **`background-image`:** Se utiliza un `linear-gradient` que se mueve de izquierda a derecha, alternando entre diferentes tonos de gris claro.
- **`background-size`:** El tamaño del fondo se establece en `200%` del ancho del contenedor para permitir el movimiento horizontal del gradiente.
- **`animation`:** Se aplica la animación `bgPos`, con una duración de 1 segundo, un movimiento lineal y repetición infinita. Esto es lo que crea el efecto de desplazamiento.

### 2. **Creación de la Animación con `@keyframes`**

Se define una animación con `@keyframes` que controla el movimiento del gradiente.

```css
@keyframes bgPos {
    0% {
        background-position: 50% 0;
    }
    100% {
        background-position: -150% 0;
    }
}
```

- **`0%` y `100%`:** Representan el inicio y el final del ciclo de animación.
- **`background-position`:** Controla la posición inicial y final del gradiente. La animación comienza en el `50%` y se desplaza hacia la izquierda hasta `-150%`. Esto crea un movimiento continuo y suave.

### 3. **Estructura HTML con Clases de Carga**

En el HTML, se agregan clases `animated-bg` y `animated-bg-text` a los elementos que deben mostrar la animación de carga.

```html
<div class="card">
    <div id="header" class="card-header animated-bg"></div>
    <div class="card-content">
        <h3 id="title" class="card-title animated-bg animated-bg-text"></h3>
        <p id="excerpt" class="card-excerpt animated-bg animated-bg-text"></p>
        <div class="author">
            <div id="profile-img" class="profile-img animated-bg"></div>
            <div class="author-info">
                <strong id="name" class="animated-bg animated-bg-text"></strong>
                <small id="date" class="animated-bg animated-bg-text"></small>
            </div>
        </div>
    </div>
</div>
```

- **`animated-bg`:** Aplica el fondo animado a los contenedores.
- **`animated-bg-text`:** Se utiliza para elementos de texto, dando una apariencia de líneas en movimiento.

### 4. **JavaScript: Control de la Animación**

El código JavaScript simula la carga de datos y controla cuándo se eliminan las clases de animación, reemplazándolas con el contenido real.

```javascript
const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile-img');
const name = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2500);

function getData(){
    header.innerHTML =
        '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="" />';
    title.innerHTML = 'Lorem ipsum dolor sit amet';
    excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis';
    profile_img.innerHTML =
        '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />';
    name.innerHTML = 'John Doe';
    date.innerHTML = 'Oct 08, 2020';

    animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'));
    animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'));
}
```

- **`setTimeout(getData, 2500)`:** Retrasa la ejecución de `getData()` por 2.5 segundos, simulando el tiempo de carga.
- **`getData()`:** Inserta los datos reales en los elementos HTML y elimina las clases `animated-bg` y `animated-bg-text`, deteniendo así la animación.

### 5. **Flujo Completo**

1. **Inicialmente**, los elementos con `animated-bg` y `animated-bg-text` muestran la animación de carga.
2. **Después de 2.5 segundos**, `getData()` se ejecuta, actualiza el contenido de los elementos y elimina las clases de animación, reemplazando el esqueleto animado con el contenido real.

Esta técnica es efectiva para proporcionar una mejor experiencia de usuario durante la carga de datos, evitando que la interfaz se vea vacía o incompleta.