// Array que armazena os alunos
let alunos = [];

// Função para adicionar um aluno
function adicionarAluno() {
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;

    if (nome && idade) {
        alunos.push({ nome, idade });
        listarAlunos();
        document.getElementById("cadastroForm").reset();
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}

// Função para listar alunos
function listarAlunos() {
    const lista = document.getElementById("listaAlunos");
    lista.innerHTML = ""; // Limpa a lista antes de exibir novamente

    alunos.forEach((aluno, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            ${aluno.nome}, ${aluno.idade} anos
            <button onclick="excluirAluno(${index})">Excluir</button>
        `;
        lista.appendChild(li);
    });
}

// Função para excluir um aluno
function excluirAluno(index) {
    alunos.splice(index, 1); // Remove o aluno do array
    listarAlunos(); // Atualiza a lista no DOM
}
