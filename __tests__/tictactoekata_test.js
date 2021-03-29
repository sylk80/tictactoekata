const  { tictactoekata } = require('../tictactoekata');


describe('Tic-tact-toe game should be...', function() {
describe('where the following should apply, that..', function() {
    it('the game is played by Player X and O', function() {
        let result = tictactoekata();
        expect(result).toContain("Player X");
    });
    it('an empty table is initialized at the beginning', function() {
        let result = tictactoekata();
        expect(result).toContain("Game board creation...");
    });
    it('minimum 5 rounds have to be played', function() {
        let result = tictactoekata();
        expect(result).toContain("Round 5");
    });
    it('Player X starts the game', function() {
        let result = tictactoekata();
        expect(result).toContain("Player X : ");
    });
});
    describe('where the game play is the follwoing: ', function() {
        it(' it starts with an empty board', function() {
            let result = tictactoekata();
            expect(result).toContain(" | | \n-+-+-\n | | \n-+-+-\n | | \n");
        });
        it(' players place marks randomly on the board', function() {
            let result = tictactoekata();
            expect(result).toContain("O|") ;
        });
        it(' if one player has 3 marks horizontally, the player wins', function() {
            let result = tictactoekata();
            if(result.indexOf("X|X|X") > 0) {
                expect(result).toContain("PLAYER X WON!") ;
            }
        });
    });
});