let numero = 30//pode ser cadastrado por ser menor que 50
//let numero = 80 não pode ser cadastrado por ser maior que 50
let numeros =[1,2,3,4,5]

if(numeros.includes(numero)){
    console.log("tem esse número")

}
else{
    console.log("Não tem esse número")
    if(numero>50){
        console.log("Esse número não pode ser cadastrado")
    }
    else{
        console.log("Esse número pode ser cadastrado")
        numeros.push(numero)
        console.log(numeros[5])
    }

}
