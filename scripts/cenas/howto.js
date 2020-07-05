class HowTo {

    constructor(){

    }

    draw() {        
        this._imagemDeFundo();
        this._texto();
        this._botao();
    }

    _imagemDeFundo() {
        image(imagemTelaInicial, 0, 0, width, height);
    }

    _texto() {

        textFont(fonteTelaInicial);
        fill('#fff');
        strokeWeight(5);
        stroke('#b6e2eb');
        textAlign(CENTER);


        textSize(150);
        text('Comandos', width/2, height/4);

        textFont('Georgia');
        textSize(50);
        fill('#fff');
        noStroke();
        text('[W] - pular', width/2, height/2.5 * 1);
        text('[W + W] - pulo duplo', width/2, height/2.5 * 1.2);
        text('[P] - pausar', width/2, height/2.5 * 1.4);
        text('[X] - retornar ao jogo', width/2, height/2.5 * 1.6);
    }

    
    _botao() {
        botaoVoltar.y = height / 7 * 5;
        botaoVoltar.draw();
    }

}