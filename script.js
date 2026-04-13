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

// pega o container
const container = document.getElementById("lista-projetos");

// proteção (boa prática profissional)
if (container) {
    projetos.forEach(projeto => {

        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <h3>${projeto.nome}</h3>
            <p>${projeto.descricao}</p>
            <button class="btn">Ver mais</button>
        `;

        container.appendChild(card);
    });
