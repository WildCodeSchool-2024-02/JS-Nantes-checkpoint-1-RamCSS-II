/*
Voici un exemple de tableau de personnes. Écris une fonction qui à partir d'un tableau similaire reçu en paramètre renverra un nouveau tableau,
lui-même contenant deux sous-tableaux :
- Le premier contient uniquement des femmes adultes
- Le second ne contient que des hommes adultes
(Étant donné qu'une personne est un adulte si elle a 18 ans ou plus)

const persons = [
  { name: 'Mary Poppins', age: 32, sex: 'female' },
  { name: 'Tony Stark', age: 36, sex: 'male' },
  { name: 'John Doe', age: 12, sex: 'male' },
  { name: 'Jane Doe', age: 6, sex: 'female' },
  { name: 'Maggie Simpson', age: 2, sex: 'female' },
  { name: 'Leonardo', age: 92, sex: 'male' },
  { name: 'Carla Moreau', age: 24, sex: 'female' },
  { name: 'Mickael Jackson', age: 17, sex: 'male' },
  { name: 'Penelope Milena', age: 27, sex: 'female' },
  { name: 'Homer Simpson', age: 45, sex: 'male' },
  { name: 'Leonardo Di Caprio', age: 42, sex: 'male' },
  { name: 'Carla Bruni', age: 54, sex: 'female' },
  { name: 'Lisa Simpson', age: 13, sex: 'female' },
  { name: 'Millie Bobby Brown', age: 15, sex: 'female' },
  { name: 'Penelope Cruz', age: 47, sex: 'female' },
];

*/

function findAdults(persons) {
  const adults = [[], []] // Etape 1 création d'un tableau avec 2 sous tableau 1 pour femmes adutes, 1 pour hommes adultes
  persons.forEach(function (trieAdulte) { // Etape 2 je parcours le tableau persons pour executer une instruction conditionnelle
    if (trieAdulte.age >= 18) {// je trie 1 premiere fois pour prendre que les adultes
      if (trieAdulte.sex === "female") {
        adults[0].push(trieAdulte); // si triAdulte >=18 + si triAdulte == female alors push dans le tableau, sous tableau index 0 ([[0],[1]])
      }
      else if (trieAdulte.sex === "male") { // idem pour les hommes sous tableau index 1
        adults[1].push(trieAdulte);
      }
    }
  });
  return adults; // j'appelle le tableau remplis
}
module.exports = findAdults;
