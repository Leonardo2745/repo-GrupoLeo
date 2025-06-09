// Função para converter volumes
function converterVolume(valor, de, para) {
    const unidades = {
        litro: 1,
        ml: 0.001,
        m3: 1000,
        cm3: 0.001
    };

    const valorEmLitros = valor * unidades[de];

    return valorEmLitros / unidades[para];
}

    document.getElementById('btnConverter').addEventListener('click', (event) => {
    event.preventDefault();
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const unMedidaEntrada = document.querySelector('select[name="UnMedidaEntrada"]').value;
    const unMedidaSaida = document.querySelector('select[name="UnMedidaSaida"]').value;

    if (!isNaN(inputValue)) {
        const resultado = converterVolume(inputValue, unMedidaEntrada, unMedidaSaida);
        document.getElementById('resultConverted').innerText = ` ${resultado}  ${unMedidaSaida}`;

    } else {
        alert("Por favor, insira um valor válido.");
    }
})
