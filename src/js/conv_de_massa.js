function converterMassa(valor, de, para) {
    const unidades = {
        kg: 1000,
        g: 1,
        mg: 0.001,
        tonelada: 1.000000
    };

    const valorEmMassa = valor * unidades[de];

    return valorEmMassa / unidades[para];
}

    document.getElementById('btnConverter').addEventListener('click', (event) => {
    event.preventDefault();
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const unMedidaEntrada = document.querySelector('select[name="UnMedidaEntrada"]').value;
    const unMedidaSaida = document.querySelector('select[name="UnMedidaSaida"]').value;

    if (!isNaN(inputValue)) {
        const resultado = converterMassa(inputValue, unMedidaEntrada, unMedidaSaida);
        document.getElementById('resultConverted').innerText = ` ${resultado}  ${unMedidaSaida}`;

    } else {
        alert("Por favor, insira um valor válido.");
    }
})