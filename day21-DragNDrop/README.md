# Implementación de Drag and Drop en JavaScript

Este documento explica cómo implementar la funcionalidad de "Drag and Drop" (Arrastrar y Soltar) utilizando JavaScript, HTML y CSS. El código proporcionado permite arrastrar un elemento desde una ubicación y soltarlo en otra.

## 1. Estructura HTML

En primer lugar, necesitamos definir la estructura básica en HTML. El código HTML que podría utilizarse para implementar este ejemplo es el siguiente:

```html
<div class="empty"></div>
<div class="empty"></div>
<div class="empty"></div>
<div class="empty"></div>
<div class="empty"></div>

<div class="fill" draggable="true"></div>
```

### Descripción:

- **`.fill`**: Es el elemento que se puede arrastrar. Tiene el atributo `draggable="true"`, lo que permite que sea arrastrado.
- **`.empty`**: Son los contenedores donde se puede soltar el elemento arrastrado.

## 2. Estilos CSS

Para visualizar correctamente los elementos y sus estados durante la operación de "Drag and Drop", es útil definir algunos estilos CSS. A continuación, se muestra un ejemplo de cómo podrían verse estos estilos:

```css
.empty {
    width: 200px;
    height: 200px;
    border: 2px dashed #ccc;
    margin: 10px;
    display: inline-block;
}

.fill {
    width: 200px;
    height: 200px;
    background-color: #f0f;
    cursor: pointer;
}

.hold {
    border: solid 3px #000;
}

.invisible {
    display: none;
}

.hovered {
    background-color: #f4f4f4;
    border: dashed 3px #000;
}
```

### Descripción:

- **`.empty`**: Define el estilo de los contenedores vacíos, con bordes y un tamaño específico.
- **`.fill`**: Define el estilo del elemento que se puede arrastrar.
- **`.hold`**: Se aplica cuando el elemento está siendo arrastrado.
- **`.invisible`**: Oculta el elemento mientras se arrastra (opcional).
- **`.hovered`**: Se aplica a los contenedores cuando el elemento arrastrado está sobre ellos.

## 3. Código JavaScript

El siguiente código JavaScript se encarga de manejar los eventos de "Drag and Drop":

```javascript
const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

for(const empty of empties){
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}

function dragStart() {
    this.className += ' hold';
    setTimeout(() => this.className = 'invisible', 0);
}

function dragEnd() {
    this.className = 'fill';
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
    this.className += ' hovered';
}

function dragLeave() {
    this.className = 'empty';
}

function dragDrop() {
    this.className = 'empty';
    this.append(fill);
}
```

### Descripción:

1. **Seleccionar elementos:**
   ```javascript
   const fill = document.querySelector('.fill');
   const empties = document.querySelectorAll('.empty');
   ```
   - `fill`: Selecciona el elemento que se puede arrastrar.
   - `empties`: Selecciona todos los contenedores vacíos donde se puede soltar el elemento.

2. **Eventos del elemento arrastrable (`fill`):**
   - `dragstart`: Se activa cuando se comienza a arrastrar el elemento.
   - `dragend`: Se activa cuando se suelta el elemento arrastrado.

3. **Eventos de los contenedores (`empties`):**
   - `dragover`: Permite que el contenedor reciba el elemento arrastrado.
   - `dragenter`: Se activa cuando el elemento arrastrado entra en el contenedor.
   - `dragleave`: Se activa cuando el elemento arrastrado sale del contenedor.
   - `drop`: Se activa cuando el elemento es soltado en el contenedor.

4. **Funciones:**
   - **`dragStart()`**: Añade la clase `hold` al elemento arrastrado y lo hace invisible usando un `setTimeout` para permitir que la clase `hold` se aplique primero.
   - **`dragEnd()`**: Restaura la clase original del elemento arrastrado.
   - **`dragOver(e)`**: Previene el comportamiento por defecto, permitiendo que el elemento se pueda soltar en el contenedor.
   - **`dragEnter(e)`**: Añade la clase `hovered` al contenedor cuando el elemento arrastrado entra en él.
   - **`dragLeave()`**: Restaura la clase `empty` del contenedor cuando el elemento arrastrado lo deja.
   - **`dragDrop()`**: Restaura la clase `empty` y añade el elemento arrastrado al contenedor.

## 4. Conclusión

La funcionalidad de "Drag and Drop" es una característica útil en la interfaz de usuario que permite a los usuarios interactuar con elementos de una manera intuitiva. Con un conocimiento básico de HTML, CSS y JavaScript, se puede implementar fácilmente en una aplicación web.

Este ejemplo básico te ayudará a comprender cómo funcionan los eventos de "Drag and Drop" y cómo puedes personalizar esta funcionalidad para que se adapte a tus necesidades.