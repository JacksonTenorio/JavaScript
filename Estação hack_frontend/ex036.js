function maisBaratosQue(valor, precos) {
    return precos.filter(p => p <= valor);
}

function maisCarosQue(valor, precos) {
    return precos.filter(p => p >= valor);
}

function precosEntre(valorMenor, valorMaior, precos) {
    var maisBaratos = maisBaratosQue(valorMaior, precos)
    return maisCarosQue(valorMenor, maisBaratos)
}