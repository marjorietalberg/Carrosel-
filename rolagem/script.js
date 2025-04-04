let index = 0;

function rolarImagens() {
    const imagens = document.querySelector('.imagens');
    const totalImagens = imagens.children.length;

    index++;

    if (index >= totalImagens) {
        index = 0;
    }

    const larguraImagem = imagens.children[0].offsetWidth;
    imagens.style.transform = `translateX(-${index * larguraImagem}px)`;
}

function moverImagem(direcao) {
    const imagens = document.querySelector('.imagens');
    const totalImagens = imagens.children.length;

    index += direcao;

    if (index < 0) {
        index = totalImagens - 1;
    } else if (index >= totalImagens) {
        index = 0;
    }

    const larguraImagem = imagens.children[0].offsetWidth;
    imagens.style.transform = `translateX(-${index * larguraImagem}px)`;
}

// Rolar a cada 2 segundos
setInterval(rolarImagens, 2000);
