const form = document.getElementById('calc-form');
const inputMetro = document.getElementById('metro');
const resultado1 = document.getElementById('result1');
const resultado2 = document.getElementById('result2');
const resultado3 = document.getElementById('result3');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (inputMetro.value === '' && isNaN) {
        alert('Preencha o campo!')
    } else{
         const metros = parseFloat(inputMetro.value);
    
       const centímetros = metros * 100;
       resultado1.innerText = `${centímetros} cm`
      
        const milímetros = metros * 1000;
        resultado2.innerText = ` ${milímetros} mm`;
       
       
        const decímetros = metros * 10;
        resultado3.innerText = ` ${decímetros} dm`;
    }
        
    }
);
