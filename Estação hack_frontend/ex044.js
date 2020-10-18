var placas = [
    'RXB-2525', 'AKX-3333', 'ORO-7142', 'RXB-2525', 'AKX-3333', 'ORO-7142',
    'AKX-3333', 'RXB-2525', 'AKX-3333', 'AKX-3333', 'RXB-2525', 'AKX-3333', 'RXB-2525', 'AKX-3333', 'ORO-7142', 'AKX-3333', 'AKX-3333', 'RXB-2525',
    'AKX-3333', 'ORO-7142', 'ORO-7142', 'AKX-3333', 'AKX-3333', 'RXB-2525',
    'AKX-3333', 'AKX-3333', 'RXB-2525', 'AKX-3333', 'AKX-3333', 'RXB-2525',
    'AKX-3333', 'ORO-7142', 'ORO-7142', 'AKX-3333', 'ORO-7142', 'ORO-7142',
    'ORO-7142', 'RXB-2525', 'AKX-3333', 'AKX-3333', 'ORO-7142', 'ORO-7142',
    'AKX-3333', 'RXB-2525', 'AKX-3333', 'AKX-3333', 'RXB-2525', 'AKX-3333',
    'RXB-2525', 'AKX-3333', 'ORO-7142', 'AKX-3333', 'AKX-3333', 'RXB-2525',
    'AKX-3333', 'ORO-7142', 'ORO-7142', 'AKX-3333', 'AKX-3333', 'RXB-2525',
    'AKX-3333', 'AKX-3333', 'RXB-2525', 'AKX-3333', 'AKX-3333', 'RXB-2525'
]

function calcularNumeroDeEntradas(placa) {
    var cont = 0
    for (var i = 0; i < placas.length; i++) {
        if (placas[i] == placa) {
            cont++
        }
    }
    return cont
}

function calcularValorDevido(placa) {
    var numEntradas = calcularNumeroDeEntradas(placa)
    if (numEntradas <= 20) {
        return 10.00 * numEntradas
    } else {
        return (200 + (numEntradas - 20) * 5)
    }
}