document.addEventListener("DOMContentLoaded", () => {

    const projetos = [
        { nome: "Calculadora", descricao: "Projeto simples feito com JavaScript" },
        { nome: "Site Escolar", descricao: "Desenvolvido com HTML e CSS" },
        { nome: "Lista de Tarefas", descricao: "Aplicação interativa com JS" }
    ];

    const container = document.getElementById("lista-projetos");

    // 🔴 Verifica se o container existe
    if (!container) {
        console.error("Erro: elemento #lista-projetos não encontrado no HTML");
        return;
    }

    try {
        container.innerHTML = "";

        // 🔴 Verifica se há projetos
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
        // 🔴 Tratamento de erro geral
        console.error("Erro ao renderizar os projetos:", error);
        container.innerHTML = "<p>Erro ao carregar os projetos.</p>";
    }

});
