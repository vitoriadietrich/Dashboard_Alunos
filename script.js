// ======================================================
// BASE DE DADOS
// ======================================================

// Array com todos os alunos.
// Cada objeto representa um aluno com:
// id, nome, turma, faltas e nota final.
const alunos = [
  { id: 1, nome: "Ana Clara", turma: "ADS A", faltas: 2, notaFinal: 8.7 },
  { id: 2, nome: "Bruno Henrique", turma: "ADS A", faltas: 5, notaFinal: 6.4 },
  { id: 3, nome: "Camila Santos", turma: "ADS A", faltas: 1, notaFinal: 9.2 },
  { id: 4, nome: "Diego Alves", turma: "ADS A", faltas: 8, notaFinal: 5.9 },
  { id: 5, nome: "Eduarda Lima", turma: "ADS A", faltas: 0, notaFinal: 7.8 },
  { id: 6, nome: "Felipe Costa", turma: "ADS A", faltas: 3, notaFinal: 6.9 },
  { id: 7, nome: "Gabriela Rocha", turma: "ADS A", faltas: 4, notaFinal: 8.1 },
  { id: 8, nome: "Henrique Martins", turma: "ADS A", faltas: 7, notaFinal: 4.8 },
  { id: 9, nome: "Isabela Ferreira", turma: "ADS A", faltas: 2, notaFinal: 7.1 },
  { id: 10, nome: "João Pedro", turma: "ADS A", faltas: 6, notaFinal: 5.5 },

  { id: 11, nome: "Karina Souza", turma: "ADS A", faltas: 1, notaFinal: 9.6 },
  { id: 12, nome: "Lucas Ribeiro", turma: "ADS A", faltas: 9, notaFinal: 6.2 },
  { id: 13, nome: "Mariana Gomes", turma: "ADS A", faltas: 0, notaFinal: 8.9 },
  { id: 14, nome: "Nathan Oliveira", turma: "ADS A", faltas: 4, notaFinal: 7.0 },
  { id: 15, nome: "Priscila Nunes", turma: "ADS A", faltas: 10, notaFinal: 4.3 },

  { id: 16, nome: "Rafael Dias", turma: "ADS B", faltas: 2, notaFinal: 7.4 },
  { id: 17, nome: "Sofia Mendes", turma: "ADS B", faltas: 1, notaFinal: 8.3 },
  { id: 18, nome: "Thiago Barbosa", turma: "ADS B", faltas: 11, notaFinal: 5.1 },
  { id: 19, nome: "Valentina Cruz", turma: "ADS B", faltas: 0, notaFinal: 9.8 },
  { id: 20, nome: "William Teixeira", turma: "ADS B", faltas: 6, notaFinal: 6.7 },

  { id: 21, nome: "Yasmin Cardoso", turma: "ADS B", faltas: 3, notaFinal: 7.9 },
  { id: 22, nome: "Arthur Pires", turma: "ADS B", faltas: 8, notaFinal: 4.9 },
  { id: 23, nome: "Bianca Moreira", turma: "ADS B", faltas: 2, notaFinal: 8.5 },
  { id: 24, nome: "Caio Monteiro", turma: "ADS B", faltas: 7, notaFinal: 6.1 },
  { id: 25, nome: "Daniela Batista", turma: "ADS B", faltas: 4, notaFinal: 7.2 },

  { id: 26, nome: "Enzo Carvalho", turma: "ADS B", faltas: 12, notaFinal: 3.8 },
  { id: 27, nome: "Fernanda Lopes", turma: "ADS B", faltas: 1, notaFinal: 9.1 },
  { id: 28, nome: "Gustavo Almeida", turma: "ADS B", faltas: 5, notaFinal: 6.8 },
  { id: 29, nome: "Helena Moraes", turma: "ADS B", faltas: 0, notaFinal: 8.0 },
  { id: 30, nome: "Igor Fernandes", turma: "ADS B", faltas: 9, notaFinal: 5.7 },
];

// ======================================================
// ELEMENTOS HTML
// ======================================================

// Pegando elementos do HTML para manipular no JavaScript

// mensagem mostrada quando não existir nenhum aluno
const mensagemVazia = document.querySelector("#mensagemVazia");

// texto mostrando quantos alunos estão aparecendo
const textoFiltro = document.querySelector("#textoFiltro");

// cards de resumo
const qtdTotal = document.querySelector("#qtdTotal");
const qtdAprovados = document.querySelector("#qtdAprovados");
const qtdReprovados = document.querySelector("#qtdReprovados");

// select usado para filtrar por turma
const filtroTurma = document.querySelector("#filtroTurma");

// botões de filtro
const btnTodos = document.querySelector("#btnTodos");
const btnAprovados = document.querySelector("#btnAprovados");
const btnReprovados = document.querySelector("#btnReprovados");

// local onde os cards dos alunos serão renderizados
const listaAlunos = document.querySelector("#listaAlunos");

// ======================================================
// VARIÁVEL DE CONTROLE
// ======================================================

// variável que guarda qual filtro está ativo
// começa mostrando "todos"
let filtroStatus = "todos";

// ======================================================
// FUNÇÃO PARA CRIAR O CARD DO ALUNO
// ======================================================

function criarAlunos(aluno) {

  // verifica se o aluno foi aprovado
  // se a nota for maior ou igual a 7 → aprovado
  // senão → reprovado
  const situacao = aluno.notaFinal >= 7
    ? "Aprovado"
    : "Reprovado";

  // adiciona uma classe css diferente
  // para mudar cor/style no status
  const classeStatus = aluno.notaFinal >= 7
    ? "aprovado"
    : "reprovado";

  // retorna o HTML do card
  return `
  
    <div class="card-aluno">

      <!-- Cabeçalho do card -->
      <div class="card-header">

        <!-- Primeira letra do nome -->
        <div class="avatar-aluno">
          ${aluno.nome[0]}
        </div>

        <!-- Nome e turma -->
        <div>
          <h3>${aluno.nome}</h3>
          <p>${aluno.turma}</p>
        </div>

      </div>

      <!-- Informações do aluno -->
      <div class="card-info">

        <p>
          <strong>Nota final:</strong>
          ${aluno.notaFinal}
        </p>

        <p>
          <strong>Faltas:</strong>
          ${aluno.faltas}
        </p>

      </div>

      <!-- Status do aluno -->
      <div class="card-status">

        <span class="status ${classeStatus}">
          ${situacao}
        </span>

      </div>

    </div>
    
  `;
}

// ======================================================
// ATUALIZAR CARDS DE RESUMO
// ======================================================

function atualizarResumo(lista) {

  // mostra quantidade total de alunos
  qtdTotal.textContent = lista.length;

  // cria um array apenas com aprovados
  const aprovados = lista.filter((aluno) => {
    return aluno.notaFinal >= 7;
  });

  // cria um array apenas com reprovados
  const reprovados = lista.filter((aluno) => {
    return aluno.notaFinal < 7;
  });

  // atualiza os números na tela
  qtdAprovados.textContent = aprovados.length;
  qtdReprovados.textContent = reprovados.length;
}

// ======================================================
// MOSTRAR MENSAGEM VAZIA
// ======================================================

function verificarMensagem(lista) {

  // se não existir nenhum aluno
  if (lista.length === 0) {

    // mostra mensagem
    mensagemVazia.style.display = "block";
  }

  else {

    // esconde mensagem
    mensagemVazia.style.display = "none";
  }
}

// ======================================================
// RENDERIZAR ALUNOS
// ======================================================

function renderizarAlunos(lista = alunos) {

  // limpa a lista antes de renderizar novamente
  listaAlunos.innerHTML = "";

  // percorre todos os alunos
  lista.forEach((aluno) => {

    // adiciona o card do aluno na tela
    listaAlunos.innerHTML += criarAlunos(aluno);

  });

  // atualiza os cards de resumo
  atualizarResumo(lista);

  // verifica se precisa mostrar mensagem vazia
  verificarMensagem(lista);
}

// ======================================================
// APLICAR FILTROS
// ======================================================

function aplicarFiltros() {

  // cria uma cópia do array original
  let listaFiltrada = [...alunos];

  // ======================================
  // FILTRO POR TURMA
  // ======================================

  // verifica se a turma escolhida não é "todos"
  if (filtroTurma.value !== "todos") {

    // filtra apenas alunos da turma selecionada
    listaFiltrada = listaFiltrada.filter((aluno) => {

      return aluno.turma === filtroTurma.value;

    });
  }

  // ======================================
  // FILTRO POR STATUS
  // ======================================

  // se o filtro ativo for aprovados
  if (filtroStatus === "aprovados") {

    // mostra apenas alunos aprovados
    listaFiltrada = listaFiltrada.filter((aluno) => {

      return aluno.notaFinal >= 7;

    });
  }

  // se o filtro ativo for reprovados
  if (filtroStatus === "reprovados") {

    // mostra apenas alunos reprovados
    listaFiltrada = listaFiltrada.filter((aluno) => {

      return aluno.notaFinal < 7;

    });
  }

  // atualiza o texto mostrando quantidade de alunos
  textoFiltro.textContent =
    `Exibindo ${listaFiltrada.length} alunos`;

  // renderiza os alunos filtrados
  renderizarAlunos(listaFiltrada);
}

// ======================================================
// EVENTOS DOS BOTÕES
// ======================================================

// quando clicar no botão "todos"
btnTodos.addEventListener("click", () => {

  // altera o filtro atual
  filtroStatus = "todos";

  // reaplica os filtros
  aplicarFiltros();
});

// quando clicar no botão "aprovados"
btnAprovados.addEventListener("click", () => {

  // altera o filtro atual
  filtroStatus = "aprovados";

  // reaplica os filtros
  aplicarFiltros();
});

// quando clicar no botão "reprovados"
btnReprovados.addEventListener("click", () => {

  // altera o filtro atual
  filtroStatus = "reprovados";

  // reaplica os filtros
  aplicarFiltros();
});

// ======================================================
// EVENTO DO SELECT
// ======================================================

// quando mudar a turma no select
filtroTurma.addEventListener("change", () => {

  // reaplica os filtros
  aplicarFiltros();

});

// ======================================================
// INICIAR SISTEMA
// ======================================================

// renderiza todos os alunos ao abrir a página
renderizarAlunos();