// avaliação par ou impar 

exibirtipo(20); 


function exibirtipo(numero){

 for(i=1 ;i< numero ;i++){
    
    if (i % 2 === 0 ){
     
         console.log(i + " - par")
    }else{

        console.log(i + "- impar")
    }

 }; 


} ; 