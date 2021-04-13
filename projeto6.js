// programa de lista numero de asteriscos 

let valor = 10; 

geraasteriscos(valor); 

function geraasteriscos(numero){

    let asteriscos = ""

for(i=0; i <= numero; i++){
     
    asteriscos +="*" ;
    console.log(asteriscos);
}

}


// Programa para mostrar os numeros primos 

console.log('geracao de numeros primos ');

let valor2 = 10; 

geraprimos(valor2); 

function geraprimos(limite){

    for(let numero = 2; numero <= limite ; numero++){
        
            if(numeroprimo(numero)) console.log(numero); 

    }
     
}

function numeroprimo(numero){

    for(let divisor = 2; divisor < numero; divisor++){

        if(numero % divisor === 0) {
            
             return false;

        }

        return true; 

}
} 



// refatoração do programa de numeros primos 

