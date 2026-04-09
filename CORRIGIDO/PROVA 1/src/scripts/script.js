// Missão 1: A Recepção
let horaAtual = new Date().getHours();
let mensagemTopo = document.querySelector("#mensagem-topo");

if (horaAtual < 12) {
  mensagemTopo.textContent = "Bom dia, Mestre Jedi!";
} else if (horaAtual < 18) {
  mensagemTopo.textContent = "Boa tarde, Mestre Jedi!";
} else {
  mensagemTopo.textContent = "Boa noite, Mestre Jedi!";
}

// Missão 2: O Banner Mágico
let bannerPromo = document.querySelector("#banner-promo");

bannerPromo.addEventListener("mouseover", function () {
  bannerPromo.classList.add("destaque-dark");
});

bannerPromo.addEventListener("mouseout", function () {
  bannerPromo.classList.remove("destaque-dark");
});

// Missão 3: Simulador de Desconto
let qtdItem = document.querySelector("#qtd-item");
let resultadoPreco = document.querySelector("#resultado-preco");

qtdItem.addEventListener("input", function () {
  let valorCalculado = Number(qtdItem.value) * 85;
  resultadoPreco.textContent = valorCalculado;
});

// Missão 4: O Carrinho
let btnAdicionar = document.querySelector("#btn-adicionar");
let nomeProduto = document.querySelector("#nome-produto");
let listaCarrinho = document.querySelector("#lista-carrinho");

btnAdicionar.addEventListener("click", function () {
  listaCarrinho.innerHTML +=
    '<article class="card-carrinho"><h3>🎮 Item: ' +
    nomeProduto.value +
    "</h3></article>";
});

// Missão 5: Queima de Estoque
let btnLimpar = document.querySelector("#btn-limpar");

btnLimpar.addEventListener("click", function () {
  listaCarrinho.innerHTML = "";
});
