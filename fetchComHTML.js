//este codigo selecionar um elemento html
const container = document.getElementById("caixa")


async function Buscaseries(){
    const resposta = await fetch("https://api.tvmaze.com/shows")
    const dados = await resposta.json()

    const card = dados.map(function(item){
        //Aqui eu vou escreve a ação para cada item
        return `
        <div>
        <h1>Nome da Serie:${item.name}</h1>
        <p>Sinopse da serie:${item.summary}</p> 
        <p>Tempo da serie:${item.schedule.time}</p> 
        <p>Data da serie:${item.premiered}</p>
        <p>Idioma da serie:${item.language}</p>     
        </div>    
        `
    })
    container.innerHTML = card.join("")
}
Buscaseries()




//obseto dentro do outro, não uma lista dentro da outra
//<p>Tempo da serie:${item.schedule.time}</p> 






