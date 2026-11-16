async function carregar() {
    //Na linha de baixo estou acessando a api e trazendo os dados brutos
    const resposta = await fetch("https://api.tvmaze.com/shows");
    //Na linha de baixo estou trazendo os dados e formatando/organizando com o json
    const dados = await resposta.json();
    //Na linha de baixo eu estou usado o console.log para mostrar na tela as informações

    console.log(dados);
}
carregar() 