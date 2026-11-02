///import { productosMascotas,categoria  } from "./productos.js";
import{ renderizarCatalogo ,filtrarPorTAlle, datosProductos} from "./funcione.js";


const datosProductos = productosMascotas
const contenedorProductos = document.getElementById("productos-catalogo")

const btnEvento = document.getElementById("boton-evento")
const filtraTalle = filtrarPorTAlle(productosMascotas,"m")
const dialogo = document.getElementById("dialog")

renderizarCatalogo(contenedorProductos,filtraTalle)

//Eventos
btnEvento.addEventListener("click", (evento)=>{
    dialogo.show()
    dialogo.showModal()
    //console.log(evento)
})

//Aplica a todos los botones
const botonesProd = contenedorProductos.querySelectorAll(".boton-agregar-producto")
console.log(botonesProd)

botonesProd.forEach((boton)=>{
 boton.addEventListener("click", (evento)=>{
    
 })
})
