function gerarDezenas() {
    var array = Array()
    for (var i = 0; i < 6; i++) {
        array.push(Math.round(Math.random * 59) + 1)
    }
}