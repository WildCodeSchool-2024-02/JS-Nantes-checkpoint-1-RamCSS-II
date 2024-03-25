/*
Notre équipe de football participe à un tournoi dans lequel elle a joué 10 matchs.
Les résultats du match sont notés "3:0" : le premier chiffre est le nombre de buts de **notre** équipe ; le second est celui de l'autre équipe.
Pour connaître le score de notre équipe, nous suivons ces règles :
- Victoire : 3pts
- Nul : 1pt
- Défaite : 0pt
Étant donné un tableau avec les résultats des matchs, écris une fonction qui renverra notre score.
Pour exemple, si ta fonction recevait le tableau ci-dessous en paramètre, tu devrais obtenir 13 points.

["1:0", "2:0", "3:0", "4:4", "2:2", "3:3", "1:4", "2:3", "2:4", "3:3"]
*/

function getPoints(results) {// analyse le tableau par incrémentation de 0 à 10, chaque index done 1 score, score total = addition score, return results. Chaque tableau fait 10 matchs (index 0 à 9)
  let score = 0
  for (let i = 0; i < 9; i++) { //analyse le tableau par incrémentation de 0 à 10
    const [scoreNous, scoreEux] = results[i].split(":").map(Number); // je sépare chaque index du tableaux en scoreNous , scoreEux en enlevant le :
    if (scoreNous > scoreEux) { // Condition pour chaque situation : si chiffre de gauche > chiffre de droite =victoire ; si chiffre gauche = chiffre droite = nul ; si chiffre gauche < chiffre droite = défaite
      score = +3; // Victoire
    } else if (scoreNous === scoreEux) {
      score = + 1; // Nul
    } else if (scoreNous < scoreEux) {
      score = + 0; // Défaite
    }

    return score;// NE MARCHE PAAAAAAS
  }
}
console.log(getPoints(results));


module.exports = getPoints;
