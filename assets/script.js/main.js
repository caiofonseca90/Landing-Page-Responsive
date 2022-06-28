const fundofoscoEl = document.querySelector('main');//elementos do html que chama a Main.
const fundofoscoElh = document.querySelector('header');//elementos do html que chama o Header.


const botaoEl = document.querySelector('.btnsend');
botaoEl.addEventListener('click', openForm);    

function openForm(){ // habilita o formulario e deixa opaco o fundo
    const formularioEl = document.querySelector("form");
    formularioEl.style.display = "block";
    fundofoscoEl.style = "opacity: 0.1";
    fundofoscoElh.style = "opacity: 0.1";    
}

const exitEl = document.querySelector('.exit');//busca o elemento que fecha a janela
exitEl.addEventListener('click', exit);// add o evento ao clikcar no elemento e chama a funçao responsavel

function exit(){ // fecha o formulario e volta ao fundo normal
    const formularioEl = document.querySelector("form");    
    formularioEl.style.display = "none";
    fundofoscoEl.style = "opacity: 1";
    fundofoscoElh.style = "opacity: 1";
}

// cria a variavel e chama o elemento que contem a lampada no HTML
const lampadaEl = document.querySelector('.lampimg');
lampadaEl.style.opacity = "0.8";
lampadaEl.addEventListener('mouseout', lampOn_Off); // atribui o evento a função especifica

function lampOn_Off(){ // alterna a opacidade da lampada e contorna com brilho
    if(lampadaEl.style = "display: block"){
            lampadaEl.addEventListener('mouseenter', function() {
            lampadaEl.style = "filter: drop-shadow(0px 0px 70px #daa520)";
            lampadaEl.style.opacity = "1";
        });
    }
}
//validar formulario

function validar(){
    const validnome = document.querySelector('.name'); //seleciona o campo do input 'nome'
    const validemail = document.querySelector('.email'); // seleciona o campo do input 'email'
    const alertTx = document.querySelector('.alert-text'); // variavel que irá exibir o texto de erro 
    const erro = document.querySelector('.alert-erro'); //seleciona o elemento que exibe a msg de erro 
    const alert = document.querySelector('.alert'); //seleciona o elemento que exibe a msg de erro
    
    if(validnome.value == "" && validemail.value == ""){ // verifica se há algo digitado nos campos
        erro.style.display = "block"; // caso não exibe o elemento que esta escondido 
        alertTx.innerHTML = "Preencha todos os campos"; // atribui o texto de acordo com o erro
        
        }else if(validnome.value == ""){// validação campo nome
            erro.style.display = "block";
            alertTx.innerHTML = "Preencha o campo: Nome !";
            
            
        }else if(validemail.value==""){ // validação campo email
            erro.style.display = "block";
            alertTx.innerHTML = "Preencha o campo: Email !";

        }else{ // caso não exista erro, mantem o elemento escondido
            erro.style.display = "none";
        }
}    


