# Explicación del Código JavaScript para Control de Rango

Este documento describe el funcionamiento del código JavaScript que permite ajustar y posicionar dinámicamente una etiqueta (`label`) en función del valor de un control de rango (`range`). A continuación, se detalla el propósito y el funcionamiento de cada parte del código.

## Código

```javascript
const range = document.getElementById('range')
range.addEventListener('input', (e) => {
    const value = +e.target.value
    const label = e.target.nextElementSibling
    const range_width = getComputedStyle(e.target).getPropertyValue('width')
    const label_width = getComputedStyle(label).getPropertyValue('width')

    const num_width = +range_width.substring(0, range_width.length - 2)
    const num_label_width = +label_width.substring(0, label_width.length - 2)

    const max = +e.target.max
    const min = +e.target.min
    
    const left = value * (num_width / max) - num_label_width / 2 + scale(value, min, max, 10, -10)

    label.style.left = `${left}px`
    label.innerHTML = value
})

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
```

## Descripción General

Este código permite a un usuario interactuar con un control de rango (`input[type="range"]`) en un formulario web y ver en tiempo real el valor seleccionado a través de una etiqueta (`label`). La posición de esta etiqueta se ajusta dinámicamente para que esté siempre centrada encima del deslizador del rango, proporcionando una mejor experiencia visual.

### Desglose del Código

1. **Obteniendo el Elemento de Rango**

    ```javascript
    const range = document.getElementById('range')
    ```

    - Se selecciona el elemento de entrada de rango (`input`) por su `id` (`range`) y se guarda en la variable `range`.

2. **Añadiendo un Event Listener**

    ```javascript
    range.addEventListener('input', (e) => {
        // Código dentro del Event Listener
    })
    ```

    - Se agrega un event listener al control de rango que escucha el evento `input`. Esto permite ejecutar la función cada vez que el valor del rango cambia, es decir, cuando el usuario mueve el deslizador.

3. **Obteniendo el Valor Actual del Rango**

    ```javascript
    const value = +e.target.value
    ```

    - Se obtiene el valor actual del control de rango y se convierte a un número utilizando el operador `+`. Este valor es almacenado en la variable `value`.

4. **Seleccionando y Calculando Propiedades de Estilo**

    ```javascript
    const label = e.target.nextElementSibling
    const range_width = getComputedStyle(e.target).getPropertyValue('width')
    const label_width = getComputedStyle(label).getPropertyValue('width')
    ```

    - `label` selecciona el siguiente elemento hermano del control de rango, que se asume es la etiqueta (`label`) que muestra el valor.
    - `range_width` y `label_width` almacenan los anchos del control de rango y de la etiqueta, respectivamente, obtenidos mediante `getComputedStyle`.

5. **Conversión de Cadenas de Texto a Números**

    ```javascript
    const num_width = +range_width.substring(0, range_width.length - 2)
    const num_label_width = +label_width.substring(0, label_width.length - 2)
    ```

    - Los valores de ancho de `range_width` y `label_width` están en formato de texto con "px" al final. `substring(0, range_width.length - 2)` elimina "px" y `+` convierte el resultado a un número.

6. **Obteniendo los Valores Máximos y Mínimos del Rango**

    ```javascript
    const max = +e.target.max
    const min = +e.target.min
    ```

    - `max` y `min` almacenan los valores máximo y mínimo permitidos en el control de rango, convertidos a números.

7. **Cálculo de la Posición Horizontal de la Etiqueta**

    ```javascript
    const left = value * (num_width / max) - num_label_width / 2 + scale(value, min, max, 10, -10)
    ```

    - Este cálculo determina la posición en píxeles de la etiqueta para que se centre sobre el deslizador. 
    - `value * (num_width / max)` calcula la posición base de la etiqueta en relación con el valor del rango.
    - `- num_label_width / 2` centra la etiqueta sobre el deslizador.
    - `scale(value, min, max, 10, -10)` ajusta la posición para compensar el tamaño del deslizador en los extremos.

8. **Aplicación del Estilo y Actualización del Contenido**

    ```javascript
    label.style.left = `${left}px`
    label.innerHTML = value
    ```

    - `label.style.left` establece la posición izquierda calculada para la etiqueta.
    - `label.innerHTML` actualiza el contenido de la etiqueta con el valor actual del rango.

9. **Función `scale`**

    ```javascript
    const scale = (num, in_min, in_max, out_min, out_max) => {
        return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }
    ```

    - `scale` es una función que mapea un número (`num`) de un rango (`in_min` a `in_max`) a otro rango (`out_min` a `out_max`). En este contexto, se utiliza para ajustar la posición de la etiqueta a medida que el deslizador se mueve hacia los extremos del rango.

## Resumen

Este código proporciona una manera dinámica y visualmente atractiva de mostrar el valor seleccionado en un control de rango. La etiqueta que muestra el valor se mueve y centra automáticamente sobre el deslizador a medida que el usuario interactúa con el control, ajustándose también para reflejar cambios en los extremos del rango.





### 1. **Estilo Global y Layout del Body**
- **Box-sizing**: Establece `box-sizing: border-box;` para todos los elementos.
- **Body**: Usa un fondo degradado y centra el contenido vertical y horizontalmente con Flexbox.

### 2. **Input Range y Label**
- **Estilo del Slider (`input[type='range']`)**: Personaliza el rango con un ancho fijo, sin outline, y un estilo para el thumb y track.
- **Label asociado al Slider**: Posicionado absolutamente encima del slider con un fondo blanco, bordes redondeados y sombra para mayor visibilidad.

### 3. **Slider Track y Thumb**
- **Track (`::-webkit-slider-runnable-track`)**: Fondo morado, bordes redondeados, altura de 10px.
- **Thumb (`::-webkit-slider-thumb`)**: Circular, blanco, con borde morado, y tamaño ajustado para alinearse correctamente sobre el track.

