// A Força (e o Foco) está com você! Comece a codificar suas missões aqui embaixo:

// Missão 1: Recepção do Atleta
let horaAtual = new Date().getHours();
let saudacao = document.querySelector("#saudacao-atleta");

if (horaAtual < 12) {
  saudacao.textContent = "Treino matinal liberado!";
} else if (horaAtual < 18) {
  saudacao.textContent = "Boa tarde, foco no treino!";
} else {
  saudacao.textContent = "Descanso noturno merecido!";
}

// Missão 2: Banner Motivacional
let bannerFoco = document.querySelector("#banner-foco");

bannerFoco.addEventListener("mouseover", function () {
  bannerFoco.classList.add("foco-total");
});

bannerFoco.addEventListener("mouseout", function () {
  bannerFoco.classList.remove("foco-total");
});

// Missão 3: Calculadora de Hidratação
let pesoAluno = document.querySelector("#peso-aluno");
let metaAgua = document.querySelector("#meta-agua");

pesoAluno.addEventListener("input", function () {
  metaAgua.textContent = Number(pesoAluno.value) * 35;
});

// Missão 4: O Diário de Refeições
let btnRegistrar = document.querySelector("#btn-registrar");
let nomeRefeicao = document.querySelector("#nome-refeicao");
let listaRefeicoes = document.querySelector("#lista-refeicoes");

btnRegistrar.addEventListener("click", function () {
  listaRefeicoes.innerHTML +=
    '<article class="card-refeicao"><h3>🥗 Prato: ' +
    nomeRefeicao.value +
    "</h3></article>";
});

// Missão 5: Dia de Jejum
let btnZerar = document.querySelector("#btn-zerar");

btnZerar.addEventListener("click", function () {
  listaRefeicoes.innerHTML = "";
  window.alert("Diário reiniciado com sucesso para amanhã!");
});
