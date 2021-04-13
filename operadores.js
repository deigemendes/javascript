// operadores 


// operadores de incremente 

let idade = 10; 

console.log(++idade); 

// valor de atribuição 

let teclado = 30 ; 

teclado += teclado; 

console.log(teclado);

// operadores de igualdade 
// igualdade estrita 

console.log(1 === 1 ); 
console.log("1" === 1); 

// igualdade solta 

console.log("igualdade solta ")
console.log(1 == 1) ; 
console.log(1 == "1"); 

//operador ternário 

console.log("Operadores ternários ");
let pontos = 130; 
let valor = 120;  

tipo = valor > pontos ? "premium" : "normal" ; 

console.log(tipo);

//operadores lógicos 
// e (&&)
console.log("Operadores logicos e ");
console.log(false && true); 

let maiordeidade = true; 
let carteiradetrabalho = false; 
let podeaplicar = maiordeidade && carteiradetrabalho;

console.log(podeaplicar); 

// ou (||)
console.log("Operadores logicos ou  ");

let maiordeidade2 = false; 
let carteiradetrabalho2 = false; 
let podeaplicar2 = maiordeidade2 || carteiradetrabalho2;

console.log(podeaplicar2); 

// NOT (!) 

console.log("Operadores logicos ! NOT ");

let candidatorecusado = !podeaplicar2;

console.log(candidatorecusado);

// comparação não boleano 

let corpadroa1 = ""; 
let corpadrao2 = "azul"; 

let resultado = corpadroa1 || corpadrao2 

console.log(resultado)

