class Highscore {
    
    constructor() {
        for (let i = 1; i < leaderboard.length; i++) {
            players.push(leaderboard[i].substr(0, leaderboard[i].indexOf(','))); 
            scores.push(parseInt(leaderboard[i].substr(leaderboard[i].indexOf(',') + 1, leaderboard[i].length)));
        }
        // this.players = leaderboard.players;

        for (let i = 0; i < players.length; i++) {
            if (players[i] == 0 | players[i] == "") {
                players.splice(i, 1);
                scores.splice(i, 1);
            }
            if (scores[i] == 0 | isNaN(scores[i])) {
                scores.splice(i, 1);
                players.splice(i, 1);
            }
        }
    }

    draw() {
        textFont(fonteTelaInicial);
        fill('#fff');
        strokeWeight(5);
        stroke('#b6e2eb');
        textSize(100);
        textAlign(CENTER);
        this._imagemDeFundo();
        this._texto();
        this._botao();
        textSize(24);
        this.learderboard()
    }

    _imagemDeFundo() {
        image(imagemTelaInicial, 0, 0, width, height);
    }

    _texto() {
        textSize(150);
        text('Tela de Highscore', width/2, height/4);
    }

    _botao() {
        botaoVoltar.y = height / 7 * 5;
        botaoVoltar.draw();
    }

    learderboard() {
        for(let i = 0; i < players.length; i++) {
            text(players[i], width/2 - width/5, height/3 + height/12 * i);
            text(scores[i], width/2 + width/5, height/3 + height/12 * i);
        }
    }

}