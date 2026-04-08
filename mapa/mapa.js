function mapa(){
    const frutas = new Map();

    frutas.set("maçã", 500);
    frutas.set("banana", 300);
    frutas.set("laranja", 200);
    frutas.set("pera", 400);
    
    let preco = frutas.get("banana");

    console.log(preco);
}
mapa();