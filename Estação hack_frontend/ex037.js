var nomeDoAluno = 'Jackson'
var nomesDosPresentes = ['Jackson', 'Tenorio', 'Silva']

function estavaPresenteNaAula(nomeDoAluno, nomesDosPresentes) {
    if (nomesDosPresentes.indexOf(nomeDoAluno) != -1) {
        return true
    } else {
        return false
    }
}