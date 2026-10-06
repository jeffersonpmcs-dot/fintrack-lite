# FinTrack Lite

Aplicação front-end para controle financeiro pessoal desenvolvida com HTML, CSS e JavaScript.

O projeto permite cadastrar receitas e despesas, acompanhar o saldo financeiro e manter as informações armazenadas diretamente no navegador.

## Funcionalidades

- Cadastro de receitas e despesas
- Cálculo automático do saldo
- Total de receitas
- Total de despesas
- Filtro de transações por tipo
- Exclusão de transações
- Armazenamento de dados com LocalStorage
- Interface responsiva
- Navegação por teclado
- Feedback de ações para o usuário

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- LocalStorage
- Git e GitHub

## Estrutura do projeto

```text
fintrack-lite/
├── index.html
├── css/
│   └── style.css
└── js/
    ├── app.js
    ├── storage.js
    ├── transacoes.js
    └── ui.js
```

## Organização do JavaScript

O projeto utiliza módulos JavaScript para separar as responsabilidades da aplicação.

- `app.js` — controla o funcionamento principal da aplicação
- `transacoes.js` — contém as regras relacionadas às transações e cálculos financeiros
- `storage.js` — responsável pelo armazenamento utilizando LocalStorage
- `ui.js` — responsável pela manipulação e atualização da interface

## Responsividade e acessibilidade

A interface foi desenvolvida para funcionar em diferentes tamanhos de tela, incluindo computadores, tablets e smartphones.

Também foram aplicadas práticas de acessibilidade, como:

- associação entre `label` e campos de formulário
- navegação utilizando teclado
- indicação visual de foco
- mensagens utilizando `aria-live`
- uso de HTML semântico

## Status do projeto

🚧 Em desenvolvimento.

O FinTrack Lite está sendo desenvolvido como projeto de Desenvolvimento Web e continuará recebendo melhorias.

## Autor

**Jefferson Paulo Machado**

Graduando em Ciência da Computação  
Desenvolvimento de Software & Análise de Dados