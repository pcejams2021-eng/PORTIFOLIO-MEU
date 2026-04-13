const projetos = [
    {
        nome: "Calculadora",
        descricao: "Projeto simples feito com JavaScript",
        link: "#"
    },
    {
        nome: "Site Escolar",
        descricao: "Desenvolvido com HTML e CSS",
        link: "#"
    },
    {
        nome: "Lista de Tarefas",
        descricao: "Aplicação interativa com JS",
        link: "#"
    }
];

const container = document.getElementById("lista-projetos");

// Limpa antes (boa prática)
container.innerHTML = "";

projetos.forEach(projeto => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <h3>${projeto.nome}</h3>
        <p>${projeto.descricao}</p>
        <a href="${projeto.link}" target="_blank">Ver projeto</a>
    `;

    container.appendChild(card);
});
