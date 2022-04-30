

/*evento de clique no  botao,
chamandoa  função quando clicar no botao*/
document.getElementById("botao").onclick = imc;




function imc()

{

/*armazenando o valor digitado dentro das variaveis */

    var peso =document.getElementById("peso").value;
    var altura=document.getElementById("altura").value;

    /*pegando a div que vai ficar escrito o resultado */

    let resultadoo = document.getElementById("resultadoo");
    let resultadoneg = document.getElementById("resultadoneg");



    /*precavendo erros*/

    //se não for numero 
    if (isNaN(peso) || isNaN(altura))
    {
       alert("digite um numero  válido");
       return;

     }   
     
    //se não digitar nada
    if ((altura  === '') ||  (peso ===  ''))
    {
        resultadoo.style.backgroundColor = "red";
        resultadoo.innerHTML = "Altura  e/ou peso  inválidos";

    }

    /*se o campo não for vazio*/
    if ((altura != '') && (peso != ''))
    {
     
    /*chamando a função que calcula imc */
    let resultado =calculaimc(peso,altura);
    
     


    /*mostrando o resultado e limitando a duas casas decimais */
    /*condições IMC*/
    if (resultado <18.5)
    {
        resultadoo.style.backgroundColor = "lightgreen";
        resultadoo.innerHTML = "Seu imc é  "+parseFloat(resultado).toFixed(2)+ "      (Abaixo do peso)";
    }
       
    if ((resultado >=18.5 ) && (resultado<=24,9))
    {
        resultadoo.style.backgroundColor = "lightgreen";
        resultadoo.innerHTML = "Seu imc é  "+parseFloat(resultado).toFixed(2)+ "      (Peso Normal)";
    }
    if ((resultado >=25) && (resultado <=29.9))
    {
        resultadoo.style.backgroundColor = "lightgreen";
        resultadoo.innerHTML = "Seu imc é  "+parseFloat(resultado).toFixed(2)+ "       (Sobrepeso)";
    }
    if ((resultado >=30) && (resultado <=34.9))
    {
        resultadoo.style.backgroundColor = "lightgreen";
        resultadoo.innerHTML = "Seu imc é  "+parseFloat(resultado).toFixed(2)+ "       (Obesidade grau 1)";
    }
    if ((resultado >=35) && (resultado <=39.9))
    {
        resultadoo.style.backgroundColor = "lightgreen";
        resultadoo.innerHTML = "Seu imc é  "+parseFloat(resultado).toFixed(2)+ "       (Obesidade grau 2)";
    }
    if (resultado >40)
    {
        resultadoo.style.backgroundColor = "lightgreen";
        resultadoo.innerHTML = "Seu imc é  "+parseFloat(resultado).toFixed(2)+ "       (Obesidade grau 3)";
    }
}
}



/*calculando imc */

function calculaimc( peso, altura)
{
    
    return peso /(altura*altura);

    

}