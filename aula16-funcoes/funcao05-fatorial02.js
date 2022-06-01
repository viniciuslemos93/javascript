//RECURSIVIDADE
function fatorial(n) {
    if (n == 1) {//fatorial de 1 é 1
        return 1
    }else {
        return n * fatorial(n - 1)//Função chamando ela mesma.
    }
}
console.log(fatorial(5))
