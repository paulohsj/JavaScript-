var num = [5, 8, 2, 9, 3]
/*
num.push(1)
console.log(num)
console.log (`Nosso vetor tem ${num.length} posições`)
console.log (`O primeiro valor do vetor é ${num[0]}`)

for (var pos=0;pos<num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
*/

for(var pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

var pos = num.indexOf(9)
    console.log (`O valor 9 está na posição ${pos}`)

