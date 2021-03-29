const tictactoekata = () => {
    let result = "";
    let table = [[" "," "," "],[" "," "," "],[" "," "," "]];
    for(let roundNumber = 0 ; roundNumber < 10; roundNumber++) {
        if(roundNumber === 0) {
            result += firstStep(table);
        } else {
            result += gameStep(table,roundNumber);
        }
    }
    return result;
};

const drawTable = (table) => {
    let drawnTable = "";
    for(let indexY = 0; indexY < 3; indexY++) {
        for(let indexX = 0; indexX < 3; indexX++) {
          drawnTable += table[indexY][indexX];
          if(indexX < 2) {
              drawnTable += "|";
          } else {
              drawnTable += "\n";
          }
        }
        if(indexY < 2) {
            drawnTable += "-+-+-\n"
        }
    }
    return drawnTable;
}

let firstStep = (table) => {
    let result = "Game board creation...";
    result += "\n";
    result += drawTable(table);
    result += "Board Created."
    result += "The game will start with Player X\n";
    return result;
}

let gameStep = (table, roundNumber) => {
    let result = "\n";
    result += "Round " + roundNumber + " : \n";
    result += "Player " + nextPlayer(roundNumber) + " : \n";
    result += drawTable(table);
    result += "\n";
    return result;
}

let nextPlayer = (roundNumber) => {
    return  roundNumber % 2 === 0 ? "O" : "X";
}



module.exports =  { tictactoekata }