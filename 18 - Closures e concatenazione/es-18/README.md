# Closure - Exercise 5

Implementare la funzione `memoize` che, data in input la funzione per il calcolo del fattoriale, restituisce una closure che accetta come argomento un numero su cui eseguire la funzione per il calcolo del fattoriale, verifica se il risultato è già presente all'interno della variabile `cache`, se è presente restituisce immediatamente il risultato memorizzato precedentemente, altrimenti esegue la funzione passata come argomento e memorizza il risultato all'interno della variabile `cache`, così da servire il risultato cachato precedentemente qualora venga richiesto il fattoriale per lo stesso numero.

Esempio:
```
let factory = memoize(factorial);
console.log(factorial(10)); // Calculating result for 3628800
console.log(factorial(6)); // Fetching from cache for 720
console.log(factorial(5)); // Fetching from cache for 120
```

Se il valore è stato già calcolato precedentemente restituire una stringa `Fetching from cache for {valore_passato_in_input}`, altrimenti, se non è stato ancora calcolato, restituire una stringa: `Calculating result for {valore_passato_in_input}`. Inoltre modificare l'esempio in:
`
let factory = memoize(factorial);
console.log(factorial(10)); // Calculating result for 10
console.log(factorial(6)); // Calculating result for 6
console.log(factorial(5)); // Calculating result for 5
console.log(factorial(5)); // Fetching from cache for 5
`
