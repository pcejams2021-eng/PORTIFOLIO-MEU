document.addEventListener("DOMContentLoaded", () => {

    const projetos = [
        {
            nome: "Calculadora",
            descricao: "Projeto simples feito com JavaScript",
            link: "https://github.com/"
        },
        {
            nome: "Site Escolar",
            descricao: "Projeto com HTML e CSS responsivo",
            link: "https://github.com/"
        },
        {
            nome: "Lista de Tarefas",
            descricao: "App interativo com JavaScript",
            link: "https://github.com/"
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
            <a href="${projeto.link}" target="_blank">Ver projeto</a>
        `;

        fragment.appendChild(card);
    });

    container.appendChild(fragment);

});
