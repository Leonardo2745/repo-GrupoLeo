
// Aqui você declara uma variável para receber o conteúdo de um id do HTML para ser usado na função.
const form = document.getElementById('form');
const inputDias = document.getElementById('dias');
const resultado = document.getElementById('result');


//Aqui será definida a função para executar a validação;

/*addEventListener = significa que considera um evento toda a interação do usuário.
submit = envia os dados do formulario com o método post para o corpo da pagina. 
*/


form.addEventListener('submit', function (event) {
    event.preventDefault();

    
/* Para transformar o conteudo do input em valor utiliza-se o ".value"; 
   Para que o valor possa ser utilizado devemos mandá-lo para outra variável;
   parseFloat = faz com que sejam aceitos números com pontos flutuantes, ex: 1.5*/
    const dias = parseFloat(inputDias.value);
    
        const horas = dias * 24;
        

/*innerText = insere somente texto em um elemento html usando o seu id;
Ao inserir o conteúdo do texto deve ser usado ``;
Template String (${variável}= retorna em tempo real o conteúdo da variável);
*/

        resultado.innerText = `${dias} dias equivalem a ${horas} horas.`;

    // Faz com que o campo fique vazio após a função terminar;
        inputDias.value = '';
    }
);


