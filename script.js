document.addEventListener("DOMContentLoaded", () => {

    const projetos = [
        { nome: "Calculadora", descricao: "Projeto simples feito com JavaScript" },
        { nome: "Site Escolar", descricao: "Desenvolvido com HTML e CSS" },
        { nome: "Lista de Tarefas", descricao: "Aplicação interativa com JS" }
    ];

    const container = document.getElementById("lista-projetos");

    if (!container) {
        console.error("ERRO: #lista-projetos não encontrado");
        return;
    }

    container.innerHTML = "";

    projetos.forEach(p => {
        container.innerHTML += `
            <div class="card">
                <h3>${p.nome}</h3>
                <p>${p.descricao}</p>
            </div>
        `;
    });

});
