function calculaGostos(notas) {
    var nNaoGostaram = []
    var nMediano = []
    var nGostaram = []
    for (var i = 0; i < notas.length; i++) {
        if ((notas[i] == 0) || (notas[i] == 1)) {
            nNaoGostaram++
        } else if ((notas[i] == 2) || (notas[i] == 3)) {
            nMediano++
        } else {
            nGostaram++
        }
    }
    return [nNaoGostaram, nMediano, nGostaram]
}