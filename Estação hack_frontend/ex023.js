var familia = ['Joana', 'Felipe', 'Gabriela', 'Carlos', 'Pedro', 'Bruno']
for (var i = 0; i < familia.length; i++) {
    if (familia[i] == 'Pedro') {
        console.log(familia[i] + ' Souza ')
        continue
    }
    console.log(familia[i] + ' Macedo ')
}