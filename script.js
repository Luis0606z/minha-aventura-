let storyText = document.getElementById('story-text');
let choices = document.getElementById('choices');

function chooseOption(option) {
    if (option === 1) {
        storyText.textContent = "Você entrou na floresta. A floresta é escura e misteriosa. Você escuta barulhos estranhos.";
        choices.innerHTML = `
            <button onclick="chooseOption(3)">Seguir o barulho</button>
            <button onclick="chooseOption(4)">Voltar para casa</button>
        `;
    } else if (option === 2) {
        storyText.textContent = "Você chegou à cidade. As ruas estão movimentadas e cheias de pessoas.";
        choices.innerHTML = `
            <button onclick="chooseOption(5)">Conversar com o vendedor</button>
            <button onclick="chooseOption(6)">Explorar as ruas</button>
        `;
    } else if (option === 3) {
        storyText.textContent = "Você seguiu o barulho e encontrou um animal mágico! Ele oferece um desejo.";
        choices.innerHTML = `
            <button onclick="chooseOption(7)">Fazer um desejo</button>
            <button onclick="chooseOption(8)">Recusar o desejo e ir embora</button>
        `;
    } else if (option === 4) {
        storyText.textContent = "Você voltou para casa e descansou. Fim da aventura por hoje.";
        choices.innerHTML = <button onclick="location.reload()">Recomeçar</button>;
    } else if (option === 5) {
        storyText.textContent = "O vendedor lhe oferece uma espada mágica. Você a aceita.";
        choices.innerHTML = `
            <button onclick="chooseOption(9)">Ir para uma aventura com a espada</button>
            <button onclick="chooseOption(4)">Voltar para casa</button>
        `;
    } else if (option === 6) {
        storyText.textContent = "Você encontrou um mapa misterioso que indica um tesouro escondido!";
        choices.innerHTML = `
            <button onclick="chooseOption(10)">Seguir o mapa</button>
            <button onclick="chooseOption(4)">Voltar para casa</button>
        `;
    } else if (option === 7) {
        storyText.textContent = "Você fez um desejo e o animal mágico lhe concedeu poderes incríveis!";
        choices.innerHTML = `
            <button onclick="chooseOption(11)">Usar os poderes para explorar mais</button>
            <button onclick="chooseOption(4)">Voltar para casa</button>
        `;
    } else if (option === 8) {
        storyText.textContent = "Você recusou o desejo e decidiu voltar para casa. Fim da aventura.";
        choices.innerHTML = <button onclick="location.reload()">Recomeçar</button>;
    } else if (option === 9) {
        storyText.textContent = "Com a espada, você parte em uma nova aventura, pronto para enfrentar desafios!";
        choices.innerHTML = `
            <button onclick="chooseOption(11)">Explorar mais com a espada</button>
            <button onclick="chooseOption(4)">Voltar para casa</button>
        `;
    } else if (option === 10) {
        storyText.textContent = "Você seguiu o mapa e encontrou um tesouro cheio de ouro e joias!";
        choices.innerHTML = `
            <button onclick="chooseOption(11)">Continuar explorando</button>
            <button onclick="chooseOption(4)">Voltar para casa</button>
        `;
    } else if (option === 11) {
        storyText.textContent = "Com seus novos poderes ou tesouros, você vive feliz para sempre.";
        choices.innerHTML = <button onclick="location.reload()">Recomeçar</button>;
    }