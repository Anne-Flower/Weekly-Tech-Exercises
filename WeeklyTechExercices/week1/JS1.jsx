// TEST1 => JS
// Sujet : Écrire une fonction qui prend en entrée un tableau d'entiers et renvoie le plus grand nombre pair. Si aucun nombre pair n'est trouvé, la fonction doit renvoyer null

// Input : [1, 2, 3, 4, 5]
// Output : 4

// Mon approche: la logique c'est que je veux boucler.
// Si le nombre est pair, je le mets dans le tableau seen,
// si j'en trouve un autre je le compare à celui qui est dans seen etc
// juqu'à trouver et retourner le plus grand nombre pair.
//j'initialise à null.
//For (initialisation; condition[ si i < nb total du tableau alors continu]; incrémentation)
//modulo pour trouver si reste ou pas donc pair ou pas...

const MaxEvenNumber = (numbers) => {
  let seen = null
  for (let i = 0; i < numbers.length; i++)
    if (numbers[i] % 2 === 0) {
      if (seen === null || numbers[i] > seen) {
        seen = numbers[i]
      }
    }
    return (
      seen
    )
}