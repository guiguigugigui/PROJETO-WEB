const slider = document.getElementById('slider');
const btnAnt = document.getElementById('btn-ant');
const btnProx = document.getElementById('id-prox');
const imagens = document.querySelectorAll('#slider img');

let indiceAtual = 0;
const totalImagens = imagens.length; // Agora lê automaticamente as 5 imagens do HTML
const larguraImagem = 600; 

function atualizarCarrossel() {
    const deslocamento = -indiceAtual * larguraImagem;
    slider.style.transform = `translateX(${deslocamento}px)`;
}

btnProx.addEventListener('click', () => {
    indiceAtual++;
    if (indiceAtual >= totalImagens) {
        indiceAtual = 0;
    }
    atualizarCarrossel();
});

btnAnt.addEventListener('click', () => {
    indiceAtual--;
    if (indiceAtual < 0) {
        indiceAtual = totalImagens - 1;
    }
    atualizarCarrossel();
});

// Troca de imagem automática a cada 4 segundos
setInterval(() => {
    indiceAtual++;
    if (indiceAtual >= totalImagens) {
        indiceAtual = 0;
    }
    atualizarCarrossel();
}, 4000);
