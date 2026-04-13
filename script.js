document.addEventListener("DOMContentLoaded", () => {

    const projetos = [
        { nome: "Calculadora", descricao: "Projeto simples feito com JavaScript" },
        { nome: "Site Escolar", descricao: "Desenvolvido com HTML e CSS" },
        { nome: "Lista de Tarefas", descricao: "Aplicação interativa com JS" }
    ];

    const container = document.getElementById("lista-projetos");

    // 🔴 Tratamento 1: verifica se o elemento existe no HTML
    if (!container) {
        console.error("Erro: container de projetos não encontrado no HTML");
        return;
    }

    try {
        container.innerHTML = "";

        // 🔴 Tratamento 2: verifica se há projetos
        if (projetos.length === 0) {
            container.innerHTML = "<p>Nenhum projeto disponível no momento.</p>";
            return;
        }

        projetos.forEach(projeto => {
            const card = document.createElement("div");
            card.classList.add("card");

            card.innerHTML = `
                <h3>${projeto.nome}</h3>
                <p>${projeto.descricao}</p>
            `;

            container.appendChild(card);
        });

    } catch (error) {
        // 🔴 Tratamento 3: erro geral
        console.error("Erro ao exibir projetos:", error);
        container.innerHTML = "<p>Erro ao carregar os projetos.</p>";
    }

});
