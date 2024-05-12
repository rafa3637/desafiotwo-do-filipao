function calcularNivel(vitorias, derrotas) {
    // Calcula o saldo de ranqueadas
    const saldoVitorias = vitorias - derrotas;

    // Determina o nível com base no saldo de vitórias
    let nivel;
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    // Retorna o resultado
    return {
        saldoVitorias,
        nivel
    };
}

// Exemplo de uso
const resultado = calcularNivel(95, 20);
console.log(`O Herói tem saldo de ${resultado.saldoVitorias} e está no nível de ${resultado.nivel}`);
