
class Intro {

    constructor(){

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

        textSize(150);
        text('Fuja da Horda!', width/2, height/4);

        textFont('Georgia');
        textSize(40);
        fill('#fff');
        noStroke();
        text('São 2h da manhã e Adora simplesmente não consegue mais dormir. \n' +
            'Ela olha para a ponta da cama e vê Catra em um sono profundo. \n' +
            'Com cuidado, ela se levanta para não acordar a colega e, ao abandonar o quarto,\n' +
            'avança pelos corredores da Horda. \n\n' +
            'Algo está chamando Adora e, apesar de não saber porque, ela sabe que precisa\n' +
            'chegar à Floresta dos Sussurros.', width/2, height/3);

        textFont(fonteTelaInicial);
        fill('#fff');
        strokeWeight(5);
        stroke('#b6e2eb');
        textSize(100);
        textAlign(CENTER);

        textSize(70);
        stroke('#a30262');
        text('Aperte P para continuar', width/2, height/4 * 3.5);

    }

}