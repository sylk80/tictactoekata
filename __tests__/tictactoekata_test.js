const  { tictactoekata } = require('../tictactoekata');


describe('Tic-tact-toe game should be...', function() {
describe('where the following rules are true, that..', function() {
    it('played by Player X and O', function() {
        let result = tictactoekata();
        expect(result).toContain("Player X");
    });
    it('an empty table is initialized at the beginning', function() {
        let result = tictactoekata();
        expect(result).toContain("Game board creation...");
    });
});
});