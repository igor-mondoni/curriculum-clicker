# Currículo Interativo - Igor Mondoni

Bem-vindo ao meu currículo interativo! Trata-se de uma brincadeira divertida tanto de jogar quanto desenvolver, bom para botar algumas ideias em dia e usar a criatividade e lógica.

## Tecnologias Utilizadas

Este projeto foi construído com tecnologias modernas de desenvolvimento web.

- **[Next.js](https://nextjs.org/):** Framework React para renderização no lado do servidor, otimização de performance e uma excelente experiência de desenvolvimento.
- **[React](https://react.dev/):** Biblioteca para a construção de interfaces de usuário dinâmicas e reativas.
- **[TypeScript](https://www.typescriptlang.org/):** Superset do JavaScript que adiciona tipagem estática, aumentando a robustez e a manutenibilidade do código.
- **[CSS Modules](https://github.com/css-modules/css-modules):** Para estilização local e encapsulada, evitando conflitos de classes CSS.
- **[Google Gemini](https://gemini.google.com/app):** Para ajuda na estilização e lógica em alguns pontos do projeto.

---

## Como Executar o Projeto

Para visualizar e interagir com o projeto localmente, siga os passos abaixo.

### Pré-requisitos

- **Node.js:** Versão 18.x ou superior.
- **npm** ou **yarn:** Gerenciador de pacotes (npm já vem com o Node.js).

### Passo a Passo

1.  **Clone o Repositório**
    ```bash
    git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)
    cd seu-repositorio
    ```

2.  **Instale as Dependências**
    ```bash
    npm install
    ```
    *ou, se você usa yarn:*
    ```bash
    yarn install
    ```

3.  **Execute o Servidor de Desenvolvimento**
    ```bash
    npm run dev
    ou
    npx next dev
    -p 3000 (para especificar a porta)
    ```
    *ou, se você usa yarn:*
    ```bash
    yarn dev
    ```

4.  **Abra no Navegador**
    Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o projeto em ação.

> **Solução de Problemas (Windows):**
> Se você encontrar um erro no PowerShell sobre a execução de scripts ter sido desabilitada, abra o PowerShell como **Administrador** e execute o comando:
> `Set-ExecutionPolicy RemoteSigned`
> Pressione `S` para confirmar e tente executar `npm run dev` novamente.

---

## Regras do Jogo

### Objetivo

O seu objetivo é gerar **DevPoints (DP)** para desbloquear todas as seções do meu currículo: **Sobre**, **Experiência**, **Habilidades** e **Projetos**, **Impressão**.

### Mecânicas Principais

-   **Escrever Código (Clique Manual):** O botão principal gera uma quantidade de DP igual ao seu `clickpower` atual.
-   **Ativos:** Você pode comprar diferentes "Ativos" (hardware, software, equipe) que geram DP passivamente a cada segundo (DP/s).
    -   Cada ativo também pode fornecer um bônus de `clickpower`.
    -   O custo de um ativo aumenta a cada nova compra.
    -   O bônus de `clickpower` de um ativo também aumenta a cada vez que você o compra, incentivando a especialização.
-   **Upgrades:** Existem dois upgrades especiais e infinitos:
    -   **Otimizar Clique:** Aumenta seu `clickpower` total em uma porcentagem.
    -   **Automatizar Tarefas:** Aumenta seu ganho de DP/s total em uma porcentagem.
-   **Evento de Produtividade:** A cada X quantidade de clicks, você ganhará uma porcentagem do DP/s atual + um valor fixo
    -   **100 Clicks:** Ganho de 10% do DP/s atual + 100 Pontos extras.
    -   **1000 Clicks:** Ganho de 100% do DP/s atual + 1000 Pontos extras.
    -   **10000 Clicks:** Ganho de 500% do DP/s atual + 10000 Pontos extras.
    -   **100000 Clicks:** Ganho de 1000% do DP/s atual + 50000 Pontos extras.
---

## Futuras Features (Roadmap)

Este projeto está em constante evolução. Aqui estão algumas das funcionalidades que pretendo implementar no futuro:

-   **Sistema de Moedas (Real/Dólar):**
    -   Implementar a lógica para os custos em moedas reais, que serão geradas passivamente através dos ativos, upgrades e outros sistemas que implementarei futuramente como contratos.
    -   Utilizarei uma API para retorno da cotação atual de dolar e com isso vender por real ou transformar real em dolar como uma forma secundária de ganhar dinheiro (fícticio) no jogo
    -   Criarei o sistema de carteira e custos em real, dolar e tambem custo contínuo para o dinheiro para ter ativos e upgrades especiais.

-   **Eventos Aleatórios:**
    -   Criarei sistema de eventos aleatórios para dar uma dinamica legal ao jogo, tanto eventos negativos como: "Queda no servidor", "Quebrou a máquina de café", uma especial com uma raridade de ocorrer que seria "Um meteoro caiu na sede da empresa" e Outro positivos que garantiram Clickpower extra temporário, ganho de real, ganho dolar e etc

-   **Requisitos para Ativos:**
    -   Implementar a lógica de `requirements`, onde será necessário possuir certos ativos para poder comprar outros mais avançados.
    -   Com isso retrabalhar todos os ativos categorizando cada item corretamente e assim colocar requisitos para compra de novos ativos e funcionários.
    -   Com isso terei que criar um sistema de inventário alem do conceito ja tido no projeto.
    -   Funcionará por exemplo: para comprar mais 1 funcionário  Junior, será necessário ter no minimo 1 teclado sobrando, 2 monitores e 1 mouse como ativos
    -   a propriedade requirements definirá quantidades apontando o ID do item necessário seguido de sua quantidade no objeto.
/1

-   **Persistência de Dados:**
    -   Salvar o progresso do jogo no `localStorage` do navegador para que o jogador possa continuar de onde parou.
