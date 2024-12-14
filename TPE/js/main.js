let lista = document.getElementById("lista");
let totalText = document.getElementById("totalText");

const productos = [
    { nombre: "Yoga inicial", precio: 15000, stock: 5, imagen:"imagenes/Lotus moon contorno.JPG"},
    { nombre: "Yoga intermedio", precio: 15000, stock: 5,imagen:"imagenes/Lotus moon contorno.JPG"},
    { nombre: "Yoga avanzado", precio: 15000, stock: 5, imagen:"imagenes/Lotus moon contorno.JPG"},
    { nombre: "Mindfulness", precio: 20000, stock: 5, imagen:"imagenes/Lotus moon contorno.JPG"}
    
]
function pintarProductos(arrayProductos) {
    for (let i = 0; i < arrayProductos.length; i++) {
        lista.innerHTML += `<li class="tarjeta">
         <img src="${arrayProductos[i].imagen}">
         <p> Curso: ${arrayProductos[i].nombre}</p>  
         <p> Valor: $${arrayProductos[i].precio} </p>
         <input type="number" id="stock${i}" value="${arrayProductos[i].stock}" readonly>
         <input type="number" id="entrada${i}" placeholder="Ingrese cantidad">
         <button id="btn${i}">Adquirir</button>
        </li>`;
    }
    for (let i = 0; i < arrayProductos.length; i++) {
        document.getElementById(`btn${i}`).addEventListener("click", () => {
            comprar(i);
        });
    }
}



let total = 0;

function comprar(contacto) {
    const stockElement = document.getElementById(`stock${contacto}`);
    const entradaElement = document.getElementById(`entrada${contacto}`); 
    const stock = parseInt(stockElement.value);
    const cantidad = parseInt(entradaElement.value);
    const precio = productos[contacto].precio;

    if (cantidad > 0 && cantidad <= stock) {
        total += cantidad * precio;
        totalText.innerHTML = `Inversion: $${total}`;
        stockElement.value = stock - cantidad;
        alert(`Compra realizada exitosamente. Total: $${total}`);
    } else {
        alert('Cantidad no valida. Debe ser mayor que 0 y menor o igual al stock.');
    }
}

pintarProductos(productos);
comprar(contacto)

function validar () {

    var nombre, apellido, email, telefono;
    nombre= document.getElementById("nombre").value;
    apellido= document.getElementById("apellido").value;
    email= document.getElementById("email").value;
    telefono= document.getElementById("telefono").value;
    expresion=/\w+\.+[a-z]/;

    if(nombre === "" || apellido === "" || email === ""|| telefono === ""  ){
    alert("Todos los campos son obligatorios");
    return false;
    }
    
    else if(nombre.length>30) {
        alert("El nombre es muy extenso");
        return false;
    }
    else if(apellido.length>30) {
        alert("El apellido es muy extenso");
        return false;
    }
    else if(email.length>40) {
        alert("El E-mail es muy extenso");
        return false;
    }
    else if(!expresion.test(email)){
        alert("El correo no es valido")
    }

    else if(telefono.length>15) {
        alert("El telefono es muy extenso");
        return false;
    }
    else if(isNaN(telefono)) {
        alert("El telefono deben ser numeros");
        return false;
    }

    
}



let captcha;
let alphabets = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
console.log(alphabets.length);
let status = document.getElementById('status');
status.innerText = "Generador de codigo";

 generate = () => {
// console.log(status)
let first = alphabets[Math.floor(Math.random() * alphabets.length)];
let second = Math.floor(Math.random() * 10);
let third = Math.floor(Math.random() * 10);
let fourth = alphabets[Math.floor(Math.random() * alphabets.length)];
let fifth = alphabets[Math.floor(Math.random() * alphabets.length)];
let sixth = Math.floor(Math.random() * 10);
captcha = first.toString()+second.toString()+third.toString()+fourth.toString()+fifth.toString()+sixth.toString();
console.log(captcha);
document.getElementById('generated-captcha').value = captcha;
document.getElementById("entered-captcha").value = '';
status.innerText = "Generador de codigo"
}

 check = () => {
let userValue = document.getElementById("entered-captcha").value;
console.log(captcha);
console.log(userValue);
if(userValue == captcha){
    status.innerText = "Correcto!!"
}else{
    status.innerText = "Prueba de nuevo!!"
    document.getElementById("entered-captcha").value = '';
}
}