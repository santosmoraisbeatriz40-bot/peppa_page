let titulo = document.getElementById("titulo");
let texto = document.getElementById("texto");
let botao = document.getElementById("botao");
let tema = document.getElementById("tema");

botao.addEventListener("click", function() {

    texto.innerHTML = "Oink! Você clicou em mim!";

    titulo.style.color = "red";

});

tema.addEventListener("click", function(){

    document.body.classList.toggle("escuro");
});