class Inicial {
    
    constructor() {
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
        
        let letter = width/8.5 * 1.3;

        // "As aventuras de"
        textFont(fonteTelaInicial);
        textAlign(CENTER);

        textSize(letter/5);
        fill('#cebd53');
        noStroke();
        text('As anventuras de', width/2, height/3 * 1.20);


        // "Adora"

        textFont(fonteTelaInicial);

        textSize(letter);

        strokeWeight(5);
        
        stroke('#b6e2eb');
        fill('#f7f3f2');
        text('A', width/2 - letter*1.1, height/3 * 1.75);

        //fill('#ff9a56');
        stroke('#ff9a56');
        text('d', width/2 - letter/2, height/3 * 1.75);

        //fill('#fff');
        stroke('#fff');
        text('o', 1.008 * width/2, height/3 * 1.75);
        
        //fill('#d362a4');
        stroke('#d362a4');
        text('r', width/2 + letter/2, height/3 * 1.75);
        
        //fill('#a30262');
        stroke('#a30262');
        text('a', width/2 + letter, height/3 * 1.75);

    }


    _botao() {

        botaoIniciar.y = height / 7 * 5;
        botaoHowTo.y = height / 7 * 5.7;

        botaoIniciar.draw();
        botaoHowTo.draw();
    }

}