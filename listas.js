const filme = [ "rei leão", "homem aranha", "titanic"]

//console.log(filme);pegar toda a lista
//console.log(filme);
///////////////////////////////////////////////////////////
//console.log(filme[0]); um unico elemento 0,1,2
//console.log(filme[0]);
/////////////////////////////////////////////////////////
filme.push("Vingadores")//novos valores para lista,mais de um valor ("Viga","Viga")
console.log("Nova lista",filme);
////////////////////////////////////////////////////////
filme.pop()//tira o valor final da lista
console.log("Nova lista depois do pop",filme)
//////////////////////////////////////////////////////
//Função includes, ela permite eu verificar se existe um valor na lista, junto com if e else
//filme.includes("homem aranha")
//Sistema de busca
//let palavra ="Dragon ball"
let palavra ="homem aranha"
if(filme.includes(palavra)){
    console.log("Seu filme esta aqui:",filme[1])
}
else{
    console.log("Não tem esse filme")
}

