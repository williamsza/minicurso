script.js

const image = document.querySelector('img');
const botao = document.querySelector('buton');
const momeDoPersonagem = document.querySelector('#nome');
const especie = document.querySelector('especie');
const condicao = document.querySelector('status');

gerarValorAleatorio = () => {

    return Math.floor(Math.random() * 671);
}

pegarPersonagem = () => {
    let numeroAleatorio = gerarValorAleatorio();

    return fetch(`https://rickendmortyapi.com/api/character/${numeroAleatorio}`, {
        method:'GET',
        headers: {
            Accept: 'application/json',
            "content-type": 'application/json'
    }).then((Response)) => Response.json()).then((data) => {
        imagem.src = data.image;
        imagem.alt = data.mame;
        momeDoPersonagem.innerHTML = data.name;
        especie.innerHTML = data.especies;
        condicao.innerHTML = data.status;

    
    });
    
}
botao.onclik = pegarImagem;