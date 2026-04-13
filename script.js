document.addEventListener("DOMContentLoaded", () => {

    const projetos = [
        {
            nome: "Calculadora",
            descricao: "Calculadora funcional feita com HTML, CSS e JavaScript. Permite operações básicas como soma, subtração, multiplicação e divisão.",
            link: "https://github.com/"
        },
        {
            nome: "Site Escolar",
            descricao: "Site institucional responsivo desenvolvido com HTML e CSS. Ideal para escolas ou projetos educacionais.",
            link: "https://github.com/"
        },
        {
            nome: "Lista de Tarefas",
            descricao: "Aplicação interativa para organizar tarefas do dia a dia. Permite adicionar, marcar e remover itens.",
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
