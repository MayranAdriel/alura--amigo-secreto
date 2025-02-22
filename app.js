const listaDeNomes = document.querySelector(".name-list");
const resultado = document.querySelector(".result-list");
const botaoAdicionar = document.querySelector(".button-add");
const inputNome = document.querySelector(".input-name");
const botaoSortear = document.querySelector(".button-draw");

let listaDeAmigos = [];

botaoAdicionar.addEventListener("click", () => {
    const valorInput = inputNome.value;
    if (valorInput) {
        listaDeNomes.innerHTML = "";
        listaDeAmigos = adicionarNaListaDeAmigos(valorInput, listaDeAmigos);
        listaDeAmigos.forEach(amigoAtual => {
            const li = document.createElement("li");
            li.textContent = amigoAtual;
            listaDeNomes.appendChild(li);
        })
    }
    else {
        avisoInputInvalido();
    }
});

botaoSortear.addEventListener("click", () => {
    const amigoSorteado = sorteiaAmigo(listaDeAmigos);
    const mensagem = `O amigo secreto sorteado é: ${amigoSorteado}`
    resultado.textContent = mensagem;
})

const avisoInputInvalido = () => {
    const mensagem = "Por favor insira um nome válido!"
    alert(mensagem)
}

const adicionarNaListaDeAmigos = (amigo, listaAmigos = []) => {

    return [...listaAmigos, amigo]
}

const sorteiaAmigo = (listaAmigos = []) => {

    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);

    return listaAmigos[indiceAleatorio];
}


