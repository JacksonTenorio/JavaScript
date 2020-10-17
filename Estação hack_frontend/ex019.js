var listaDeGanhos = [10, 30, -10, -5, -1, 40]
var totalNegativos = 0
var numeroDePosicoes = listaDeGanhos.length
for (var i = 0; i < listaDeGanhos.length; i++) {
    if (listaDeGanhos[i] < 0)
        totalNegativos++

}