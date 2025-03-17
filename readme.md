# Projeto de Amigo Secreto

Um projeto de página web desenvolvido para o curso `Iniciante em Programação G8 - ONE` em parceria com a `Alura Latam` para formar duplas de pessoas para um jogo de amigo secreto. Assim que finalizado o processo, a página pode ser reiniciada para que outro jogo seja feito. Os trechos de `HTML` e `CSS` foram pré-disponibilizados pela `Alura`, sendo o código `JavaScript` de autoria própria.

## Passo a Passo

### Passo 1

Abra o arquivo index.html

![Imagem dos arquivos do projeto organizado em lista.](/assets/readme-step1.jpg)

### Passo 2

Digite um nome dentro do campo indicado na imagem.

![Imagem da página HTML do projeto com o campo de digitação destacado em vermelho.](/assets/readme-step2.jpg)

### Passo 3

Clique no botão 'Adicionar'.

![Imagem da página HTML do projeto com o botão 'Adicionar' destacado em vermelho e o nome Fulano Exemplildo já digitado para adição.](/assets/readme-step3.jpg)

### Passo 4

Repita os passos 2 e 3 para cada nome que deseja adicionar no jogo. Não se preocupe se a quantidade de participantes for par ou ímpar. Um jogo de amigo secreto sempre sorteia a todos, matematicamente falando. Assim, todos se divertem.

![Imagem da página HTML do projeto com o botão 'Adicionar' destacado em vermelho e os nomes Fulano Exemplildo e Ciclanildo Gomes já adicionados para sorteio.](/assets/readme-step4.jpg)

### Passo 5

Clique no botão 'Sortear amigo'.

![Imagem da página HTML do projeto com o botão 'Sortear amigo' destacado em vermelho.](/assets/readme-step5.jpg)

### Passo 6

Finalizado o jogo, apenas reinicie a página e siga os passos anteriores para jogar de novo. Você pode usar a seta no topo superior esquerdo de seu navegador ou o atalho Ctrl+R. Bom jogo!

![Imagem da página HTML do projeto com o sorteio 'Fulano Exemplildo tirou Ciclanildo Gomes' e 'Ciclanildo Gomes tirou Fulano Exemplildo'.](/assets/readme-step6.jpg)

## Explicação do Código

O código do jogo começa com a criação da lista `amigos = []`. Vazia, ela receberá os valores que você digitar.

A função `adicionarAmigo()` lê o que foi colocado no campo 'amigo' e adiciona o valor a uma variável chamada `nomeAmigo`.

O `if` que vem logo em seguida checa se o campo de digitação 'amigo' está vazio, o que faria impossível a adição do nome à lista. Se essa condição for verdadeira, aparece um `alert` informando a obrigatoriedade da digitação de um nome.

Não atendida a condição do `if`, o valor armazenado na variável `nomeAmigo` é então colocado na lista e o campo 'amigo' tem seu conteúdo removido, preparando-o para um novo nome. Feito isto, chamamos a função `atualizarListaAmigos()` para deixar o nome digitado visível na tela.

A função `atualizarListaAmigos()` determina que os nomes serão mostrados em um campo da página reservado para eles no código HTML, chamado de 'listaAmigos'.

Para cada nome detectado na lista JavaScript, este mesmo nome é adicionado à página HTML através do campo reservado citado anteriormente.

Não dá para jogar sozinho, por isso a função `sortearAmigo()` verifica com um `if` se o tamanho da lista JavaScript 'amigos' é maior que 2, de forma a que se possa jogar. Em caso negativo, aparece um `alert` que pede pelo menos mais um nome.

Em seguida, faz-se uma cópia da lista `amigos`, atribuindo esta cópia à variável `sorteio = [...amigos]`. O resultado, claro, ainda não tem nenhum nome como valor.

Em seguida, cria-se um índice aleatório, ou uma espécie de multiplicador, da lista `sorteio`. É como atribuir um número a cada nome da lista, equivalendo também à sua posição. Assim, se o número 5 da lista `sorteio` for combinado com o 5 da lista `amigos` (de quem `sorteio` é cópia), sabe-se que os nomes seriam iguais. Nesse caso, ocorre um novo 'match' no código para que ninguém tire a si mesmo.

Por fim, os nomes combinados aparecem na página, pois verificamos os valores presentes na variável chamada `resultado`, que são os matches feitos, e que são adicionados ao campo HTML dedicado a este texto, que é o elemento 'li'. Assim, o texto é tirado da variável e jogado como string dentro da lista HTML, aparecendo na tela.