const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [
    {
        enunciado: "Você gosta da ideia de Inteligência Artificial?",
        alternativas:[
            {
            txto:"Sim",
            afirrmativa:"Afirmativa da alternativa 1"
            },
            {
                texto:"Não",
                airmativa:"Afirmativa da altrnativa 2"
            }
        ]
    },
    {
        enunciado: "Você uaria IA?",
        alternativas:[
            {
            txto:"Sim",
            alternativa:"Afirmativa da alternatiiva 1"
            },
            {
                texto:"Não",
                afirmativa:"Afirmativa da altrnativa 2"
            }
         ]
    },
    {
        enunciado: "Vocẽ acha a IA boa par o mundo?",
        alternativas:[
            {
            texto:"Sim",
            afirmativa:"Airmativa da alternativa 1"
            },
            {
                texto:"Não",
                afirmativa:"Afirmativa da alternativa 2"
            }
         ]
    }
]

let posicao = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[posicao];
    caixaPergunta.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativa){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click",function(){
            posicao++;
            mostraPergunta();
        });
        caixaAlternativa.appendChild(botaoAlternativas);
    }
}