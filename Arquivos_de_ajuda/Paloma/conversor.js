function converter() {
    const temp = parseFloat(document.getElementById('temperatura').value);
    const escala = document.getElementById('escala').value;
    let celsius, fahrenheit, kelvin;

    if (escala === 'C') {
        celsius = temp;
        fahrenheit = (celsius * 9 / 5) + 32;
        kelvin = celsius + 273.15;
    } else if (escala === 'F') {
        fahrenheit = temp;
        celsius = (fahrenheit - 32) * 5 / 9;
        kelvin = celsius + 273.15;
    } else if (escala === 'K') {
        kelvin = temp;
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
