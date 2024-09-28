// cria uma função 
function pesquisar() {
    let section = document.getElementById("resultados-pesquisa"); //Obtem a seção HTML onde os dados serão exibidos

    let campo_pesquisa = document.getElementById("campo-pesquisa").value;
    console.log(campo_pesquisa);

    if (campo_pesquisa == ""){
        section.innerHTML = "<p>Não é permitido procurar espaços vazios</p>"
        return
    };
    if (!campo_pesquisa){
        section.innerHTML = "<p>Resultado não encontrado</p>"
        return
    };
    campo_pesquisa = campo_pesquisa.toLowerCase();
    let resultados = ""; //Incializa uma string vazia para armazenar os resultados
    let titulo = "";
    let descricao = "";
    let tags = "";

    //itera sobre cada dado na lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tag.toLowerCase()
            if (titulo.includes(campo_pesquisa) || descricao.includes(campo_pesquisa) || tags.includes(campo_pesquisa)){
            //o código HTML predefinido é incrementado à variável resultados, que se utiliza de cada dado vindo da lista dados para aparecer no código HTML
            resultados += 
            `
            <div class="item-resultado"
                <p><h2>${dado.titulo}</h2></p>
                <p>${dado.descricao}</p>
                <p><a href=${dado.link} target="_blank"> Link para Foto </a></p>
            </div>
        `;
        }
    }
    //Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}

