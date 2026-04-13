document.addEventListener("DOMContentLoaded", () => {

    const projetos = [
        {
            nome: "Calculadora Web",
            descricao: "Projeto desenvolvido com HTML, CSS e JavaScript. Realiza operações matemáticas básicas com interface responsiva e lógica de validação.",
            link: "https://github.com/CivaldoSilva/calculadora"
        },
        {
            nome: "Site Escolar Responsivo",
            descricao: "Site institucional criado com HTML e CSS, utilizando Flexbox e Media Queries para garantir responsividade em dispositivos móveis e desktop.",
            link: "https://github.com/CivaldoSilva/site-escolar"
        },
        {
            nome: "Lista de Tarefas (To Do List)",
            descricao: "Aplicação interativa em JavaScript para gerenciamento de tarefas, permitindo adicionar, marcar como concluída e remover itens dinamicamente.",
            link: "https://github.com/CivaldoSilva/todo-list"
        }
    ];

    const container = document.getElementById("lista-projetos");

    if (!container) {
        console.error("Elemento #lista-projetos não encontrado");
        return;
    }

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
