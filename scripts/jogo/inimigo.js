class Inimigo extends Animacao {
    constructor(sprites, shape, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, velocidade, speed) {
        super(sprites, shape, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, speed);
        this.velocidade = velocidade;
        this.x = width;
    }

    move() {
        this.x = this.x - this.velocidade;
    }

    aparece() {
        this.x = width;
    }
}