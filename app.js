function pesquisa() {
    // Seleciona a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    campoPesquisa = campoPesquisa.toLowerCase();
    if(campoPesquisa == ""){
      section.innerHTML = "<p>Busca vazia. Nenhuma doença foi encontrada</p>"
      return;
    }
    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";
    let nome = "";
    let descricao = "";
    let sintomas = "";
    let tratamento = "";
    let fatores = "";
    let tags = "";

    // Itera sobre cada elemento do array 'dados' (assumindo que 'dados' seja um array de objetos com as propriedades 'nome', 'descricao', 'sintomas' e 'link')
    for (let dado of dados) {
      nome = dado.nome.toLowerCase();
      descricao = dado.descricao.toLowerCase();
      sintomas = dado.sintomas.toLowerCase();
      tratamento = dado.tratamento.toLowerCase();
      fatores = dado.fatoresDeRisco.toLowerCase();
      tags = dado.tags.toLowerCase();

      if(nome.includes(campoPesquisa) || descricao.includes(campoPesquisa) || sintomas.includes(campoPesquisa) || tratamento.includes(campoPesquisa) || fatores.includes(campoPesquisa) || tags.includes(campoPesquisa)){
        // Concatena HTML formatado para cada elemento, criando uma div com as informações da doença
        resultados += `
          <div class="item-resultado">
            <h2><a href=${dado.link2} target="_blank">${dado.nome}</a></h2> 
            <p class="descricao-meta">${dado.descricao}</p> 
            <p class="descricao-meta">${dado.sintomas}</p>
            <p class="descricao-meta">${dado.fatoresDeRisco}</p>
            <p class="descricao-meta">${dado.tratamento}</p>
            <a href=${dado.link} target="_blank">Saiba mais</a> 
          </div>
        `;
      }
    }
    if(!resultados){
      resultados = "<p>Nenhuma doença foi encontrada</p>"
    }
    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados;
  }
