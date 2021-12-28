const displayC = document.getElementsByClassName("display")[0];


function display(value){

    const resultado = document.querySelector(".display").innerHTML;
    document.querySelector(".display").innerHTML =resultado+value;  
}


function clearx(){
    displayC.innerHTML = "";
}


function apagar(){
   const resultado = displayC.innerHTML;
   document.querySelector(".display").innerHTML = resultado.substring(0, resultado.length -1);
}


function calcular(){
    const resultado = document.querySelector(".display").innerHTML;
    document.querySelector(".display").innerHTML = eval(resultado);

   
}