let botao = document.querySelector ("#botao");
let mensagem =document.querySelector("#mensagem");

botao.addEventListener ( "click", e => {
    mensagem.textContent = "O impossível é só questão de opinião";
});