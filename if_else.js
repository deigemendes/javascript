// condição if - Else 

let hora = 19; 


if (hora >= 8 && hora <= 12) 
{
   console.log("Bom dia ");

} else if (hora > 12 && hora < 18) {

    console.log("Boa Tarde"); 
}else {

    console.log("Boa NOite");
} ; 

// switch case 

console.log("Coondição Switch Case"); 

let  permissao = ""; 

switch (permissao) {

        case "comum":
        console.log("Usuário comum"); 
        break;  
       
         
        case "normal":
            console.log("Usuário normal"); 
            break; 

            default : 
            console.log("usuário desconhecido");

}

