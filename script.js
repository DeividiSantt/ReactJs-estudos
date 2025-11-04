let nomes = [
    {nome: 'Matheus', idade: 18},
    {nome: 'Maria', idade: 25},
    {nome: 'henrique', idade: 15}
]



if(console.log(nomes.every(nome => nome.idade >= 18))){
    console.log("todos sao maiores de 18")
}else{console.log("alguem eh de menor")}