function lacofor(){
    let texto = "";

    for (let i = 0; i < 10; i++){
        texto += "O numero é " + i + "<br>";
    }
    console.log(i);

    document.getElementById("demo").innerHTML = texto;
}