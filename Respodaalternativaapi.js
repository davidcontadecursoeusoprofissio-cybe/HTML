let url = "https://www.thesportsdb.com/api/v1/json/123/search_all_teams.php?l=Brazilian%20Serie%20A"



async function Buscatime(){

    try{
            const resposta = await fetch(url)
    const dados = await resposta.json()

    dados.teams.map(function(time){
        console.log(time.strTeam)
        console.log(time.strLeague)
        console.log(time.strLeague4)


    })

    }
    catch{
        console.log("API fora do ar")
    }

}
Buscatime()
//api que começa com obseto {} dados.teams.map = isss teams é da api= teams 
//[] dados.map que começa com lista

//try pode usar catch






















//let url = "https://www.thesportsdb.com/api/v1/json/123/search_all_teams.php?l=Brazilian%20Serie%20A"



//async function Buscatime(){
    //const resposta = await fetch(url)
    //const dados = await resposta.json()

    //dados.map(function(time){
        //console.log(dados);


    //})
//}
//api que começa com lista[]