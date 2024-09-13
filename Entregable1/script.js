

/*
document.addEventListener("DOMContentLoaded", function() {    
    let contenedor2 = document.getElementById('contenedor2');   
    
    fetch("https://jsonplaceholder.typicode.com/users")

.then(resp => resp.json())
.then(data => {
    data.forEach(user => {
        let card = document.createElement('div'); 
        card.classList.add('card');

        card.innerHTML += `<h4> Codigo Identificador: ${user.id}</h4>
        <h3> Nombre: ${user.name}</h3>
        <h4> Nombre de usuario: ${user.username}</h4>
        <h5> E-mail: ${user.email}</h5>
        <h5> Calle: ${user.address.street}</h5>
        <h5> Número: ${user.address.suite}</h5>
        <h5> Ciudad: ${user.address.city}</h5>
        <h5> Teléfono: ${user.phone}</h5>
        <h5> Sitio Web: ${user.website}</h5>
        <h5> Compañía: ${user.company.name}</h5>`

      
        
        contenedor2.appendChild(card); 
    })
})
.catch(err => console.log(err))
})
*/

// Función asincrónica para consumir la API
async function fetchUsers() {
    const apiURL = 'https://jsonplaceholder.typicode.com/users';
    
    try {
      // Hacer la solicitud a la API usando fetch
      const response = await fetch(apiURL);
      
      // Comprobar si la respuesta es exitosa
      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.status}`);
      }
      
      // Convertir la respuesta en JSON
      const users = await response.json();
      
      // Mostrar los usuarios en consola
      console.log(users);
      
    } catch (error) {
      // Capturar y mostrar cualquier error
      console.error('Error al consumir la API:', error);
    }
  }
  
  // Llamar a la función
  fetchUsers();