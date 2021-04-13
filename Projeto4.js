//verifica se o numero é multiplo de 3 e 5 e soma 


let acumulador = 0 

somar(10);

function somar(numero){

for (i=0; i <=  numero ; i++){

     if(i % 3 === 0 ){
       
        acumulador = acumulador + i; 

     }

}

for (a=0; a <=  numero ; a++){

    if(a % 5 === 0 ){
      
       acumulador = acumulador + a; 

    }

}


console.log(acumulador);

}