// for in 


const pessoa = {
nome : "Deige",
idade : 33 

}; 

for(let chave in pessoa){

     console.log(chave,pessoa.nome); 

}; 

const cores = ["vermelho","amarelo","verde"] 

for(let indice in cores){

    console.log(indice,cores[indice]); 

}

// for of 

for(let cor of cores) {

    console.log(cor); 
}