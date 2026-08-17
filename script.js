// 1. Seleção dos elementos do HTML
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

// 2. Lista de perguntas e alternativas (Array de Objetos)
const perguntas = [
  {
    enunciado: "Pergunta 1",
    alternativas: ["Alternativa 1", "Alternativa 2"]
  },
  {
    enunciado: "Pergunta 2",
    alternativas: ["Alternativa 1", "Alternativa 2"]
  }
];

// 3. Variáveis de controle de estado
let atual = 0;
let perguntaAtual;

// 4. Função para exibir a pergunta e suas alternativas
function mostraPergunta() {
  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
  caixaAlternativas.textContent = ""; // Limpa as alternativas da pergunta anterior
  mostraAlternativas();
}

// 5. Função para criar e exibir os botões das alternativas
function mostraAlternativas() {
  for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativas = document.createElement("button");
    botaoAlternativas.textContent = alternativa;
    caixaAlternativas.appendChild(botaoAlternativas);
  }
}

// 6. Chamada inicial para começar o jogo/quiz
mostraPergunta();
