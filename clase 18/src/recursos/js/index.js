import { productosMascotas } from "./productos";
import { categoria } from "./productos";
import{ renderizarCatalogo } from "./funcione";
import { filtrarPorTAlle } from "./funcione";


const contenedorProductos = document.getElementById('lolaso')

const filtraTalle = filtrarPorTAlle(productosMascotas,"m")

renderizarCatalogo(contenedorProductos,filtrarPorTAlle)

