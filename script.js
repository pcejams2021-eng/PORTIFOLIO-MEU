document.addEventListener("DOMContentLoaded", () => {

    const projetos = [
        { nome: "Calculadora", descricao: "Projeto simples feito com JavaScript" },
        { nome: "Site Escolar", descricao: "Desenvolvido com HTML e CSS" },
        { nome: "Lista de Tarefas", descricao: "Aplicação interativa com JS" }
    ];

    const container = document.getElementById("lista-projetos");

    if (!container) {
        console.error("Erro: container #lista-projetos não encontrado");
        return;
    }

    // 🔥 Função separada (REFATORAÇÃO)
    function criarCard(projeto) {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <h3>${projeto.nome}</h3>
            <p>${projeto.descricao}</p>
        `;

        return card;
    }

    function renderizarProjetos(lista) {
        try {
            container.innerHTML = "";

            if (!lista || lista.length === 0) {
                container.innerHTML = "<p>Nenhum projeto disponível.</p>";
                return;
            }

            lista.forEach(projeto => {
                const card = criarCard(projeto);
                container.appendChild(card);
            });

        } catch (error) {
            console.error("Erro ao renderizar projetos:", error);
            container.innerHTML = "<p>Erro ao carregar projetos.</p>";
        }
    }

    // 🚀 execução principal
    renderizarProjetos(projetos);

});
