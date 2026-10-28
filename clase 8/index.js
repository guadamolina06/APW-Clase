/*
function evaluarnota (nota){
    if(nota>9){
        return "Aprobado sobresaliente" 
    }else if(nota<9 & nota>6){
        return "Aprobado normal"
    }
    else{
           return "Desaprobado"
    }
} 


console.log(evaluarnota(8))
console.log(evaluarnota(3))
console.log(evaluarnota(10))

*/
/*
const number =[20,1,7,16]
const mayorA10 = number.filter(number=>  number > 10)
const pordos = number.map(number=> number*2)
 

console.log(mayorA10)
console.log(pordos)*/


///Lsta de precios con inflacion
/*
const precios =  [200,400,560,856,410]
const precioInfla = precios.map(precios=> precios+(precios*0.20))

console.log(precioInfla)


const stock = [3,0,6,0,5,0,0,4]
const stockDisp = stock.filter(stock=> stock>0)

console.log(stockDisp)*/
/*
const estudiante ={
    nombre: "juan",
    materia: "Geografia",
    nota: 10

}

let nota = estudiante.nota
function evaluar (nota) {
    if(nota>9){
        return "Aprobo con sobresaliente"
    }
    else if (nota<9&nota>4){
        return "Aprobo "
    }
    else{
        return "Desaprobado"
    }
}
console.log(`El estudiante ${estudiante.nombre} cursa ${estudiante.materia} y`, evaluar(nota))*/

/*const carrito = [
    { nombre: "Mouse", precio: 5000, disponible: true },
    { nombre: "Monitor", precio: 45000, disponible: false },
    { nombre: "Auriculares", precio: 12000, disponible: true },
    { nombre: "Gabinete", precio: 25000, disponible: false }
];
const stock = carrito.filter(carrito => {
    if(carrito.disponible!= true){
        console.log(`Los productos con stock son ${carrito.nombre}`)
    }} )*/

/*
const pelicula ={
    nombre:"la mamadera",
    anio: 2025,
    director: "Juan Pablo",
    vista: true
}
if (pelicula.vista==true){
    console.log(`si vio la pelicula${pelicula.nombre}`)
}
else{
    console.log(`No vio la pelicula${pelicula.nombre}`)
}

const juegos = [
    { titulo: "Minecraft", precio: 4000 },
    { titulo: "FIFA", precio: 25000 },
    { titulo: "The Sims", precio: 10000 }
];

const juegosConDescuento = juegos.map(juegos =>{

    return{
        titulo : juegos.titulo,
        precio: juegos.precio = juegos.precio - juegos.precio * 0.50}
    })
console.log(juegosConDescuento)
*/

const tareas = [
    { descripcion: "Estudiar JavaScript", completada: true },
    { descripcion: "Hacer tp de Sistemas", completada: false },
    { descripcion: "Pasear a la gata", completada: true },
    { descripcion: "Comprar pan", completada: false }
];


const tareaPendiente = tareas.filter(tareas =>  !tareas.completada)


console.log(tareaPendiente )