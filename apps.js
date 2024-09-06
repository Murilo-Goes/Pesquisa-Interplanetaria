

function pesquisar(){

    let section = document.getElementById("resultados-pesquisa");
    console.log(section);
    
    let resultados = ""
    // Variável para acumular o HTML gerado
    let htmlContent = '';
    
    for(let dado of dados) {
        resultados += `
        <div class="item-resultado">
            <h2>
                <a href="${dado.link}" target="_blank">${dado.nome}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
        <a href="${dado.link}" target="_blank"> Abra seu satélite  </a>
        </div>`;
    }
    
    // Após o loop, adicionar o conteúdo HTML ao 'section'
    section.innerHTML = resultados;


}



