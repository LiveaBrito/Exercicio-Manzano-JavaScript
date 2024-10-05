let idade = parseInt(prompt("Digite a idade: "))

if(idade < 16) {
    alert("Você não pode votar")
}else if( idade < 18){
    alert("Voto Opcional")
}else{
    alert("Voto Obrigatório")
}