let listaDeAmigos = [];

function removerAcentos(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function adicionarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nome = inputAmigo.value.trim();
    const botaoAdicionar = document.getElementById("adicionar-btn");
    // Remove acentos e faz a comparação ignorando maiúsculas/minúsculas
    const nomeNormalizado = removerAcentos(nome.toLowerCase());
    // Verifica se o nome não está vazio e se o nome não existe (ignorando maiúsculas/minúsculas e acentos)
    if (nome !== "" && !listaDeAmigos.some(amigo => removerAcentos(amigo.toLowerCase()) === nomeNormalizado)) {
        listaDeAmigos.push(nome);
        atualizarLista();
    }
    // Limpa o campo de entrada
    inputAmigo.value = "";
    // Atualiza o estado do botão
    atualizarBotao();
}
function atualizarLista() {
    const listaElement = document.getElementById("listaAmigos");
    listaElement.innerHTML = "";

    listaDeAmigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaElement.appendChild(li);
    });
}
function sortearAmigo() {
    if (listaDeAmigos.length < 2) {
        alert("Adicione pelo menos dois amigos para sortear!");
        return;
    }
    const indiceSorteado = Math.floor(Math.random() * listaDeAmigos.length);
    const amigoSorteado = listaDeAmigos[indiceSorteado];
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = "";
    const li = document.createElement("li");
    li.textContent = `Seu amigo secreto é: ${amigoSorteado}!`;
    resultadoElement.appendChild(li);
}
// Função para atualizar o estado do botão de adicionar
function atualizarBotao() {
    const inputAmigo = document.getElementById("amigo");
    const botaoAdicionar = document.getElementById("adicionar-btn");
    const nome = inputAmigo.value.trim();
    // Remove acentos e faz a comparação ignorando maiúsculas/minúsculas
    const nomeNormalizado = removerAcentos(nome.toLowerCase());
    // Se o campo de entrada não estiver vazio e o nome não estiver na lista (ignorando maiúsculas/minúsculas e acentos)
    if (nome !== "" && !listaDeAmigos.some(amigo => removerAcentos(amigo.toLowerCase()) === nomeNormalizado)) {
        botaoAdicionar.classList.remove("button-gray");
        botaoAdicionar.classList.add("button-blue");
        botaoAdicionar.disabled = false; // Habilita o botão
    } else {
        botaoAdicionar.classList.remove("button-blue");
        botaoAdicionar.classList.add("button-gray");
        botaoAdicionar.disabled = true; // Desabilita o botão
    }
}
// Adiciona um ouvinte de evento para monitorar a entrada do campo de texto
document.getElementById("amigo").addEventListener("input", atualizarBotao);
