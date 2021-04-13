// media de notas  do alunos 
// A , B, C e D 

//variaveis 
let resultado = 0; 
const array = [70,60,10];

resultado = calculanota(array); 

console.log(resultado); 


function calculanota(notas){

      let valor = calculamedia(notas); 

      if (valor >= 80 ){

        return "A"

      }
      if (valor >= 70 ){

        return "B valor : " + valor 

      }
       
      return "C valor: " + valor  
}

function calculamedia(array){

let soma = 0; 

for(let valor of array) { 

     soma += valor; 
     }

return Math.floor(soma/(array.length));

}



