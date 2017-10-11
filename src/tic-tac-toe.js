class TicTacToe {
    constructor() {
        this.winner = null;
        this.turn = 0;
        this.player = 'x';
        this.matrix = [[null,null,null],
        [null,null,null],
        [null,null,null]];
    }

    getCurrentPlayerSymbol() {
        return this.player;
    }

    nextTurn(row, col) {
        if(this.matrix[row][col] != null) {
            return;
        }
        this.turn++;
        this.matrix[row][col] = this.player;
        if(this.winner == null) {
            for(var i = 0; i < 3; i++) {
                if(this.matrix[i][0] + this.matrix[i][1] + this.matrix[i][2] == this.player + this.player + this.player) {
                    this.winner = this.player;
                    break;
                }
            }
        }
        if(this.winner == null) {
            for(var i = 0; i < 3; i++) {
                if(this.matrix[0][i] + this.matrix[1][i] + this.matrix[2][i] == this.player + this.player + this.player) {
                    this.winner = this.player;
                    break;
                }
            }
        }
        if(this.winner == null) {
            if(this.matrix[0][0] + this.matrix[1][1] + this.matrix[2][2] == this.player + this.player + this.player) {
                this.winner = this.player;
            } else if(this.matrix[0][2] + this.matrix[1][1] + this.matrix[2][0] == this.player + this.player + this.player) {
                this.winner = this.player;
            }
        }
        if(this.player == 'o') {
            this.player = 'x';
            return;
        }
        this.player = 'o';
    }

    isFinished() {
        return (this.turn == 9 && this.winner == null) == true || this.winner != null;
    }

    getWinner() {
        return this.winner;
    }

    noMoreTurns() {
        return this.turn == 9;
    }

    isDraw() {
        return this.turn == 9 && this.winner == null;
    }

    getFieldValue(row, col) {
        return this.matrix[row][col];
    }
}

module.exports = TicTacToe;
