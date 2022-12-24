function adicionar () {
    var num = document.getElementById('num')
    var res = document.getElementById('res')

    if (num.value.length == 0) {
        res.innerHTML = ('Verifique se inseriu os dados e tente novamente.')
    } else {
        res.innerHTML = (`O número inserido foi ${num}`)
    }









}