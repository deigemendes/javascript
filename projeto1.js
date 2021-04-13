// numero maior 

let resultado = max(2,10); 

console.log(resultado);

function max(numero1,numero2) {

  return numero1 >= numero2 ? numero1 : numero2; 

}

// fizz buzz

/* dividido por 3 buzz 
   dividido por 5 fizz
   divisivel por 3 e 5 fizzbuzz 
   nao é numero 
   não divisivel por 3 e 5 

*/ 

let resultado1 = fizzbuzz(3);

console.log(resultado1); 

function fizzbuzz(variavel){
    if(variavel % 3 === 0 && variavel % 5 === 0 ) { 

        return "fizzbuz"
    
    }

    if (variavel % 3 === 0) {
        return "buzz"; 
    } 
    if(variavel % 5 === 0 ) {

       return "fizz" ;
    }

    if(typeof variavel !== 'number') {

        return "não é um numero";
    }
    
    return variavel; 
};

// velocidade maxima acima de 70 
// a cada 5 km vc ganha 1 ponto 
// com 12 pontos sua carteira é suspendida 
// match.floor 

let verificacao = "" ; 

verificacao = verificacaovelocidade(86); 

console.log(verificacao); 

function verificacaovelocidade(valor){
     
    let pontos = 0; 

     valor = Math.floor(valor); 
     pontos = Math.floor(((valor - 70)/5));
     
     if(valor >= 70 && pontos > 12 ) { 
     
        return "carterira suspensa  - pontos :  " + pontos 

    } 
     if(valor >= 70) { 
     
         return "velocidade acima do permitido - pontos :  " + pontos 

     } 

       return "velocidade normal" 
}; 



