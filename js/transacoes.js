export function criarTransacao(descricao, valor, categoria, tipo) {
  const transacao = {
    id: Date.now(),
    descricao: descricao,
    valor: Number(valor),
    categoria: categoria,
    tipo: tipo
  };

  return transacao;
}

export function calcularResumo(transacoes) {
  let receitas = 0;
  let despesas = 0;

  transacoes.forEach(function (transacao) {
    if (transacao.tipo === "receita") {
      receitas += transacao.valor;
    }

    if (transacao.tipo === "despesa") {
      despesas += transacao.valor;
    }
  });

  const saldo = receitas - despesas;

  return {
    saldo,
    receitas,
    despesas
  };
}