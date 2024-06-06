# Función setInterval() en JavaScript

La función `setInterval()` es una función incorporada en JavaScript que permite ejecutar repetidamente una función o un fragmento de código a intervalos de tiempo específicos.
## Sintaxis

La sintaxis básica de la función `setInterval()` es la siguiente:

```javascript
var interval = setInterval(función, intervalo);
```

- función: La función que se ejecutará repetidamente.
- intervalo: El tiempo, en milisegundos, entre cada ejecución de la función.
Para detener el bucle llamar a la siguiente funcion
```javascript
clearInterval(interval);
```
