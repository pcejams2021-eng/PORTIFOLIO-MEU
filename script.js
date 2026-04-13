document.addEventListener("DOMContentLoaded", () => {

    const projetos = [
        {
            nome: "Calculadora Web",
            descricao: "Aplicação de calculadora desenvolvida com HTML, CSS e JavaScript. Permite operações matemáticas básicas com interface simples e responsiva.",
            link: "https://github.com/"
        },
        {
            nome: "Site Escolar Responsivo",
            descricao: "Site institucional criado com HTML e CSS, focado em layout responsivo para diferentes dispositivos (celular, tablet e desktop).",
            link: "https://github.com/"
        },
        {
            nome: "Lista de Tarefas (To Do List)",
            descricao: "Aplicação interativa em JavaScript que permite adicionar, marcar e remover tarefas do dia a dia.",
            link: "https://github.com/"
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
