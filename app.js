const notaUm = document.getElementById("primeiraNota");
const notaDois = document.getElementById("segundaNota");
const notaTres = document.getElementById("terceiraNota");
const botaoResultado = document.getElementById("botaoCalculo");
const resultado = document.getElementById("resultado");

function mediaFinal() {
    const nota1 = Number(notaUm.value);
    const nota2 = Number(notaDois.value);
    const nota3 = Number(notaTres.value);
    const media = (nota1 + nota2 + nota3) / 3;

    if(media >= 7) {
        resultado.textContent = "Aprovado";
    } else {
        resultado.textContent = "Reprovado";
    }
}

botaoResultado.addEventListener("click", mediaFinal);