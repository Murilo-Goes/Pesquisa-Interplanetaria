

function pesquisar(){

    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("search-input").value;
    if (campoPesquisa == ""){
        section.innerHTML = "<p> Planeta não encontrado! Deve estar em outra dimensão!</p>" 
        return
    }
    campoPesquisa = campoPesquisa.toLowerCase();
  
    
    let resultados = ""
    let nome = ""
    let descricao = ""    // Variável para acumular o HTML gerado
   
    
    for(let dado of dados) {
        titulo = dado.nome.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        if(nome.includes(campoPesquisa)||descricao.includes(campoPesquisa)) {
        resultados += `
        <div class="item-resultado">
            <h2>
                <a href="#" target="_blank">${dado.nome}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
        <a href="${dado.link}" target="_blank"> Manuscritos da Nasa  </a>
        </div>`;
    
        }
    // Após o loop, adicionar o conteúdo HTML ao 'section'
    }
    if(!resultados) {
        resultados = "<p>Resultado não encontrado! Parece que está escrito em linguagem alienígena.</p>"
    

    }


section.innerHTML = resultados;
}