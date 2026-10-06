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

  const categorias = {
    alimentacao: "Alimentação",
    transporte: "Transporte",
    lazer: "Lazer",
    salario: "Salário",
    outros: "Outros"
  };

  const categoriaFormatada =
    categorias[transacao.categoria] || transacao.categoria;

  const tipoFormatado =
    transacao.tipo === "receita" ? "Receita" : "Despesa";

  const sinal =
    transacao.tipo === "receita" ? "+" : "-";

  item.classList.add(`transacao-${transacao.tipo}`);

  item.innerHTML = `
    <strong>${transacao.descricao}</strong>

    <span>${categoriaFormatada}</span>

    <span class="valor-transacao">
      ${sinal} ${formatadorMoeda.format(transacao.valor)}
    </span>

    <span>${tipoFormatado}</span>

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
