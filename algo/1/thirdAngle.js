/*
Écris une fonction qui, étant donné deux angles d'un triangle, renverra la valeur du troisième.
(Rappel : la somme des valeurs des trois angles dans un triangle est **toujours** 180°)
Ex: 
thirdAngle(90, 30) doit retourner 60
thirdAngle(20, 80) doit retourner 80
*/


function thirdAngle(a, b) {
 const angle = parseInt(180 - (a + b)); // retourne l'angle C
 if (angle >= 0){
 return angle;
 }
 else {
  return "un triangle ne peut pas avoir d'angle négatif :)";
 }
}

module.exports = thirdAngle;
