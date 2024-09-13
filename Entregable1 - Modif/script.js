


document.addEventListener("DOMContentLoaded", function() {
    let contenedor2 = document.getElementById('contenedor2');

    async function mostrarUsuarios() {
    
    let apiUrl = "https://jsonplaceholder.typicode.com/users";
        
    try {
          let respuesta = await fetch(apiUrl);
          let usuarios = await respuesta.json();

          usuarios.forEach(user => {
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
          
        } catch (error) {
          console.error('Error al consumir la API:', error);
        }
      }    
     
  mostrarUsuarios()
  })