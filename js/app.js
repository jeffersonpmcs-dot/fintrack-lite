import { salvarTransacoes, carregarTransacoes } from "./storage.js";

import { criarTransacao, calcularResumo } from "./transacoes.js";

import { renderizarTransacoes, atualizarResumo } from "./ui.js";

const transacoes = carregarTransacoes();

const form = document.querySelector("#form-transacao");
const listaTransacoes = document.querySelector("#lista-transacoes");
const filtroTipo = document.querySelector("#filtro-tipo");
const mensagemStatus = document.querySelector("#mensagem-status");
const campoDescricao = document.querySelector("#descricao");

function mostrarMensagem(mensagem) {
  mensagemStatus.textContent = mensagem;

  setTimeout(function () {
    mensagemStatus.textContent = "";
  }, 3000);
}

function filtrarTransacoes() {
  const filtro = filtroTipo.value;

  if (filtro === "todos") {
    return transacoes;
  }

  return transacoes.filter(function (transacao) {
    return transacao.tipo === filtro;
  });
}

function atualizarInterface() {
  const transacoesFiltradas = filtrarTransacoes();

  renderizarTransacoes(transacoesFiltradas);

  const resumo = calcularResumo(transacoes);

  atualizarResumo(resumo);
}

atualizarInterface();

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const descricao = document.querySelector("#descricao").value;
  const valor = document.querySelector("#valor").value;
  const categoria = document.querySelector("#categoria").value;
  const tipo = document.querySelector("#tipo").value;

  const transacao = criarTransacao(descricao, valor, categoria, tipo);

  transacoes.push(transacao);

  salvarTransacoes(transacoes);

  atualizarInterface();

  form.reset();

  mostrarMensagem("Transação adicionada com sucesso.");

  campoDescricao.focus();

  console.log(transacoes);
});

listaTransacoes.addEventListener("click", function (event) {
  if (!event.target.classList.contains("btn-excluir")) {
    return;
  }

  const id = Number(event.target.dataset.id);

  const indice = transacoes.findIndex(function (transacao) {
    return transacao.id === id;
  });

  if (indice !== -1) {
    transacoes.splice(indice, 1);

    salvarTransacoes(transacoes);

    atualizarInterface();

    mostrarMensagem("Transação excluída com sucesso.");
  }
});

filtroTipo.addEventListener("change", function () {
  atualizarInterface();
});
