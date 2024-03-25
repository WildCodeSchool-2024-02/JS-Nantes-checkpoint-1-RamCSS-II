/*
Écris une fonction avec deux paramètres. Ces paramètres sont des tableaux contenant des nombres **stockés sous forme de chaînes de caractères**.
Ta fonction doit renvoyer **un** tableau, où chaque élément est la somme des éléments des deux arguments correspondants (c'est-à-dire : le premier élément du tableau résultat est égal au premier élément du premier paramètre plus le premier élément du deuxième paramètre) .
Remarque : Si un élément est vide, il doit compter pour 0.
Ex: 
sumArr( ["1", "2", "3"], ["2", "4", "1"] ) should return ["3", "6", "4"]
sumArr( ["2", "7", "3"], ["2", "4", "9"] ) should return ["4", "11", "12"]
sumArr( ["2", "7", "3", "8", "2"], ["2", "4", "9"] ) should return ["4", "11", "12", "8", "2"]
sumArr( ["2", "5", "3"], ["2", "4", "9", "5", "5"] ) should return ["4", "9", "12", "5", "5"]
*/

function sumArr(arrayA, arrayB) {

  const minLength = Math.min(arrayA.length, arrayB.length);
  const maxLength = Math.max(arrayA.length, arrayB.length);
  console.log(minLength);



  const result = [];
  //  add both values while we have two of them
  for (let i = 0; i < minLength; i++) {

    // read both values
    A = parseInt(arrayA[i]);
    B = parseInt(arrayB[i]);

    result.push((A + B).toString());
  }

  // if we only have one value, push it directly
  for (let i = minLength; i < maxLength; i++) {
    // need to figure out whch is the shortest in order to know where to read the value from
    if (arrayA.length == minLength) {
      // arrayA is the small one, so push the rest of B
      result.push(arrayB[i].toString());
    } else {
      result.push(arrayA[i].toString());
    }
  }

  return result;
}

console.log(sumArr(["1", "5", "3", "4", "1", "7", "8"], ["2", "4", "1", "7", "8"]));

module.exports = sumArr;
