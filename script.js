const projetos = [
    {
        nome: "Calculadora",
        descricao: "Projeto simples feito com JavaScript"
    },
    {
        nome: "Site Escolar",
        descricao: "Desenvolvido com HTML e CSS responsivo"
    },
    {
        nome: "Lista de Tarefas",
        descricao: "Aplicação interativa com JavaScript"
    }
];

// função responsável por criar um card
function criarCard(projeto) {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <h3>${projeto.nome}</h3>
        <p>${projeto.descricao}</p>
        <button class="btn">Ver mais</button>
    `;

    return card;
}

// função responsável por renderizar tudo
function renderizarProjetos(lista) {
    const container = document.getElementById("lista-projetos");

    if (!container) {
        console.error("Container #lista-projetos não encontrado");
        return;
    }

    const fragment = document.createDocumentFragment();

    lista.forEach(projeto => {
        fragment.appendChild(criarCard(projeto));
    });

    container.appendChild(fragment);
}

// inicialização
renderizarProjetos(projetos);
