const personas=[
    {
        nombre: "Matias",
        edad: 25
    },
    {
        nombre: "Juan",
        edad: 22
    },
    {
        nombre: "Jose",
        edad: 55
    }
]

//metodos de funcines
//(identificador)=>{} se debe respetar el nombre del identificador en el concole.log
//forEach -> No me devuelve nada o seaa que si o si se tiene que usaar el consolelog
//personas.forEach(() =>{

//})

//map-> devuelve un arreglo nuevo
// const nuevo = personas.map((perso,indice,arreglo)=>{
    // return {
        // ...perso, //spread 
        // edad: perso.edad + 1
    // }
// })
// console.log(nuevo)
//filter -> tambien devienve un arreglo
// const nuevo = personas.filter((perso,indice,arreglo)=>{
//     return perso.edad > 30

// })
// console.log(nuevo)
//find -> devuelve un elemento
//personas.find()
const nuevo = personas.find((perso,indice,arreglo)=>{
    return perso.edad > 30

})
console.log(nuevo)
