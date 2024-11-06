//votre code ici
function printNumbers (n) {


    let resultat = ""

    for ( i = 1; i <= n; i ++ ) {
        resultat += " " + i 
    }

    return resultat
}

console.log(printNumbers(5));

