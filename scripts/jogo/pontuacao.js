class Pontuacao {
    
    constructor() {
        this.pontos = 0;
    }

    exibe() {
        stroke('#a30262');
        textAlign(RIGHT);
        fill('#fff');
        textSize(50);
        text(parseInt(this.pontos), width - 30, 50);
    }

    adicionarPonto(){
        this.pontos = this.pontos + 0.2;
    }

}