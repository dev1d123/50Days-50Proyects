Este código implementa un carrusel de imágenes con botones de navegación izquierda y derecha. A continuación, se desglosa cada parte del código para entender su funcionalidad y cómo contribuye al funcionamiento del carrusel.

## 1. Selección de Elementos del DOM

```javascript
const imgs = document.getElementById('imgs')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')
const img = document.querySelectorAll('#imgs img')
```

Aquí, se seleccionan varios elementos del DOM utilizando `getElementById` y `querySelectorAll`:

- `imgs`: Selecciona el contenedor que incluye todas las imágenes del carrusel.
- `leftBtn`: Selecciona el botón para mover el carrusel hacia la izquierda.
- `rightBtn`: Selecciona el botón para mover el carrusel hacia la derecha.
- `img`: Selecciona todos los elementos `<img>` dentro del contenedor `imgs`.

## 2. Inicialización de Variables

```javascript
let idx = 0
let interval = setInterval(run, 2000)
```

- `idx`: Es una variable que mantiene el índice de la imagen actual visible en el carrusel. Inicialmente está en 0, es decir, la primera imagen.
- `interval`: Aquí se establece un intervalo que ejecuta la función `run` cada 2000 milisegundos (2 segundos). Este intervalo automáticamente mueve el carrusel a la siguiente imagen.

## 3. Función `run()`

```javascript
function run() {
    idx++
    changeImage()
}
```

La función `run` incrementa el índice `idx` para pasar a la siguiente imagen y llama a la función `changeImage()` para aplicar el cambio visual en el carrusel.

## 4. Función `changeImage()`

```javascript
function changeImage() {
    if(idx > img.length - 1) {
        idx = 0
    } else if(idx < 0) {
        idx = img.length - 1
    }
    imgs.style.transform = `translateX(${-idx * 500}px)`
}
```

La función `changeImage` se encarga de cambiar la imagen visible en el carrusel:

- **Control de Límites**:
  - Si `idx` es mayor que el índice de la última imagen (`img.length - 1`), se reinicia a 0, volviendo a la primera imagen.
  - Si `idx` es menor que 0, se ajusta al índice de la última imagen, mostrando así la última imagen en el carrusel.

- **Movimiento del Carrusel**:
  - Se aplica una transformación en el eje X (`translateX`) al contenedor `imgs` para desplazarlo horizontalmente y mostrar la imagen correspondiente según el índice `idx`. El valor de desplazamiento es `-idx * 500px`, donde `500px` es el ancho de cada imagen (esto asume que todas las imágenes tienen el mismo ancho).

## 5. Función `resetInterval()`

```javascript
function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 2000)
}
```

Esta función reinicia el intervalo:

- Primero, se detiene el intervalo actual con `clearInterval(interval)`.
- Luego, se reinicia el intervalo con `setInterval(run, 2000)`, lo que asegura que el carrusel continúe moviéndose automáticamente después de una interacción manual (clic en los botones).

## 6. Eventos para los Botones de Navegación

```javascript
rightBtn.addEventListener('click', () => {
    idx++
    changeImage()
    resetInterval()
})

leftBtn.addEventListener('click', () => {
    idx--
    changeImage()
    resetInterval()
})
```

Estos bloques de código añaden funcionalidad a los botones de navegación:

- **Botón Derecho (`rightBtn`)**:
  - Incrementa el índice `idx` para mover el carrusel a la siguiente imagen.
  - Llama a `changeImage()` para actualizar la visualización.
  - Llama a `resetInterval()` para reiniciar el intervalo de desplazamiento automático.

- **Botón Izquierdo (`leftBtn`)**:
  - Decrementa el índice `idx` para mover el carrusel a la imagen anterior.
  - Llama a `changeImage()` para actualizar la visualización.
  - Llama a `resetInterval()` para reiniciar el intervalo de desplazamiento automático.

## 7. Resumen del Flujo

1. **Desplazamiento Automático**: El carrusel se desplaza automáticamente cada 2 segundos, mostrando la siguiente imagen.
2. **Navegación Manual**: Los usuarios pueden hacer clic en los botones de navegación para mover el carrusel hacia la izquierda o la derecha.
3. **Reinicio del Intervalo**: Después de que el usuario navega manualmente, el intervalo de desplazamiento automático se reinicia para continuar desde la nueva posición.
