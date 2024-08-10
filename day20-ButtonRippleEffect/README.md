

---

# Explicación de Animaciones con CSS y JavaScript

## 1. Animaciones en CSS con `@keyframes` y `animation`

### Definición de `@keyframes`

```css
@keyframes scale {
    to {
      transform: translate(-50%, -50%) scale(3);
      opacity: 0;
    }
}
```

La regla `@keyframes` en CSS se utiliza para definir la secuencia de cambios de estilo que ocurren durante una animación. En este caso, se crea una animación llamada `scale` que:

- **`to { ... }`**: Define el estado final de la animación. En este caso, al finalizar:
  - La transformación (`transform`) combina una traslación (`translate`) y un escalado (`scale`). 
  - El escalado (`scale(3)`) aumenta el tamaño del elemento tres veces su tamaño original.
  - La opacidad (`opacity`) se reduce a 0, haciendo que el elemento desaparezca gradualmente.

### Uso de `animation` en CSS

```css
button .circle{
    position: absolute;
    background-color: white;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    animation: scale 0.5s ease-out;
}
```

- **`position: absolute;`**: Posiciona el elemento `.circle` de forma absoluta respecto a su contenedor.
- **`transform: translate(-50%, -50%) scale(0);`**: Centra el círculo dentro del botón y lo escala a 0, haciéndolo inicialmente invisible.
- **`animation: scale 0.5s ease-out;`**: Aplica la animación `scale` al elemento `.circle` con una duración de `0.5s` (500 milisegundos) y una transición suave que desacelera al final (`ease-out`).

### ¿Cómo funciona la animación?

Cuando se activa, el círculo (`.circle`) se expande desde un tamaño de 0 hasta tres veces su tamaño original (`scale(3)`) mientras se mueve ligeramente, debido a `translate(-50%, -50%)`. Durante este proceso, la opacidad del círculo disminuye hasta desaparecer (`opacity: 0`), creando un efecto de "onda expansiva".

## 2. Interactividad con JavaScript: Coordinadas del Ratón

### Explicación del Código JavaScript

```javascript
const buttons = document.querySelectorAll('.ripple');
buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        const x = e.clientX;
        const y = e.clientY;

        const buttonTop = e.target.offsetTop;
        const buttonLeft = e.target.offsetLeft;

        const xInside = x - buttonLeft;
        const yInside = y - buttonTop;

        const circle = document.createElement('span');
        circle.classList.add('circle');
        circle.style.top = yInside + 'px';
        circle.style.left = xInside + 'px';

        this.appendChild(circle);

        setTimeout(() => circle.remove(), 500);
    });
});
```

- **`clientX` y `clientY`**: Capturan las coordenadas X e Y del puntero del ratón en el momento del clic, relativas a la ventana del navegador.

- **`offsetTop` y `offsetLeft`**: Obtienen la distancia desde la parte superior y desde la izquierda del botón hasta el borde superior e izquierdo del contenedor.

- **`xInside` y `yInside`**: Calculan la posición del clic dentro del botón restando las posiciones del botón (`buttonLeft`, `buttonTop`) de las coordenadas del clic (`clientX`, `clientY`).

- **`circle.style.top` y `circle.style.left`**: Posicionan el círculo generado dinámicamente en la posición exacta donde se hizo clic dentro del botón.

- **`setTimeout(() => circle.remove(), 500);`**: Elimina el círculo después de 500 milisegundos, el mismo tiempo que dura la animación, asegurando que el DOM no quede cargado de elementos innecesarios.

### Resultado de la Interacción

Cuando el usuario hace clic en un botón con la clase `.ripple`, se crea un elemento `span` con la clase `.circle` en la posición exacta del clic. Este `span` ejecuta la animación definida por `@keyframes scale`, simulando una onda que se expande desde el punto de clic y se desvanece rápidamente.

---