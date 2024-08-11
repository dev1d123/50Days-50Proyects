# Explicación del Código CSS para una Animación Cinética

Este documento explica cómo funciona el código CSS proporcionado, el cual crea una animación cinética utilizando pseudoelementos y animaciones basadas en keyframes. El resultado es un efecto visual dinámico donde dos triángulos parecen girar de manera independiente.

## 1. Estructura del CSS

### 1.1. Selector Universal `*`

```css
* {
    box-sizing: border-box;
}
```

- **`box-sizing: border-box;`**: Este ajuste asegura que el relleno (padding) y el borde (border) de un elemento se incluyan en su tamaño total (`width` y `height`), evitando el aumento inesperado de dimensiones.

### 1.2. Estilos para el `body`

```css
body {
    background-color: #2c3e50;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    overflow: hidden;
    margin: 0;
}
```

- **`background-color: #2c3e50;`**: Establece un fondo oscuro para la página.
- **`display: flex;`** y **`align-items: center; justify-content: center;`**: Centran el contenido tanto vertical como horizontalmente usando flexbox.
- **`height: 100vh;`**: La altura del `body` ocupa el 100% de la altura de la ventana.
- **`overflow: hidden;`**: Evita que cualquier contenido desbordado se muestre (muy útil para la animación).
- **`margin: 0;`**: Elimina cualquier margen predeterminado del `body`.

### 1.3. Clase `.kinetic`

```css
.kinetic {
    position: relative;
    height: 80px;
    width: 80px;
}
```

- **`position: relative;`**: Permite que los pseudoelementos `::before` y `::after` se posicionen absolutamente dentro del `.kinetic`.
- **`height` y `width`:** Fijan el tamaño del contenedor cinético a `80px` por `80px`.

### 1.4. Pseudoelementos `::after` y `::before`

```css
.kinetic::after, .kinetic::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    border: 50px solid transparent;
    border-bottom-color: #fff;
    animation: rotateA 2s linear infinite 0.5s;
}
```

- **`content: '';`**: Necesario para que el pseudoelemento exista.
- **`position: absolute;`**: Permite posicionar los pseudoelementos dentro de `.kinetic` en la esquina superior izquierda.
- **`top: 0; left: 0;`**: Colocan los pseudoelementos en la parte superior izquierda del contenedor.
- **`width: 0; height: 0;`**: Los pseudoelementos no tienen tamaño por sí mismos; se crean usando bordes.
- **`border: 50px solid transparent; border-bottom-color: #fff;`**: Crea un triángulo apuntando hacia abajo al establecer bordes transparentes y un borde inferior blanco.
- **`animation: rotateA 2s linear infinite 0.5s;`**: Asigna una animación de rotación al pseudoelemento.

### 1.5. Pseudoelemento `::before`

```css
.kinetic::before {
    transform: rotate(90deg);
    animation: rotateB 2s linear infinite;
}
```

- **`transform: rotate(90deg);`**: Rota este pseudoelemento 90 grados desde su posición original.
- **`animation: rotateB 2s linear infinite;`**: Asigna una animación diferente a la del pseudoelemento `::after`.

## 2. Animaciones con Keyframes

### 2.1. Animación `rotateA`

```css
@keyframes rotateA {
    0%, 25% {
        transform: rotate(0deg);
    }
    50%, 75% {
        transform: rotate(180deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
```

- **`0%, 25%`**: Comienza sin rotación.
- **`50%, 75%`**: Gira 180 grados a la mitad de la animación.
- **`100%`**: Completa una rotación completa de 360 grados.

### 2.2. Animación `rotateB`

```css
@keyframes rotateB {
    0%, 25% {
        transform: rotate(90deg);
    }
    50%, 75% {
        transform: rotate(270deg);
    }
    100% {
        transform: rotate(450deg);
    }
}
```

- **`0%, 25%`**: Comienza con una rotación de 90 grados.
- **`50%, 75%`**: Rota 180 grados adicionales (total de 270 grados).
- **`100%`**: Completa una rotación de 360 grados desde su punto inicial (450 grados en total).

## 3. Resumen de la Animación

Este código crea una animación donde dos triángulos rotan en un patrón alternado y sincronizado dentro de un contenedor cuadrado. El pseudoelemento `::before` rota a partir de 90 grados, mientras que `::after` rota desde 0 grados, lo que genera un efecto cinético atractivo y continuo. 

