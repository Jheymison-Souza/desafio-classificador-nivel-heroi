let nomeHero = "Aragorne"; // Variável para armazenar o nome do herói
let xpHero = 1500; // Variável para armazenar o nível de experiência do herói

let nivelHero; // Variável para armazenar o nível do herói

// Determina o nível do herói com base na XP
if (xpHero < 1000) {
  nivelHero = "Ferro";
} else if (xpHero >= 1001 && xpHero <= 2000) {
  nivelHero = "Bronze";
} else if (xpHero >= 2001 && xpHero <= 5000) {
  nivelHero = "Prata";
} else if (xpHero >= 5001 && xpHero <= 7000) {
  nivelHero = "Ouro";
} else if (xpHero >= 7001 && xpHero <= 8000) {
  nivelHero = "Platina";
} else if (xpHero >= 8001 && xpHero <= 9000) {
  nivelHero = "Ascendente";
} else if (xpHero >= 9001 && xpHero <= 10000) {
  nivelHero = "Imortal";
} else {
  nivelHero = "Radiante";
}

// Exibe a mensagem final
console.log(`O Herói de nome **${nomeHero}** está no nível de **${nivelHero}**`);