function parimpar(n) {
    if (n%2 == 0) {
        return 'Par'
    } else {
        return 'Impar'
    }
} 

var res = parimpar(5)
console.log(res)


function soma (n1=0, n2=0) {
    return n1 + n2
} console.log(soma(2, 5))

function fatorial(n) {
    var fat = 1
    for (var c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}
console.log (fatorial(5))
// 5! = 5 x 4 x 3 x 2 x 1 = 120 
