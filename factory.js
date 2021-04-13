// criação de objetos com factory functions 

// camel case umDoisTres 

function criaCelular(marca,modelo,tamanho,valor){
   
    return{
          
        marca,
        modelo,
        tamanho,
        valor, 

        Liga() { 

            console.log("FAZENDO LIGACAO ... ")
        }



    }
   

}

const celular1 = criaCelular('nokia','3310',10,1000); 

console.log(celular1); 

// Constructor functions 
// Utilizado mais este modelo 
// Pascal Case 

function Celular(marca, modelo, tamanho, valor){

    this.marca = marca;
    this.modelo = modelo; 
    this.tamanho = tamanho; 
    this.valor = valor; 

    this.Ligar = function(){
        console.log("fazendo ligação ..... "); 

    }

}

const celular2 = new Celular('asus','asus 1235',150,300); 

console.log(celular2); 