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

const firstStep = (table) => {
    let result = "Game board creation...";
    result += "\n";
    result += drawTable(table);
    result += "Board Created."
    result += "The game will start with Player X\n";
    return result;
}

const gameStep = (table, roundNumber) => {
    let result = "\n";
    let player = nextPlayer(roundNumber);
    result += "Round " + roundNumber + " : \n";
    result += "Player " + player + " : \n";
    table = getNextStep(table, player);
    result += drawTable(table);
    result += "\n";
    return result;
}

const getNextStep = (table, player) => {
    let stepPlaced = 0;
    while(stepPlaced < 1) {
        let newX = Math.floor(Math.random() * 3);
        let newY = Math.floor(Math.random() * 3);
        if(table[newY][newX] === " ") {
            table[newY][newX] = player;
            stepPlaced++;
        }
    }
    return table;
}

const nextPlayer = (roundNumber) => {
    return  roundNumber % 2 === 0 ? "O" : "X";
}



module.exports =  { tictactoekata }