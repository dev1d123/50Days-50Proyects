###Explicacion del codigo js

### 1. **Selección de Elementos del DOM**

```javascript
const sliderContainer = document.querySelector('.slider-container');
const slideRight = document.querySelector('.right-slide');
const slideLeft = document.querySelector('.left-slide');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const slidesLength = slideRight.querySelectorAll('div').length;
```

- **`sliderContainer`**: El contenedor principal que alberga todo el slider.
- **`slideRight`**: El contenedor que mueve las diapositivas hacia arriba.
- **`slideLeft`**: El contenedor que mueve las diapositivas hacia abajo.
- **`upButton`** y **`downButton`**: Botones para cambiar las diapositivas hacia arriba y hacia abajo.
- **`slidesLength`**: Número total de diapositivas en el slider, calculado contando los `<div>` dentro de `slideRight`.

### 2. **Configuración Inicial**

```javascript
let activeSlideIndex = 0;
slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`
```

- **`activeSlideIndex`**: Índice de la diapositiva actualmente activa, inicialmente configurado en `0`.
- **`slideLeft.style.top`**: Se ajusta la posición superior de `slideLeft` para que la primera diapositiva se ubique fuera de la vista inicial. Esto se hace moviendo el contenedor hacia arriba por la altura total de las diapositivas menos una (`(slidesLength - 1) * 100vh`), para preparar el slider para el primer desplazamiento.

### 3. **Asignación de Eventos a los Botones**

```javascript
upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));
```

- Se agregan eventos de clic a los botones que llaman a la función `changeSlide` con el parámetro `'up'` o `'down'`, dependiendo del botón presionado.

### 4. **Función `changeSlide`**

```javascript
const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight;
    
    if(direction === 'up'){
        activeSlideIndex++;
        if(activeSlideIndex > slidesLength - 1){
            activeSlideIndex = 0;
        }
    }else if(direction === 'down'){
        activeSlideIndex--;
        if(activeSlideIndex < 0){
            activeSlideIndex = slidesLength - 1;
        }
    }

    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}
```

- **`sliderHeight`**: Se obtiene la altura del contenedor del slider para calcular el desplazamiento de las diapositivas.

- **Cambio de Diapositiva**:
  - Si `direction` es `'up'`:
    - Se incrementa `activeSlideIndex` para pasar a la siguiente diapositiva.
    - Si `activeSlideIndex` supera el índice máximo (`slidesLength - 1`), se reinicia a `0` para hacer un ciclo infinito.
  - Si `direction` es `'down'`:
    - Se decrementa `activeSlideIndex` para volver a la diapositiva anterior.
    - Si `activeSlideIndex` es menor que `0`, se ajusta a `slidesLength - 1` para volver a la última diapositiva en un ciclo infinito.

- **Aplicación de Transformaciones**:
  - **`slideRight.style.transform`**: Se aplica una transformación para desplazar el contenedor hacia arriba (`translateY`) en función del índice activo, moviendo la diapositiva actual fuera de la vista superior.
  - **`slideLeft.style.transform`**: Se aplica una transformación para desplazar el contenedor hacia abajo (`translateY`) en función del índice activo, moviendo la diapositiva actual fuera de la vista inferior.


