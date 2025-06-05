function converter() {
    const temp = document.getElementById('temperatura');
    const escala = document.getElementById('escala').value;
    let celsius, fahrenheit, kelvin;

    if (temp.value === '' && isNaN) {
        alert('Preencha o campo!');
        return; 
    }

    const temp2 = parseFloat(temp.value);

    if (escala === 'C') {
        celsius = temp2;
        fahrenheit = (celsius * 9 / 5) + 32;
        kelvin = celsius + 273.15;
    } else if (escala === 'F') {
        fahrenheit = temp2;
        celsius = (fahrenheit - 32) * 5 / 9;
        kelvin = celsius + 273.15;
    } else if (escala === 'K') {
        kelvin = temp2;
        celsius = kelvin - 273.15;
        fahrenheit = (celsius * 9 / 5) + 32;
    }

    const resultado = `
        Celsius: ${celsius.toFixed(2)} °C<br>
        Fahrenheit: ${fahrenheit.toFixed(2)} °F<br>
        Kelvin: ${kelvin.toFixed(2)} K
    `;
    document.getElementById('resultado').innerHTML = resultado;
}
