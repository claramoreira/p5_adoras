class Jogo {

    constructor() {
        this.indice = 0;
        this.mapa = fita.mapa;
    }

    setup() {

        cenario = new Cenario(imagemCenario, 1);
        horde = new Cenario(imagemCenario2, 5);
        ground = new Cenario(imagemCenario3, 1);
        personagem = new Personagem(8, 4, imagemPersonagem, 0, 30, 75, 100, 150, 200, 0.5);
        pontuacao = new Pontuacao();
        vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial);

        const inimigo = new Inimigo(8, 4, imagemInimigo, width, 30, 90, 120, 150, 200, 10, 0.5);
        const inimigoGrande = new Inimigo(8, 4, imagemInimigoGrande, width, 0, 200, 200, 150, 150, 10, 0.30);
        const inimigoVoador = new Inimigo(4, 4, imagemInimigoVoador, width, 200, 60, 80, 150, 200, 10, 0.25);

        inimigos = [];
        inimigos.push(inimigo, inimigoGrande, inimigoVoador);

        frameRate(30);

        somDoJogo.setVolume(0.1);
        somDoPulo.setVolume(0.5);

    }

    
    keyPressed(key) {
        
        if ((key == 'W' | key == 'w') & cenaAtual == 'jogo') {
            personagem.pula();
        }

        if ((key == 'P' | key == 'p') & (cenaAtual == 'gameover')) { 
            cenaAtual = 'telaInicial';
            game();
        }

        if ((key == 'P' | key == 'p') & (cenaAtual == 'jogo')) {
            cenaAtual = 'pause';
        }

        if ((key == 'x' | key =='X') & (cenaAtual == 'pause')) { 
            cenaAtual = 'jogo';
        }

        if ((key == 'P' | key == 'p') & (cenaAtual == 'intro')) { 
            if (!somDoJogo.isPlaying()) {
                somDoJogo.loop();
            }
            cenaAtual = 'jogo';
            game();
        }
    
    }
    

    draw() {

        const linhaAtual = this.mapa[this.indice];
        const inimigo = inimigos[linhaAtual.inimigo];
        const inimigoVisivel = inimigo.x < - inimigo.largura;

        inimigo.velocidade = linhaAtual.velocidade;
    
        cenario.exibe();
        cenario.move();

        horde.exibe();
        horde.move();

        ground.exibe();
        ground.move();

        vida.exibe();

        personagem.exibe();
        personagem.aplicaGravidade();
    
        pontuacao.exibe();
        pontuacao.adicionarPonto();
    
        inimigo.exibe();
        inimigo.move();
    
        if (inimigoVisivel) {
            this.indice++;
            inimigo.aparece();
            if (this.indice > this.mapa.length - 1) {
               this.indice = 0; 
            }
        }
    
        if (personagem.estaColidindo(inimigo)) {
            vida.perdeVida();
            personagem.tornarInvencivel();
            if (vida.vidas === 0) {
                somGameOver.play();
                somDoJogo.stop();
                cenaAtual = 'gameover';
            }
        }
    }
}