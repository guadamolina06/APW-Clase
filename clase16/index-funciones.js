//OPeraciones sobre arreglos
//const numeros = [5,6,3,5,1,4]
/*
 numeros.forEach((elemento)=>{
   console.log(elemento)
 })
 */ 
/*const NumMasUno = [] 
 numeros.forEach((numero)=>{
   NumMasUno.push(numero+1)
  
 })
  console.log(NumMasUno)*/
  
//onst numMasUno = numeros.map((numero)=>{
   // return numero + 1
//})
//console.log(numMasUno)
//filter /find
/*

const suma = (num1,num2)=>{
  
  if(typeof num1 === 'string'  || typeof num2=== 'string'){
    console.log("No se puede debe ingresar numero")
  }
  else{
    let resultado = num1+num2
    console.log(`La suma es ${resultado}`) 
  }
  
  
}
const resta= (a,b)=>{
  
 if(typeof a === 'string' || typeof b === 'string'){
    console.log("No se puede debe ingresar numero")
  }
  else{
   let resultado = a-b 
  console.log(`La resta es ${resultado}`)
  }
  
}

const operacion = (n1,n2,Callback)=>{
  Callback(n1,n2)
}

operacion(5,"l",suma)
operacion(5,"l", resta)
*/

const multiplicacion = (num1,num2)=>{
  let resultado = num1*num2
  console.log(`El resultado de la multiplicacion en ${resultado}`)
}
const division = (num1,num2)=>{
  let resultado = num1 / num2
  console.log(`El resultado de la division es ${resultado}`)
}

const calculadora=(n1,n2,cb)=>{
  cb(n1,n2)
}

calculadora(5,5,multiplicacion)
calculadora(5,5,division)


const ponerMayuscula = String=>{
    console.log(`${String}`.toUpperCase())
}

const minuscula = String=>{
  console.log(`${String}`.toLowerCase())
}

const procesardato =(String, cb)=>{
  cb(String)
}

procesardato("Guada",ponerMayuscula)
procesardato('guaDa', minuscula)
 
 