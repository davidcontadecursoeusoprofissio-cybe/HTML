let numero = 30

let numeros =[1,2,3,4,5]

numeros.map(  function(item) {
    if(item==numero){
        console.log("cadastrado")
    }
    else{
        console.log("não cadastrado")
        if(numero>70){
            console.log("Não pode ser cadastrado")
        }
        else{
            numeros.push(numero)
        }
    }
}  )