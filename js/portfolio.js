document.addEventListener("DOMContentLoaded", function () {
    // Criar footer dinâmico
    const footer = document.createElement("footer");
    footer.style.backgroundColor = "var(--black-matte)";
    footer.style.color = "#fff";
    footer.style.textAlign = "center";
    footer.style.padding = "20px";
    footer.style.fontSize = "18px";

    const currentYear = new Date().getFullYear();
    footer.innerHTML = `&copy; ${currentYear} - Todos os direitos reservados.`;

    document.body.appendChild(footer);

    // Serviços dinâmicos
    const services = [
        {
            title: "Desenvolvimento Web",
            icon: "fa-solid fa-code",
            description: "Criação de sites modernos, responsivos e otimizados para performance."
        },
        {
            title: "Automação",
            icon: "fa-solid fa-robot",
            description: "Desenvolvimento de scripts e ferramentas para melhorar a produtividade e eficiência."
        },
        {
            title: "Banco de Dados",
            icon: "fa-solid fa-database",
            description: "Gerenciamento e integração de bancos de dados SQL e NoSQL."
        }
    ];

    const servicesContainer = document.getElementById("services-cards");

    services.forEach(service => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <i class="${service.icon} icon"></i>
            <h3>${service.title}</h3>
            <p>${service.description}</p>
        `;

        servicesContainer.appendChild(card);
    });

    // Projetos dinâmicos
    const projetos = [
    {
        titulo: "CLASSIFICAÇÃO DE INFORMAÇÕES (CIMGS)",
        descricao: "Sistema privado para uma empresa com formulário de classificação de dados sensíveis."
    },
    {
        titulo: "Sistema de Gerenciamento Comercial",
        descricao: "Aplicação desenvolvida com Flask e Node.js para cadastro de clientes e pedidos."
    },
{
    titulo: "Jogo de Batalha Naval",
    descricao: "Projeto desenvolvido com Python e tecnologias web, combinando lógica de programação e interface interativa para simular o clássico jogo de Batalha Naval."
}

    ];


    const portfolioContainer = document.getElementById("portfolio-container");

    projetos.forEach(projeto => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <h3>${projeto.titulo}</h3>
            <p>${projeto.descricao}</p>
        `;

        portfolioContainer.appendChild(card);
    });

    console.log('Script carregado com sucesso!');
});
