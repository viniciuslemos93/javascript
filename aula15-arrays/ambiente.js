let valores = [3, 9, 6, 8]
console.log(`O vetor tem ${valores.length} elementos`)
console.log(`O primeiro valor do vetor é ${valores[0]}`)
/*for (let cont = 0; cont < valores.length; cont++) {
    console.log(`A posição ${cont} tem o valor ${valores[cont]}`)
}
/*Outro método mais simples para varrer o array em JS seria a estrutura de repetição abaixo (funciona apenas para arrays e objetos)*/
for (let cont in valores) {
    console.log(`A posição ${cont} tem o valor ${valores[cont]}`)
}
let pos = valores.indexOf(4)//Pesquisa o conteúdo dentro do vetor. O indexOf caso não encontre, ele retorna -1, daí testamos se o retorno localizou ou não o conteúdo pesquisado.
if (pos == -1) {
    console.log('Valor não encontrado!')
}else
    console.log(`O valor está na posição  ${pos}`)