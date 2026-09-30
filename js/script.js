// ==============================
// PROJETOS
// ==============================

const projetos = [
  {
    titulo: "Doação de alimentos",
    descricao:
      "Arrecadação de alimentos para pessoas em situação de vulnerabilidade.",
    imagem: "../imagens/doacoes.jpg",
    alt: "Alimentos organizados para uma campanha de doação",
  },
  {
    titulo: "Voluntariado",
    descricao: "Ações realizadas com voluntários para apoiar a comunidade.",
    imagem: "../imagens/voluntarios.jpg",
    alt: "Voluntários participando de uma ação comunitária",
  },
];

function renderizarProjetos() {
  const container = document.querySelector("#projetos");

  // Executa somente se a página tiver #projetos
  if (!container) {
    return;
  }

  container.innerHTML = projetos
    .map(
      (projeto) => `
        <article class="card">
          <img
            src="${projeto.imagem}"
            alt="${projeto.alt}"
          />

          <h2>${projeto.titulo}</h2>

          <p>${projeto.descricao}</p>
        </article>
      `,
    )
    .join("");
}

// ==============================
// CADASTRO
// ==============================

const form = document.querySelector("#form-cadastro");
const mensagem = document.querySelector("#mensagem");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const campos = form.querySelectorAll("input[required], select[required]");

    let valido = true;

    campos.forEach((campo) => {
      if (!campo.value.trim() || !campo.checkValidity()) {
        campo.classList.add("error");
        campo.classList.remove("success");

        valido = false;
      } else {
        campo.classList.add("success");
        campo.classList.remove("error");
      }
    });

    if (valido) {
      const dados = {
        nome: document.querySelector("#nome").value,
        email: document.querySelector("#email").value,
        nascimento: document.querySelector("#nascimento").value,
        cpf: document.querySelector("#cpf").value,
        telefone: document.querySelector("#telefone").value,
        cep: document.querySelector("#cep").value,
        endereco: document.querySelector("#endereco").value,
        cidade: document.querySelector("#cidade").value,
        estado: document.querySelector("#estado").value,
      };

      salvarCadastro(dados);

      if (mensagem) {
        mensagem.textContent = "Cadastro realizado com sucesso!";
        mensagem.classList.remove("error");
        mensagem.classList.add("success");
      }
    } else {
      if (mensagem) {
        mensagem.textContent = "Preencha os campos corretamente.";
        mensagem.classList.remove("success");
        mensagem.classList.add("error");
      }
    }
  });
}

// ==============================
// LOCAL STORAGE
// ==============================

function salvarCadastro(dados) {
  localStorage.setItem("cadastro", JSON.stringify(dados));
}

function carregarCadastro() {
  const dadosSalvos = localStorage.getItem("cadastro");

  if (!dadosSalvos) {
    return;
  }

  const dados = JSON.parse(dadosSalvos);

  const nome = document.querySelector("#nome");
  const email = document.querySelector("#email");
  const nascimento = document.querySelector("#nascimento");
  const cpf = document.querySelector("#cpf");
  const telefone = document.querySelector("#telefone");
  const cep = document.querySelector("#cep");
  const endereco = document.querySelector("#endereco");
  const cidade = document.querySelector("#cidade");
  const estado = document.querySelector("#estado");

  if (nome) nome.value = dados.nome || "";
  if (email) email.value = dados.email || "";
  if (nascimento) nascimento.value = dados.nascimento || "";
  if (cpf) cpf.value = dados.cpf || "";
  if (telefone) telefone.value = dados.telefone || "";
  if (cep) cep.value = dados.cep || "";
  if (endereco) endereco.value = dados.endereco || "";
  if (cidade) cidade.value = dados.cidade || "";
  if (estado) estado.value = dados.estado || "";
}

// ==============================
// INICIALIZAÇÃO
// ==============================

renderizarProjetos();
carregarCadastro();
