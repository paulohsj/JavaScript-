function contar() {
    var ini = document.getElementById('txtini')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpas')
    var res = document.getElementById('res')

    if (passo.value.length == 0 || fim.value.length == 0 || ini.value.length == 0) {
        res.innerHTML = 'Impossivel contar!'
    } else {
            res.innerHTML = 'Contando: <br>'
            var i = Number(ini.value)
            var f = Number(fim.value)
            var p = Number(passo.value)
            if (p <= 0) {
                window.alert('Passo invalido! Considerando Passo 1')
                p = 1
            }

        if (i < f) {
            //Contagem crescente
            for(var c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            // Contagem regressiva
            for(var c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
            res.innerHTML += `\u{1F3C1}`
        }
    }




    //se, inicio menor ou igual ao fim soma mais 1 e testa dnv
    //se não (ou seja, maior que o fim) fim da logica
