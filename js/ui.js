const formatadorMoeda = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export function renderizarTransacoes(transacoes) {
  const lista = document.querySelector("#lista-transacoes");

  lista.innerHTML = "";

  if (transacoes.length === 0) {
    lista.innerHTML = `
      <li id="mensagem-vazia">
        Nenhuma transação cadastrada.
      </li>
    `;

    return;
  }

  transacoes.forEach(function (transacao) {
    const item = document.createElement("li");

    item.innerHTML = `
        <strong>${transacao.descricao}</strong>
        <span>${formatadorMoeda.format(transacao.valor)}</span>
        <span>${transacao.categoria}</span>
        <span>${transacao.tipo}</span>

        <button
            type="button"
            class="btn-excluir"
            data-id="${transacao.id}"
            aria-label="Excluir transação ${transacao.descricao}"
        >
            Excluir
        </button>
        `;

    lista.appendChild(item);
  });
}

export function atualizarResumo(resumo) {
  const saldo = document.querySelector("#saldo");
  const receitas = document.querySelector("#receitas");
  const despesas = document.querySelector("#despesas");

  saldo.textContent = formatadorMoeda.format(resumo.saldo);
  receitas.textContent = formatadorMoeda.format(resumo.receitas);
  despesas.textContent = formatadorMoeda.format(resumo.despesas);
}
