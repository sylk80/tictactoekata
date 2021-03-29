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
});