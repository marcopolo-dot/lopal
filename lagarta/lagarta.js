async function lagarta(){
    let lagarta = "( )( )( )(00)";
    let espaco = " ";
    let encolhida = "()(00)"

    function sleep(ms){
        return new Promise( resolve => setTimeout(resolve, ms));
    }
    
    for(let i = 0; i < 100; i++){
        lagarta = espaco + lagarta;
        encolhida = espaco + encolhida
        
        console.log(lagarta);
        await sleep (500);
        console.clear();
        console.log(encolhida)
        await sleep (500)
        console.clear()
    }
        
         }
        

            
            
        