function setup() {
    
    createCanvas(windowWidth, windowHeight);
    frameRate(40);

    botaoIniciar = new botaoGerenciador('Iniciar', width/2, height/2, 'intro');
    botaoHowTo = new botaoGerenciador('Como jogar', width/2, height/2, 'howto');
    // botaoHighscore = new botaoGerenciador('Highscore', width/2, height/2, 'highscore');
    botaoVoltar = new botaoGerenciador('Voltar', width/2, height/2, 'telaInicial');

    game();

    telaInicial = new Inicial();
    intro = new Intro();
    gameover = new GameOver();
    pause = new Pause();
    howto = new HowTo();

    cenas = {
        jogo,
        telaInicial,
        howto,
        intro,
        gameover,
        pause
    };
    
}

function game() {
    jogo = new Jogo();
    jogo.setup();
}

function keyPressed() {
    jogo.keyPressed(key);
}


function draw() {


    if (jogo === 0) {
        jogo = new Jogo();
    }
    // Controlando os botões do menu:
    if (cenaAtual == 'howto') {
        document.getElementById("telaInicial").style.display = "block";
        document.getElementById("howto").style.display = "none";
        document.getElementById("intro").style.display = "none";
    }
    else if (cenaAtual == 'telaInicial') {
        document.getElementById("telaInicial").style.display = "none";
        document.getElementById("howto").style.display = "block";
        document.getElementById("intro").style.display = "block";
    }
    else {
        document.getElementById("telaInicial").style.display = "none";
        document.getElementById("howto").style.display = "none";
        document.getElementById("intro").style.display = "none";
    } 

    cenas[cenaAtual].draw();

}
