/*var nome = "Deni Akio";
var idade = 31;
var frase = "Brasil é muito top"
// alert("Bem vindo" + nome + ". Sua idade é " + idade);
alert(frase.replace("Brasil", "Cuba"))

var lista = ["maça", "pera", "laranja"];
lista.push("uva");

console.log(lista);
console.log(lista.toString);
console.log(lista.join(" - "));

var fruta = [{ nome: "maçã", cor: "vermelha" }, { nome: "uva", cor: "roxa" }];
alert(fruta[1].cor);


var count = 5;
while (count < 5) {
    console.log(count);
    count++;
}
var idade = prompt("Qual sua idade?");
if (idade >= 18) {
    alert("maior de idade");
} else {
    alert("menor de idade")
}
*/

function soma(n1, n2) {
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome);
}


//alert(soma(3, 2));
//alert(setReplace("Vai, Japão!", "Japão", "Brasil"));

function clicado() {
    document.getElementById("agradece").innerHTML = "<b>Obrigado por clicar!</b>";
    //alert("Obrigado por clicar");
}

function redireciona() {
    window.open("secadenanqui.com.br");
    window.location.href = "www.google.com.br";
}

function trocar(elemento) {
    elemento.innerHTML = "obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento) {
    elemento.innerHTML = "Passe o mouse aqui";
}

function load() {
    alert("Página carregada");
}

function funcaoChange(elemento) {
    console.log(elemento.value)
}