function transformaParaMaiusculo(palavras) {
    var array = Array()
    for (var i = 0; i < palavras.length; i++)
        array.push(palavras[i].toUpperCase())
    return array
}