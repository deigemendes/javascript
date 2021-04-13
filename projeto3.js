// ler proporiedades de um objeto e retornar comente as que são strings 

const filme = {
   titulo : "Homem Aranha", 
   Ano : 2018, 
   Autor :  "Deige Mendes",
}

exibirprop(filme); 

function exibirprop(obj){

    for (prop in obj){
       
        if (typeof(obj[prop]) === 'string' ){

            console.log(prop,obj[prop]);
        }  


    }

}
