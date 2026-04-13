document.addEventListener("DOMContentLoaded", () => {

    const projetos = [
        {
            nome: "Calculadora Web",
            descricao: "Projeto desenvolvido com HTML, CSS e JavaScript. Realiza operações matemáticas básicas com interface responsiva e manipulação do DOM.",
            link: "https://github.com/Civaldo/calculadora"
        },
        {
            nome: "Site Escolar Responsivo",
            descricao: "Site institucional desenvolvido com HTML e CSS, utilizando Flexbox e Media Queries para responsividade em diferentes dispositivos.",
            link: "https://github.com/Civaldo/site-escolar"
        },
        {
            nome: "Lista de Tarefas (To Do List)",
            descricao: "Aplicação interativa em JavaScript para gerenciamento de tarefas com adicionar, concluir e remover itens dinamicamente.",
            link: "https://github.com/Civaldo/todo-list"
        }
    ];

    const container = document.getElementById("lista-projetos");

    if (!container) return;

    container.innerHTML = "";

    const fragment = document.createDocumentFragment();

    projetos.forEach(projeto => {

        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <h3>${projeto.nome}</h3>
            <p>${projeto.descricao}</p>
            <a href="${projeto.link}" target="_blank">🔗 Ver projeto</a>
        `;

        fragment.appendChild(card);
    });

    container.appendChild(fragment);

});
