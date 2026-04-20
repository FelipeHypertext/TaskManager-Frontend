document.getElementById("ano").innerHTML = new Date().getFullYear();

let tarefas = [];

function adicionarTarefa() {
    const titulo = document.getElementById("titulo").value;
    const descricao = document.getElementById("descricao").value;
    const data = document.getElementById("data").value;

    if (!titulo || !data) {
        alert("Preencha campos de título e data");
        return;
    }

    tarefas.push({
        titulo,
        descricao,
        data,
        status: "Pendente"
    });

    carregar();
}

function alterarStatus(index) {
    const status = tarefas[index].status;

    if (status === "Pendente") {
        tarefas[index].status = "Em andamento";
    } else if (status === "Em andamento") {
        tarefas[index].status = "Concluído";
    } else {
        tarefas[index].status = "Pendente";
    }

    carregar();
}

function getClasseStatus(status){
    if (status === "Pendente") {
        return "pendente";
    } else if (status === "Em andamento") {
        return "andamento";
    } else {
        return "concluida";
    }
}

function carregar() {
    const lista = document.getElementById("lista");
    lista.innerHTML = "";

    tarefas.sort((a, b) => new Date(b.data) - new Date(a.data));

    tarefas.forEach((tarefa, index) => {
        const div = document.createElement("div");
        div.className = "tarefa";

        div.innerHTML = `
            <strong><img src="./images/tarefaMain.gif"> ${tarefa.titulo}</strong><br>
            ${tarefa.descricao}<br><br>
            ${tarefa.data}<br><br>
            Status: <span class="status ${getClasseStatus(tarefa.status)}">${tarefa.status}</span>
            <button class="btn-status" onclick="alterarStatus(${index})">Mudar Situação</button>
        `;

        lista.appendChild(div);
    });
}