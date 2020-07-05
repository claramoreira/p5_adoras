class botaoGerenciador {
    
    constructor(texto, x, y, cena) {
        this.texto = texto;
        this.x = x;
        this.y = y;
        this.cena = cena;
        this.botao = createButton(this.texto);
        this.botao.mousePressed(() => this._alteraCena());
        this.botao.addClass('botao-tela-inicial');
        this.botao.id(this.cena);
    }

    draw() {
        this.botao.position(this.x, this.y);
        this.botao.center('horizontal');
    }

    _alteraCena() {
        // this.botao.remove();
        cenaAtual = this.cena;
    }
}