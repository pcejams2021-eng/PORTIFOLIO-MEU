document.addEventListener("DOMContentLoaded", () => {

    const projetos = [
        { nome: "Calculadora", descricao: "Projeto simples feito com JavaScript" },
        { nome: "Site Escolar", descricao: "Desenvolvido com HTML e CSS" },
        { nome: "Lista de Tarefas", descricao: "Aplicação interativa com JS" }
    ];

    const container = document.getElementById("lista-projetos");

    // 🔴 Tratamento de erro: elemento não encontrado
    if (!container) {
        console.error("Erro: #lista-projetos não encontrado no HTML");
        return;
    }

    // 🔥 Função que cria o card (refatoração)
    function criarCard(projeto) {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <h3>${projeto.nome}</h3>
            <p>${projeto.descricao}</p>
        `;

        return card;
    }

    // 🚀 Função principal de renderização (refatorada)
    function renderizarProjetos(lista) {
        try {
            container.innerHTML = "";

            // 🔴 validação de dados
            if (!lista || lista.length === 0) {
                container.innerHTML = "<p>Nenhum projeto disponível no momento.</p>";
                return;
            }

            lista.forEach(projeto => {
                container.appendChild(criarCard(projeto));
            });

        } catch (error) {
            console.error("Erro ao renderizar projetos:", error);
            container.innerHTML = "<p>Erro ao carregar os projetos.</p>";
        }
    }

    // 🚀 execução principal
    renderizarProjetos(projetos);

});
