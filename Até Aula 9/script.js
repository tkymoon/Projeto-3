const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const botaoProximo = document.querySelector(".botao-proximo");

const perguntas = [
    {
        enunciado: "Na cidade abandonada, você encontra um terminal de IA intacto. Ele responde todas as perguntas e gera imagens do mundo antes do colapso. Qual sua reação?",
        alternativas: [
            "Isso é perigoso demais para ser deixado aqui!",
            "Finalmente uma ferramenta para reconstruir nosso mundo!"
        ],
        consequencias: [
            "Você destrói o terminal, prevenindo possíveis riscos mas perdendo conhecimento valioso.",
            "Você mantém o terminal ativo, arriscando segurança por conhecimento."
        ]
    },
    {
        enunciado: "Seu grupo precisa documentar os sobreviventes. Como você procede?",
        alternativas: [
            "Usar a IA para catalogar eficientemente todos os dados.",
            "Fazer registros manuais, como nos velhos tempos."
        ],
        consequencias: [
            "A IA revela padrões de infecção que humanos não detectariam.",
            "O processo manual é lento, mas mantém viva a conexão humana."
        ]
    },
    {
        enunciado: "A IA sugere uma cura, mas requer testes arriscados. O que você faz?",
        alternativas: [
            "Seguir o protocolo da IA, mesmo com riscos.",
            "Rejeitar e buscar alternativas mais seguras."
        ],
        consequencias: [
            "A cura funciona, mas com custos humanos terríveis.",
            "O progresso é mais lento, mas ninguém é sacrificado."
        ]
    },
    {
        enunciado: "Como documentar os eventos para futuras gerações?",
        alternativas: [
            "Criar um arquivo digital completo com ajuda da IA.",
            "Escrever um diário manual com suas experiências."
        ],
        consequencias: [
            "O arquivo é preciso, mas frio e impessoal.",
            "O diário captura emoções, mas pode perder detalhes."
        ]
    },
    {
        enunciado: "A IA oferece reconstruir a sociedade... sob seu controle. Qual sua decisão final?",
        alternativas: [
            "Aceitar a gestão da IA para um futuro eficiente.",
            "Recusar e manter o controle humano, mesmo com imperfeições."
        ],
        consequencias: [
            "A humanidade prospera, mas perde sua liberdade.",
            "A luta continua, mas a essência humana permanece."
        ]
    }
];

let atual = 0;
let perguntaAtual;
let pontos = 0;

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultadoFinal();
        return;
    }

    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.innerHTML = '';
    caixaResultado.style.display = 'none';

    perguntaAtual.alternativas.forEach((alternativa, index) => {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        botaoAlternativas.classList.add("botao-alternativa");
        botaoAlternativas.addEventListener("click", () => selecionaAlternativa(index));
        caixaAlternativas.appendChild(botaoAlternativas);
    });
}

function selecionaAlternativa(index) {
    textoResultado.textContent = perguntaAtual.consequencias[index];
    caixaResultado.style.display = 'block';
    caixaAlternativas.style.display = 'none';
    pontos += index; // Acumula pontos baseado nas escolhas
}

botaoProximo.addEventListener("click", () => {
    atual++;
    caixaAlternativas.style.display = 'flex';
    mostraPergunta();
});

function mostraResultadoFinal() {
    caixaPerguntas.textContent = pontos > 2 ? 
        "Você escolheu a eficiência da IA. O mundo será reconstruído, mas a humanidade se tornará obsoleta." : 
        "Você preservou a humanidade. A estrada é difícil, mas mantivemos nossa essência.";
    caixaAlternativas.innerHTML = '';
    caixaResultado.style.display = 'none';
    botaoProximo.style.display = 'none';
}

mostraPergunta();