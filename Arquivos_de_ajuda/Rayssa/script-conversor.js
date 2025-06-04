    // Função para converter volumes
    function converterVolume(valor, de, para) {
        const unidades = {
            litro: 1,
            ml: 0.001,
            m3: 1000,
            cm3: 0.001
        };

        // Converte o valor de entrada para litros
        const valorEmLitros = valor * unidades[de];

        // Converte de litros para a unidade de saída
        return valorEmLitros / unidades[para];
    }

    // Adiciona um evento de clique ao botão de conversão
    document.getElementById('btnConverter').addEventListener ('click' )
        const inputValue = parseFloat(document.getElementById('inputValue').value);
        const unMedidaEntrada = document.querySelector('select[name="UnMedidaEntrada"]').value;
        const unMedidaSaida = document.querySelector('select[name="UnMedidaSaida"]').value;

        if (!isNaN(inputValue)) {
            const resultado = converterVolume(inputValue, unMedidaEntrada, unMedidaSaida);
            document.getElementById('outValue').value = resultado.toFixed(3); // Exibe o resultado com 3 casas decimais
            document.getElementById('resultConverted').innerText = `Resultado: ${resultado.toFixed(3)} ${unMedidaSaida}`;
        } else {
            alert("Por favor, insira um valor válido.");
        }
