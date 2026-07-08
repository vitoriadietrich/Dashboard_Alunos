# Sistema de Gerenciamento de Alunos

Projeto desenvolvido em **JavaScript**, com foco em manipulação do DOM, filtros dinâmicos e renderização de componentes na tela.

---

## Funcionalidades

- Listagem dinâmica de alunos
- Filtro por turma
- Filtro por situação (Todos, Aprovados e Reprovados)
- Cards individuais para cada aluno
- Resumo automático
- Mensagem quando não houver alunos
- Interface dinâmica usando JavaScript puro

---

# Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla JS)

---

# Estrutura do Projeto

```bash
projeto-alunos
 ┣ index.html
 ┣ style.css
 ┣ script.js
 ┗ README.md
```

---

# Como Funciona

O sistema possui uma base de dados em JavaScript contendo os alunos:

```js
const alunos = [
  {
    id: 1,
    nome: "Ana Clara",
    turma: "ADS A",
    faltas: 2,
    notaFinal: 8.7
  }
];
```

Cada aluno possui:

- ID
- Nome
- Turma
- Quantidade de faltas
- Nota final

---

# Lógica do Projeto

## Aprovação

O aluno é considerado aprovado quando:

```js
notaFinal >= 7
```

Caso contrário:

```js
notaFinal < 7
```

---

# Filtros Disponíveis

## Filtrar por turma

O usuário pode selecionar:

- Todas as turmas
- ADS A
- ADS B

---

## Filtrar por status

Botões disponíveis:

- Todos
- Aprovados
- Reprovados

---

# Renderização dos Cards

Cada aluno é renderizado dinamicamente usando template string:

```js
listaAlunos.innerHTML += criarAlunos(aluno);
```

---

# Resumo Automático

O sistema atualiza automaticamente:

- Total de alunos
- Quantidade de aprovados
- Quantidade de reprovados

Sempre que um filtro é aplicado.

---

# Conceitos Trabalhados

Este projeto utiliza vários conceitos importantes de JavaScript:

- Arrays
- Objetos
- Funções
- Filter()
- ForEach()
- Template String
- Manipulação do DOM
- Eventos
- Condicionais
- Renderização dinâmica

---

# Como Executar

1. Clone este repositório:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```

2. Abra a pasta do projeto

3. Execute o arquivo:

```bash
index.html
```

---

# Objetivo do Projeto

Este projeto foi criado com o objetivo de praticar:

- JavaScript puro
- Manipulação do DOM
- Criação de filtros
- Estruturação de código
- Organização de projetos front-end

---

# Autor

Projeto desenvolvido por **Vitória Dietrich** 🚀
