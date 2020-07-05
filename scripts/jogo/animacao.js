class Animacao {

    constructor(sprites, shape, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, speed) {
        this.sprites = sprites;
        this.shape = shape;
        this.imagem = imagem;
        this.largura = largura;
        this.altura = altura;
        this.x = x;
        this.variacaoY = variacaoY;
        this.y = height - this.altura - this.variacaoY; 
        this.larguraSprite = larguraSprite;
        this.alturaSprite = alturaSprite;
        this.index = 0;

        this.speed = speed;
        this.animation = [];

        for (let i = 0; i < sprites; i++) {
            let posx = (i%shape) * this.larguraSprite;
            let posy = (parseInt(i/shape)) * this.alturaSprite;
            let img = imagem.get(posx, posy, this.larguraSprite, this.alturaSprite);
            this.animation.push(img);
        } 
    }

    exibe() {
        let index = floor(this.index);
        //image(this.imagem, this.x, this.y, this.largura, this.altura, 
        //    (this.index%this.shape) * this.larguraSprite, (parseInt(this.index/this.shape))* this.alturaSprite, 
        //    this.larguraSprite, this.alturaSprite); 
        //image(this.imagem, this.x, this.y, this.largura, this.matriz[this.index][0], this.matriz[this.index][1], this.larguraSprite, this.alturaSprite);
        image(this.animation[index], this.x, this.y, this.largura, this.altura);
        this.anima(); 
    }

    anima() {
        this.index += this.speed;
        if (this.index >= this.sprites) {
            this.index = 0;
        }
    }
}