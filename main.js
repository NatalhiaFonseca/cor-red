function mudarCorDeFundo(){
    const corAleatoria = "#" + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = corAleatoria;
}

document.getElementById("mudarCorBotao").addEventListener("click", mudarCorDeFundo);