document.addEventListener("DOMContentLoaded", () => {

    const projetos = [
        {
            nome: "Calculadora Web",
            descricao: "Aplicação de calculadora desenvolvida com HTML, CSS e JavaScript. Realiza operações matemáticas básicas com interface responsiva e validação simples.",
            link: "https://github.com/seuusuario/calculadora"
        },
        {
            nome: "Site Escolar Responsivo",
            descricao: "Site institucional desenvolvido com HTML e CSS, utilizando Flexbox e Media Queries para adaptação em dispositivos móveis e desktop.",
            link: "https://github.com/seuusuario/site-escolar"
        },
        {
            nome: "Lista de Tarefas (To Do List)",
            descricao: "Aplicação interativa em JavaScript para organização de tarefas, permitindo adicionar, marcar como concluída e remover itens da lista.",
            link: "https://github.com/seuusuario/todo-list"
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
