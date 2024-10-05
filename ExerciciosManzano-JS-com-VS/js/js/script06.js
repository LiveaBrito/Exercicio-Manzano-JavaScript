let contadora = 0
let numeros = ""

while(contadora<10){
    numeros +=contadora+ "<br>" //usando o comando .innerHTML -> para trocar o resultado de um para outro
    document.getElementById('numero').innerHTML = numeros
    contadora++
}