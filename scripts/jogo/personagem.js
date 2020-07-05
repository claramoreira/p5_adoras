class Personagem extends Animacao {

    constructor(sprites, shape, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, speed) {
        super(sprites, shape, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, speed);

        this.yInicial = height - this.altura - this.variacaoY;
        this.y = this.yInicial;
        this.velocidadeDoPulo = 0;
        this.gravidade = 3;
        this.jump = 0;
        this.invencivel = false;
    }

    pula() {
        if (this.jump < 2) {
            this.jump++;
            this.velocidadeDoPulo = - 30;
            somDoPulo.play();
        }
    }

    aplicaGravidade() {
        this.y = this.y + this.velocidadeDoPulo;
        this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;

        if (this.y > this.yInicial) {
            this.y = this.yInicial;
            this.jump = 0;
        }
    }

    tornarInvencivel() {
        this.invencivel = true;
        somDaColisao.play();
        setTimeout(() => {
            this.invencivel = false
        }, 1000);
    }

    estaColidindo(inimigo) {
        
        if(this.invencivel) {
            return false;
        }

        const precisao = .7;
        const colisao = collideRectRect(this.x, this.y, this.largura * precisao, this.altura * precisao, 
                                        inimigo.x, inimigo.y, inimigo.largura * precisao, inimigo.altura * precisao);
        return colisao;
    }
    
}