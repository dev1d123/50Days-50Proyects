# Explicación del Código

Este documento proporciona una explicación detallada del código JavaScript provisto, el cual interactúa con la API de GitHub para obtener y mostrar información de un usuario específico en GitHub, junto con sus repositorios públicos más recientes.

## Descripción General

El código es una aplicación sencilla que realiza lo siguiente:
1. Captura el nombre de usuario de GitHub desde un formulario de búsqueda.
2. Hace una solicitud a la API de GitHub para obtener información del usuario.
3. Si el usuario existe, se muestra su perfil y una lista de sus cinco repositorios públicos más recientes.
4. Si no se encuentra el usuario, se muestra un mensaje de error.

### Estructura del Código

1. **Variables Principales**:
    - `APIURL`: Almacena la URL base de la API de GitHub para obtener la información de los usuarios.
    - `main`, `form`, `search`: Referencias a los elementos del DOM correspondientes al contenedor principal, al formulario y al campo de búsqueda respectivamente.

2. **Funciones Asíncronas**:
    - `getUser(username)`: Esta función realiza una solicitud asíncrona a la API de GitHub para obtener la información del usuario. Si la solicitud es exitosa, se llama a `createUserCard` para crear la tarjeta de usuario y a `getRepos` para obtener los repositorios del usuario. Si hay un error (por ejemplo, si el usuario no existe), se llama a `createErrorCard` para mostrar un mensaje de error.

    - `getRepos(username)`: Esta función realiza otra solicitud asíncrona a la API para obtener los repositorios del usuario. Los primeros cinco repositorios se añaden a la tarjeta del usuario utilizando la función `addReposToCard`.

3. **Funciones de Renderizado**:
    - `createUserCard(user)`: Crea el HTML para mostrar la tarjeta de usuario, incluyendo su imagen, nombre de usuario, enlace al perfil, y un breve resumen de seguidores, seguidos y repositorios públicos.
    
    - `createErrorCard(msg)`: Crea una tarjeta simple que muestra un mensaje de error.
    
    - `addReposToCard(repos)`: Añade los repositorios del usuario a la tarjeta de perfil. Solo se muestran los primeros cinco repositorios.

4. **Manejo de Eventos**:
    - Se añade un event listener al formulario para manejar el evento `submit`. Cuando el formulario es enviado, se previene la acción por defecto, se obtiene el valor ingresado en el campo de búsqueda, y si no está vacío, se llama a la función `getUser` con el nombre de usuario ingresado.

## Fetch vs Axios

### **Fetch API**
La `Fetch API` es una interfaz nativa de JavaScript que permite realizar solicitudes HTTP. Es moderna, basada en promesas, y soportada por la mayoría de los navegadores modernos. Sin embargo, tiene algunas limitaciones:
- No maneja automáticamente las respuestas JSON; el desarrollador debe invocar explícitamente el método `.json()` en la respuesta.
- No maneja los errores de una manera tan intuitiva como Axios; solo rechaza la promesa si hay un problema de red, no si el servidor devuelve un código de estado de error como 404.
- No incluye ciertas características avanzadas que se encuentran en Axios, como la cancelación de solicitudes, interceptores, y transformaciones de datos.

### **Axios**
`Axios` es una biblioteca popular para realizar solicitudes HTTP que mejora sobre la `Fetch API` de varias maneras:
- **Transformación Automática**: Axios transforma automáticamente las respuestas JSON sin necesidad de llamar a `.json()`.
- **Manejo de Errores**: Axios maneja los errores de manera más consistente, rechazando la promesa tanto en errores de red como en errores HTTP.
- **Intercepción de Solicitudes y Respuestas**: Axios permite la creación de interceptores, lo que permite modificar las solicitudes o respuestas antes de que lleguen al código de la aplicación.
- **Cancelación de Solicitudes**: Axios permite la cancelación de solicitudes, lo cual es útil en aplicaciones donde la respuesta puede llegar demasiado tarde o ya no ser necesaria.

### **¿Por Qué Usar Axios?**
En este código, se ha utilizado Axios principalmente por su simplicidad y manejo eficiente de errores. Además, la transformación automática de respuestas y las características adicionales, como los interceptores y la cancelación de solicitudes, hacen que Axios sea una opción preferida en muchas aplicaciones web.

## Código Rescrito con Fetch

```javascript
const APIURL = 'https://api.github.com/users/';

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

async function getUser(username) {
    try{
        const response = await fetch(APIURL + username)
        if (!response.ok) {
            throw new Error('No profile with this username');
        }
        const data = await response.json();
        createUserCard(data);
        getRepos(username);
    } catch(err) {
        createErrorCard(err.message);
    }
}

function createUserCard(user){
    const cardHTML = `
    <div class="card">
    <div>
      <img src="${user.avatar_url}" alt="${user.login}" class="avatar">
    </div>
    <div class="user-info">
      <h2>${user.login}</h2>
      <p>${user.html_url}</p>
      <ul>
        <li>${user.followers} <strong>Followers</strong></li>
        <li>${user.following} <strong>Following</strong></li>
        <li>${user.public_repos} <strong>Repos</strong></li>
      </ul>

      <div id="repos"></div>
    </div>
  </div>
    `
    main.innerHTML = cardHTML
}

function createErrorCard(msg) {
    const cardHTML = `
        <div class="card">
            <h1>${msg}</h1>
        </div>
    `

    main.innerHTML = cardHTML
}

function addReposToCard(repos) {
    const reposEl = document.getElementById('repos')

    repos
        .slice(0, 5)
        .forEach(repo => {
            const repoEl = document.createElement('a')
            repoEl.classList.add('repo')
            repoEl.href = repo.html_url
            repoEl.target = '_blank'
            repoEl.innerText = repo.name

            reposEl.appendChild(repoEl)
        })
}

async function getRepos(username) {
    try {
        const response = await fetch(APIURL + username + '/repos?sort=created')
        if (!response.ok) {
            throw new Error('Problem fetching repos');
        }
        const data = await response.json();
        addReposToCard(data);
    } catch(err) {
        createErrorCard(err.message);
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const user = search.value

    if(user) {
        getUser(user)

        search.value = ''
    }
})
```

### Notas sobre la Conversión

- **Transformación de Respuestas**: Con `fetch`, debemos utilizar `response.json()` para transformar la respuesta en JSON.
- **Manejo de Errores**: Se utiliza un chequeo adicional con `response.ok` para verificar si la respuesta fue exitosa, y se lanza un error manualmente si no lo fue.

Ambas versiones del código son funcionales, pero la versión con Axios puede ser preferida por su manejo más sencillo de las solicitudes HTTP y características avanzadas.