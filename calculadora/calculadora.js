function calculadora(){
    while(true){
        let resultado = 0.0;
        let operando1;
        let operando2;
        let operador;
        let operador_valido = true;

        operando1 = parseFloat( prompt("digite o primeiro numero: ") );
        operando2 = parseFloat( prompt("digite o segundo numero: ") );
        operador = prompt("Digite uma das operações( + - * / ) ") ;

        if ( operador === "+" ){
            resultado = operando1 + operando2;
        } else if ( operador === "-" ){
            resultado = operando1 - operando2;
        } else if ( operador === "*"){
            resultado = operando1 * operando2;
        } else if ( operador === "/" ){
            if (operando2 == 0){
                alert("Não é possivel dividir por zero");
                continua = prompt ("Digite sim para continuar e não para encerrar");
                console.log(continua);
                if (continua === "não"){
                    console.log("opção é não");
                    return
                }
            } else {
            resultado = operando1 / operando2;
            }
       
        } else {
            alert("Operador inválido");
            operador_valido = false;
            continua = prompt("Digite sim para continuar e não encerrar.")
            if( continua === "não" ){
                    return
            }
        }
        if( (operador != "/" || operando2 != 0) && (operador_valido != false) ) {
            alert("Resultado: " +
            operando1 + "  " + operador + "  " + operando2 + " = " + resultado);
        }
    }    
}