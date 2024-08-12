
---

# Explicación del Código JavaScript para Crear Notas Interactivas

Este documento explica un código JavaScript que permite crear, editar, y eliminar notas en una página web. Las notas se almacenan en `localStorage`, lo que permite que persistan entre recargas de la página. Además, el texto de las notas puede ser formateado usando Markdown, gracias a la integración con la biblioteca `marked`.

## Código Completo

```javascript
const addBtn = document.getElementById('add')

const notes = JSON.parse(localStorage.getItem('notes'))

if(notes) {
    notes.forEach(note => addNewNote(note))
}

addBtn.addEventListener('click', () => addNewNote())

function addNewNote(text = ''){
    const note = document.createElement('div');
    note.classList.add('note')
    note.innerHTML = `
    <div class="tools">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>
    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}"></textarea>
    `
    const editBtn = note.querySelector('.edit')
    const deleteBtn = note.querySelector('.delete')
    const main = note.querySelector('.main')
    const textArea = note.querySelector('textarea')

    textArea.value = text
    main.innerHTML = marked(text);

    deleteBtn.addEventListener('click', () => {
        note.remove();
        updateLS();
    })
    editBtn.addEventListener('click', () => {
        main.classList.toggle('hidden')
        textArea.classList.toggle('hidden')
    })

    textArea.addEventListener('input', (e) => {
        const { value } = e.target

        main.innerHTML = marked(value)

        updateLS()
    })

    document.body.appendChild(note)
}

function updateLS() {
    const notesText = document.querySelectorAll('textarea')

    const notes = []

    notesText.forEach(note => notes.push(note.value))

    localStorage.setItem('notes', JSON.stringify(notes))
}
```

## Explicación Detallada

### 1. Selección de Elementos del DOM

```javascript
const addBtn = document.getElementById('add')
```
- **`addBtn`**: Selecciona el botón de "añadir" (`add`) desde el DOM para luego agregarle un evento de clic.

### 2. Recuperación de Notas desde `localStorage`

```javascript
const notes = JSON.parse(localStorage.getItem('notes'))
```
- **`notes`**: Intenta recuperar cualquier nota almacenada previamente en `localStorage`. Como `localStorage` almacena los datos en formato de texto, se utiliza `JSON.parse()` para convertirlo de vuelta a un array de notas.

### 3. Renderizado Inicial de Notas

```javascript
if(notes) {
    notes.forEach(note => addNewNote(note))
}
```
- Si hay notas almacenadas en `localStorage`, cada una se pasa a la función `addNewNote()` para que sean mostradas en la página.

### 4. Evento para Añadir Nuevas Notas

```javascript
addBtn.addEventListener('click', () => addNewNote())
```
- Al hacer clic en el botón de añadir, se llama a `addNewNote()` sin parámetros, lo que crea una nueva nota vacía.

### 5. Función `addNewNote`

```javascript
function addNewNote(text = ''){
    const note = document.createElement('div');
    note.classList.add('note')
    note.innerHTML = `
    <div class="tools">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>
    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}"></textarea>
    `
    const editBtn = note.querySelector('.edit')
    const deleteBtn = note.querySelector('.delete')
    const main = note.querySelector('.main')
    const textArea = note.querySelector('textarea')

    textArea.value = text
    main.innerHTML = marked(text);

    deleteBtn.addEventListener('click', () => {
        note.remove();
        updateLS();
    })
    editBtn.addEventListener('click', () => {
        main.classList.toggle('hidden')
        textArea.classList.toggle('hidden')
    })

    textArea.addEventListener('input', (e) => {
        const { value } = e.target

        main.innerHTML = marked(value)

        updateLS()
    })

    document.body.appendChild(note)
}
```

Esta función crea y maneja las notas individuales. 

- **`text = ''`**: Por defecto, la nota es creada vacía, pero puede recibir texto como parámetro si se desea.
- **Creación del Elemento `note`**: Se crea un elemento `div` con la clase `note` que contendrá la nota.
- **Inner HTML de `note`**: Se construye el contenido de la nota, incluyendo botones para editar y eliminar, un `div` (`main`) para mostrar el contenido convertido de Markdown a HTML, y un `textarea` para la edición de la nota.
- **Botones `edit` y `delete`**: Se añaden listeners para manejar la edición (alternando la visibilidad entre el `div.main` y el `textarea`) y eliminación de la nota.
- **Conversión de Markdown a HTML**: Se utiliza la biblioteca `marked` para convertir el texto del `textarea` a HTML que se muestra en el `div.main`.
- **Actualización de `localStorage`**: Cada vez que se edita el contenido de la nota, se actualiza `localStorage` llamando a `updateLS()`.
- **Añadir la Nota al Documento**: Finalmente, la nota se añade al cuerpo del documento.

### 6. Función `updateLS`

```javascript
function updateLS() {
    const notesText = document.querySelectorAll('textarea')

    const notes = []

    notesText.forEach(note => notes.push(note.value))

    localStorage.setItem('notes', JSON.stringify(notes))
}
```
- **Recuperación del Texto de las Notas**: Selecciona todos los elementos `textarea` de la página y extrae su valor (contenido).
- **Actualización de `localStorage`**: El array de textos de notas se convierte a formato JSON y se almacena en `localStorage` bajo la clave `'notes'`.

## ¿Por Qué Usar `marked`?

`marked` es una biblioteca que convierte texto escrito en Markdown a HTML. Esto es útil porque permite a los usuarios escribir notas con formato sencillo (por ejemplo, títulos, listas, negritas) sin tener que escribir HTML directamente.

- **Markdown a HTML**: Con `marked`, el contenido de las notas puede incluir texto formateado, lo que mejora la presentación visual.
- **Simplicidad para el Usuario**: Los usuarios pueden escribir en Markdown, un formato fácil de aprender y utilizar, y el código se encarga de renderizarlo como HTML en la interfaz.

