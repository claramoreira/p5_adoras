class Pause {
    
    constructor() {
    }

    draw() {
        this._imagemDeFundo();
        this._texto();
    }  

    _imagemDeFundo() {
        image(imagemTelaInicial, 0, 0, width, height);
    }

    _texto() {
        textFont(fonteTelaInicial);
        fill('#fff');
        strokeWeight(5);
        stroke('#b6e2eb');
        textSize(100);
        textAlign(CENTER);
        text('Game paused!', width/2, height/3);
        text('Your current score is', width/2, height/2);
        text(parseInt(pontuacao.pontos), width/2, height/3*2);

        textSize(60);
        text('Press X to resume', width/2, height*0.85);
    }


}