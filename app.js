let amigos = [];

function adicionarAmigo() {
    // faço a leitura do campo de digitação do nome do amigo
    let input = document.getElementById('amigo');
    let nomeAmigo = document.getElementById('amigo').value;

    // verifico se o campo foi preenchido
    if (nomeAmigo === '') {
        alert('Digite o nome do amigo (O campo não pode estar vazio)');
        return;
    }

    // se digitado, adiciono o nome do amigo no array
    amigos.push(nomeAmigo);

    // limpo o campo de digitação
    input.value = "";

    // atualizo a lista de amigos na parte inferior da tela
    atualizarListaAmigos();
}

function atualizarListaAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";

    // percorro o array de amigos e adiciono cada um deles na lista
    amigos.forEach((amigo) => {
        let listaDeNomes = document.createElement('li');
        listaDeNomes.textContent = amigo;
        listaAmigos.appendChild(listaDeNomes);
    });
}

function sortearAmigo() {
    // se não houver pelo menos dois amigos, exibo um alerta pois não é possível sortear
    if (amigos.length < 2) {
        alert('Adicione pelo menos dois amigos para sortear.');
        return;
    }

    let sorteio = [...amigos];
    let resultado = [];

    // para cada amigo na lista ocorre um sorteio, garantindo que a pessoa não tire a si mesma e que não haja repetição
    amigos.forEach((amigo) => {
        let indice = Math.floor(Math.random() * sorteio.length);
        while (sorteio[indice] === amigo) {
            indice = Math.floor(Math.random() * sorteio.length);
        }

        // printa na tela o 'match' de amigo com amigo sorteado
        resultado.push(`${amigo} tirou ${sorteio[indice]}`);
        sorteio.splice(indice, 1);
    });

    let resultadoLista = document.getElementById('resultado');
    resultadoLista.innerHTML = "";

    resultado.forEach((item) => {
        let listaDeResultados = document.createElement('li');
        listaDeResultados.textContent = item;
        resultadoLista.appendChild(listaDeResultados);
    });
}