// VALIDADORES

// São usados para impedir que os espiritos de porco façam cagada quando utilizam o site;
// Exemplo: Em inputs de número você deve criar validadores para que estes inputs não aceitem letras ou caracteres especiais;


// Aqui você declara uma variável para receber o conteúdo de um id do HTML para ser usado na função.
const form = document.getElementById('form');
const inputNumero = document.getElementById('numero');


//Aqui será definida a função para executar a validação;

/*addEventListener = significa que considera um evento toda a interação do usuário.
submit = envia os dados do formulario com o método post para o corpo da pagina. 
*/

form.addEventListener('submit', function (event) {
    event.preventDefault();


/* Para transformar o conteudo do input em valor utiliza-se o ".value"; 
   Para que o valor possa ser utilizado devemos mandá-lo para outra variável;
   .trim faz com que todos os espaços desnecessários inseridos sejam removidos.*/
    const valor = inputNumero.value.trim();


/*isNaN = não é um número*/
//Alert= Joga uma mensagem de alerta no navegador
//Se o valor do input não for um número:
    if (isNaN(valor)) {
        alert('O valor digitado não é um número válido.!');

// Faz com que o campo fique vazio após a função terminar;
        inputNumero.value = '';

    }

//Se o valor do input for um número:

    else {
        alert('Número válido!');
        inputNumero.value = '';
    }
});


//OBS: inputs do form ja enviam uma mensagem de campo vazio automaticamente, caso não tenha deverá implementar na função;

import form from '../Carlos/conver_de_cumprimento'

function validação(){
    if(inputNumero === ''){
        alert('Campo vazio')
    } else{
        alert('prossiga')
    }
}

export default validação;