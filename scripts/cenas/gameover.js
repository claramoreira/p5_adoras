class GameOver {
    
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
        text('Adora foi capturada!', width/2, height/3);
        text('Pontos', width/2, height/2);
        text(parseInt(pontuacao.pontos), width/2, height/3*2);

        textSize(60);
        text('Aperte P para continuar', width/2, height*0.85);

    }


}