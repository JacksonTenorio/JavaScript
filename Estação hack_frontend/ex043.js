var alunos = [170, 159, 151, 187, 156, 191, 165, 154, 167, 169, 171, 170, 160]

var grupoA = [159, 151, 156, 154]
var grupoB = [165, 167, 169, 160]
var grupoC = [170, 187, 191, 171, 170]

function zumbaClass(alunos) {
    for (var i = 0; i < alunos.length; i++) {
        if (grupoA[i] > 150 && alunos[i] <= 159) {
            grupoA.push(alunos[i])
        } else if (grupoB[i] > 159 && alunos[i] < 170) {
            grupoB.push(alunos[i])
        } else(grupoC[i] >= 170)
        grupoC.push(alunos[i])

    }
}