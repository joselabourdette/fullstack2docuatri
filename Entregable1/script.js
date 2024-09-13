


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

        /*       
  
        let h4 = document.createElement('h4'); 
        h4.classList.add('nombreProducto'); 
        h4.textContent = producto; 
  
        let pPrecio = document.createElement('p'); 
        pPrecio.innerHTML = `$ <span class="precioProducto">${arrPrecios[i]}</span>`; 
  
        let h6 = document.createElement('h6'); 
        h6.innerHTML = `Stock disponible <span class="stockDisponible">${arrStock[i]}</span> u.`; 
  
        let pCantidad = document.createElement('p'); 
        pCantidad.innerHTML = `Cantidad: <input type="number" name="cant" id="cant${i}" min="0" value="0">`;
  
        */ 
  
        
        contenedor2.appendChild(card); 
    })
})
.catch(err => console.log(err))
})