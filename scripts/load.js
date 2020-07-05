function preload() {

    imagemCenario = loadImage('imagens/cenario/back-cenario.png');
    imagemCenario2 = loadImage('imagens/cenario/horde.png');
    imagemCenario3 = loadImage('imagens/cenario/ground.png');
    imagemPersonagem = loadImage('imagens/personagem/adora_andando.png');
    imagemInimigo = loadImage('imagens/inimigos/soldier_andando.png');
    imagemInimigoGrande = loadImage('imagens/inimigos/robot_andando.png');
    imagemInimigoVoador = loadImage('imagens/inimigos/imp_voando.png');
    imagemGameOver = loadImage('imagens/assets/game-over.png');
    imagemVida = loadImage('imagens/assets/heart_etheria.png');

    flagImage = loadImage('imagens/assets/flag.png');

    imagemTelaInicial = loadImage('imagens/cenario/nightsky.png');

    fonteTelaInicial = loadFont('imagens/assets/shera.ttf');
    fontAventuras = loadFont('imagens/assets/PTSans-Regular.ttf');

    somDoJogo = loadSound('sons/trilha_jogo.mp3');
    somDoPulo = loadSound('sons/jump.mp3');
    somDaColisao = loadSound('sons/impact.wav');
    somGameOver = loadSound('sons/gameover.wav');

    fita = loadJSON('/public/fita/fita.json');

    leaderboard = loadStrings('scripts/placar.csv');


}