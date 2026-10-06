const CHAVE = "fintrack-transacoes";

export function salvarTransacoes(transacoes) {
  localStorage.setItem(CHAVE, JSON.stringify(transacoes));
}

export function carregarTransacoes() {
  const dados = localStorage.getItem(CHAVE);

  if (dados === null) {
    return [];
  }

  return JSON.parse(dados);
}