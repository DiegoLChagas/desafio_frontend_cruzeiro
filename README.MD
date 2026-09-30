# ONG Esperança

Projeto front-end desenvolvido para representar o site institucional da ONG Esperança, com foco em organização de código, responsividade, acessibilidade e interação com JavaScript.

A aplicação apresenta informações sobre a ONG, seus projetos sociais e um formulário de cadastro para voluntários.

## Sobre o projeto

O projeto foi desenvolvido utilizando HTML5, CSS3 e JavaScript (ES6+), com as páginas organizadas de forma independente.

A aplicação possui três páginas:

- Página inicial com informações sobre a ONG e seus contatos.
- Página de projetos com conteúdo renderizado dinamicamente pelo JavaScript.
- Página de cadastro com validação dos campos e armazenamento dos dados no navegador.

O objetivo do projeto é praticar conceitos fundamentais de desenvolvimento Front-End, incluindo estrutura semântica, responsividade, manipulação do DOM, validação de formulários e utilização do Local Storage.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- Git
- GitHub

## Funcionalidades

### Página inicial

A página inicial apresenta:

- Nome da ONG.
- Menu de navegação.
- Informações sobre a ONG.
- Imagem institucional.
- Informações de contato.
- Rodapé.

### Projetos

Os projetos são armazenados em um array JavaScript e renderizados dinamicamente na página.

Atualmente, o projeto possui:

- Doação de alimentos.
- Voluntariado.

Cada projeto possui:

- Título.
- Descrição.
- Imagem.
- Texto alternativo para acessibilidade.

A estrutura utilizada para os projetos é:

    const projetos = [
      {
        titulo: "Doação de alimentos",
        descricao:
          "Arrecadação de alimentos para pessoas em situação de vulnerabilidade.",
        imagem: "../imagens/doacoes.jpg",
        alt: "Alimentos organizados para uma campanha de doação",
      },
    ];

### Cadastro

A página de cadastro possui campos para:

- Nome completo.
- E-mail.
- Data de nascimento.
- CPF.
- Telefone.
- CEP.
- Endereço.
- Cidade.
- Estado.

O formulário utiliza recursos nativos do HTML para validação, como:

- `required`
- `type="email"`
- `pattern`
- `checkValidity()`

O JavaScript também adiciona classes de estado aos campos:

- `success`
- `error`

Após o preenchimento correto, os dados são armazenados no `localStorage`.

### Local Storage

Os dados do cadastro são convertidos para JSON e armazenados no navegador.

    localStorage.setItem("cadastro", JSON.stringify(dados));

Quando a página de cadastro é carregada novamente, os dados salvos podem ser recuperados e preenchidos automaticamente nos campos do formulário.

## Navegação

O projeto utiliza páginas HTML independentes.

A navegação é feita através de links tradicionais:

    <a href="index.html">Início</a>
    <a href="projetos.html">Projetos</a>
    <a href="cadastro.html">Cadastre-se</a>

Dessa forma, cada página possui seu próprio documento HTML e compartilha os arquivos CSS e JavaScript.

## Estrutura do projeto

    projeto/
    │
    ├── html/
    │   ├── index.html
    │   ├── projetos.html
    │   └── cadastro.html
    │
    ├── css/
    │   └── style.css
    │
    ├── js/
    │   └── script.js
    │
    ├── imagens/
    │   ├── ong.jpg
    │   ├── doacoes.jpg
    │   └── voluntarios.jpg
    │
    └── README.md

## Organização do JavaScript

O arquivo `script.js` é compartilhado pelas três páginas.

Como cada página possui elementos diferentes, o JavaScript verifica se os elementos necessários existem antes de executar determinadas funcionalidades.

Por exemplo:

    const container = document.querySelector("#projetos");

    if (!container) {
      return;
    }

Isso permite utilizar o mesmo arquivo JavaScript em todas as páginas sem gerar erros quando um elemento específico não estiver presente.

## Responsividade

O projeto utiliza CSS Grid para estruturar o conteúdo e adaptar o layout para diferentes tamanhos de tela.

O sistema de container utiliza diferentes quantidades de colunas conforme a largura disponível:

- 12 colunas em telas maiores.
- 8 colunas em telas médias.
- 6 colunas em telas menores.
- 4 colunas em dispositivos pequenos.
- 1 coluna em telas muito pequenas.

Exemplo:

    .container {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      gap: 24px;
      max-width: 1200px;
      margin: 0 auto;
      padding: 24px;
    }

Também são utilizados media queries para adaptar o layout.

## Acessibilidade

O projeto busca aplicar boas práticas de acessibilidade durante a construção das páginas.

Entre as práticas utilizadas estão:

- Uso de elementos HTML semânticos.
- Associação entre `label` e `input` através dos atributos `for` e `id`.
- Uso de textos alternativos nas imagens com `alt`.
- Estrutura de títulos organizada.
- Campos obrigatórios identificados com `required`.
- Navegação por links HTML.
- Contraste e estados visuais tratados no CSS.
- Formulários estruturados com `fieldset` e `legend`.

As práticas são utilizadas como referência para desenvolver uma interface mais acessível, tendo as diretrizes WCAG 2.1 como referência.

## Como executar

### 1. Baixar o projeto

Clone o repositório utilizando Git:

    git clone URL_DO_REPOSITORIO

Ou faça o download dos arquivos diretamente pelo GitHub.

### 2. Entrar na pasta

    cd projeto

### 3. Executar

Como o projeto utiliza HTML, CSS e JavaScript sem necessidade de um servidor backend, as páginas podem ser abertas localmente em um navegador.

Abra:

    html/index.html

Também é possível utilizar uma extensão como o Live Server no Visual Studio Code para executar o projeto durante o desenvolvimento.

## Deploy

O projeto pode ser publicado em serviços de hospedagem de aplicações estáticas, já que sua estrutura atual utiliza apenas HTML, CSS e JavaScript no lado do cliente.

Entre as opções possíveis estão:

- GitHub Pages
- Netlify
- Vercel

A publicação pode ser realizada a partir do repositório GitHub, dependendo da plataforma escolhida.

## Versionamento

O projeto utiliza Git para controle de versão e GitHub para armazenamento e colaboração com o código.

Uma organização de commits pode seguir o padrão:

    feat: adiciona página de cadastro
    feat: adiciona renderização dos projetos
    style: melhora responsividade da página
    fix: corrige validação do formulário
    docs: atualiza README

Para versões futuras, pode ser utilizado versionamento semântico:

    MAJOR.MINOR.PATCH

Exemplo:

    1.0.0

Onde:

- `MAJOR`: alterações incompatíveis com versões anteriores.
- `MINOR`: novas funcionalidades compatíveis.
- `PATCH`: correções e pequenos ajustes.

## Aprendizados

Durante o desenvolvimento deste projeto, foram praticados conceitos importantes de desenvolvimento Front-End:

- Estruturação de páginas com HTML5.
- HTML semântico.
- Organização de arquivos.
- CSS Grid.
- Responsividade com media queries.
- Manipulação do DOM.
- Arrays e objetos em JavaScript.
- Renderização dinâmica de conteúdo.
- Eventos de formulário.
- Validação de campos.
- Uso de `localStorage`.
- JSON com `JSON.stringify()` e `JSON.parse()`.
- Boas práticas de acessibilidade.
- Versionamento com Git e GitHub.

## Status do projeto

🚧 Em desenvolvimento

O projeto está sendo desenvolvido de forma incremental, com foco no aprendizado prático de desenvolvimento Front-End, organização de código e construção de uma interface responsiva e acessível.
