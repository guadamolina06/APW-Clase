function renderizarCatalogo (contenedor,productos){
    let productosHTML = ``
    productos.forEach(elemento => {
        productosHTML+=`
           <article>
                    <h3>${elemento.nombre}</h3>
                    <picture>
                        <img src="./recursos/imagenes/productos/correa-perro.jpg" alt="Correa de cuero para perro">
                        <!-- <source media="(min-width: )" srcset="" sizes=""> -->
                    </picture>
                    <p>
                        ${elemento.descripcion}
                    </p>
                    <ul>
                        <li>
                            ${elemento.talle[0]}
                        </li>
                        <li>
                            ${elemento.precio}
                        </li>
                    </ul>
                    <button classs "boton-agregar-producto">Añadir al carro</button>
                </article>
        `
        contenedor.innerHTML=productosHTML
    });
    
}

function filtrarPorTAlle(producto,talle){
    return producto.filter(producto=>{
        return producto.talle.includes(talle.toUpperCase())
    })
}



async function obtenerProductos(url) {
    const respuesta = await fetch(url)
    const datos = await respuesta.json()
    return datos
}
const datosProductos = obtenerProductos("./recursos/datos/productos.json")

export{renderizarCatalogo,filtrarPorTAlle, datosProductos}