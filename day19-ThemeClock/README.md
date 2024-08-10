
### Función `scale`
[Fuente](https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers)

```javascript
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
```

Esta función `scale` se utiliza para mapear (escalar) un número de un rango de entrada a un rango de salida. En este contexto:

- `num`: Es el número que queremos escalar.
- `in_min` y `in_max`: Son los límites del rango de entrada en el que se encuentra `num`.
- `out_min` y `out_max`: Son los límites del rango de salida al que queremos mapear `num`.

Por ejemplo, en el código:

- `scale(hoursForClock, 0, 11, 0, 360)` se usa para convertir la hora (que va de 0 a 11, ya que se usa `hoursForClock % 12`) en un ángulo de rotación para las horas del reloj, que va de 0 a 360 grados.

- `scale(minutes, 0, 59, 0, 360)` se usa para convertir los minutos (de 0 a 59) en un ángulo de rotación para la manecilla de los minutos, también de 0 a 360 grados.

- `scale(seconds, 0, 59, 0, 360)` hace lo mismo para los segundos.

### Propiedad `transform` para las manecillas del reloj

```javascript
hourElement.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`
minuteElement.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`
secondElement.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`
```

- `translate(-50%, -100%)`: Esto se utiliza para centrar cada manecilla del reloj en su punto de rotación (probablemente el centro del reloj), desplazándola hacia arriba (`-100%` de su altura) y hacia la izquierda (`-50%` de su anchura).

- `rotate(...)`: Aplica una rotación a la manecilla del reloj según el ángulo calculado por la función `scale` para cada unidad de tiempo (horas, minutos, segundos).

