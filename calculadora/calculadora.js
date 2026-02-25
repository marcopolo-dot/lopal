function calculadora(){
    while(true){
        let resultado = 0.0;
        let operando1;
        let operando2;
        let operador;

        operando1 = parseFloat( prompt("digire o primeiro numero: ") );
        operando2 = parseFloat( prompt("digite o segundo numero: ") );
        operador = prompt("Digite uma das operações( + - * / ) ") ;

        if ( operador === "+" ){
            resultado = operando1 + operando2;
        } else if ( operador === "-" ){
            resultado = operando1 - operando2;
        } else if ( operador === "*"){
            resultado = operando1 * operando2;
        } else if ( operador === "/" ){
            resultado = operando1 / operando2;
        } else {
            alert("Operador inválido");
            return
        }
        
        alert("Resultado: " +
            operando1 + " " + operador + " " + operando2 + " = " + resultado);
        }
    }
