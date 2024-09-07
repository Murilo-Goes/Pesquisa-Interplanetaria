

function pesquisar(){

    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("search-input").value;
    if (campoPesquisa == ""){
        section.innerHTML = "<p> Planeta não encontrado! Deve estar em outra dimensão!</p>" 
        return
    }
  
    
    let resultados = ""
    // Variável para acumular o HTML gerado
    let htmlContent = '';
    
    for(let dado of dados) {
        if(dado.nome.includes(campoPesquisa)||dado.nome.includes(campoPesquisa)) {
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


section.innerHTML = resultados;
}