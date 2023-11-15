let banco = {
    conta: 5000,
    saldo: 2500,
    tipo: "conta corrente",
    agencia: 1234
}
    
function mostrarSaldo() {
    return banco.saldo
}

function depositar(valor) {
    return banco.saldo += valor;
}

function sacar(valor) {
    return banco.saldo -= valor;
}

function numeroConta() {
    return banco.conta
}

alert(mostrarSaldo());
alert(depositar(200));
alert(sacar(350));
alert(numeroConta());