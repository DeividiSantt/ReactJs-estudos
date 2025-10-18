


function pedir(){
    const cardapio = {
        0: "Sorvete",
        1: "Suco",
        2: "Coca-Cola",
        3: "Agua gelada"
    };

    let pedido = prompt("Digite o número do seu pedido:\n0 - Sorvete\n1 - Suco\n2 - Coca-Cola\n3 - Água gelada");
    let pedidoContado = Number(pedido)

    if(isNaN(pedidoContado)){
        alert("Por favor, insira um numero valido.")
        return;
    }
        
    
    switch(pedidoContado){

        case 0:
        case 1: 
        case 2:
        case 3:
            alert(`Voce pediu um(a) ${cardapio[pedidoContado]}.`)
            break;
        default:
        alert("Ops! Não temos essa opção no cardapio")
    }
}