// variáveis de nome do herói e XP:
var nomeHeroi = "Julie";
var exp = 8777;

// estrutura de decisão:
var nivelHeroi;

if (exp < 1000) {
    nivelHeroi = "Ferro";
} else if (exp >= 1001 && exp <= 2000) {
    nivelHeroi = "Bronze";
} else if (exp >= 2001 && exp <= 5000) {
    nivelHeroi = "Prata";
} else if (exp >= 6001 && exp <= 7000) {
    nivelHeroi = "Ouro";
} else if (exp >= 7001 && exp <= 8000) {
    nivelHeroi = "Platina";
} else if (exp >= 8001 && exp <= 9000) {
    nivelHeroi = "Ascendente";
} else if (exp >= 9001 && exp <= 10000) {
    nivelHeroi = "Imortal";
} else {
    nivelHeroi = "Radiante";
}

// output:
console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivelHeroi + ".");