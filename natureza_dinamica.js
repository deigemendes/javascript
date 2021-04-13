// Objetos dinamicos  - em javascript todos os objetos são dinamicos 


const teclado =  {
     
    cor : 'preto',
    tipo : 'numerico', 
    marca : 'master print',  


}

teclado.velocidade = 5000 ;

teclado.trocarDPI = function() { 
    console.log('trocando DPI'); 
}

delete teclado.velocidade; 

console.log(teclado); 

// clonagem de objeto 


const novoobjeto = Object.assign({bateria: 'sim'},teclado); 

console.log(novoobjeto); 

// metodo diferente para clonar objetos. 

const novoobjeto2 = {...teclado}; 

console.log(novoobjeto2); 



