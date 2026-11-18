let url = "https://www.thesportsdb.com/api/v1/json/123/search_all_teams.php?l=Brazilian%20Serie%20A"



async function Buscatime(){
    const resposta = await fetch(url)
    const dados = await resposta.json()

    dados.teams.map(function(time){
        console.log(time.strTeam)
        console.log(time.strLeague)
        console.log(time.strLeague4)


    })
}
Buscatime()
//api que começa com obseto {}

























//let url = "https://www.thesportsdb.com/api/v1/json/123/search_all_teams.php?l=Brazilian%20Serie%20A"



//async function Buscatime(){
    //const resposta = await fetch(url)
    //const dados = await resposta.json()

    //dados.map(function(time){
        //console.log(dados);


    //})
//}
//api que começa com lista[]