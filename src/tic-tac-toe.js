class TicTacToe {
	constructor () {
		this.symbol = 'x';
		this.field = [ [], [], [] ];
		this.winnerLines = [
			[ [ 0, 0 ], [ 0, 1 ], [ 0, 2 ] ],
			[ [ 1, 0 ], [ 1, 1 ], [ 1, 2 ] ],
			[ [ 2, 0 ], [ 2, 1 ], [ 2, 2 ] ],

			[ [ 0, 0 ], [ 1, 0 ], [ 2, 0 ] ],
			[ [ 0, 1 ], [ 1, 1 ], [ 2, 1 ] ],
			[ [ 0, 2 ], [ 1, 2 ], [ 2, 2 ] ],

			[ [ 0, 0 ], [ 1, 1 ], [ 2, 2 ] ],
			[ [ 0, 2 ], [ 1, 1 ], [ 2, 0 ] ]
		];
		this.isWinner = null;
	}

	getCurrentPlayerSymbol () {
		return this.symbol;
	}

	nextTurn ( row, cell ) {
		if ( !this.field[row][cell] ) {
			this.field[row][cell] = this.symbol;
			this.symbol = this.symbol === 'x' ? 'o' : 'x';
		}
	}

	isFinished () {
		return this.getWinner() || this.noMoreTurns() ? true : false;
	}

	getWinner () {
		let winner = '';
		let stop = false;

		for ( const i in this.winnerLines ) {

			if ( stop ) break;

			for ( const j in this.winnerLines[i] ) {
				const row = this.winnerLines[i][j][0];
				const cell = this.winnerLines[i][j][1];

				if ( this.field[row][cell] ) {
					winner += this.field[row][cell];

					if ( winner === 'xxx' ) {
						this.isWinner = 'x';
						stop = true;
					}

					if ( winner === 'ooo' ) {
						this.isWinner = 'o';
						stop = true;
					}
				}
			}

			winner = '';
		}

		return this.isWinner;
	}

	noMoreTurns () {
		return this.field.flat(2).length >= 9;
	}

	isDraw () {
		return !(this.getWinner () || !this.isFinished ());
	}

	getFieldValue ( row, cell ) {
		const value = this.field[row][cell];
		return value ? value : null;
	}
}

module.exports = TicTacToe;
