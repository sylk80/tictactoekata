const tictactoekata = () => {
    let result = "";
    let table = [[" "," "," "],[" "," "," "],[" "," "," "]];
    for(let roundNumber = 0 ; roundNumber < 10; roundNumber++) {
        if(roundNumber === 0) {
            result += firstStep(table);
        } else {
            let player = nextPlayer(roundNumber);
            table = getNextStep(table, player);
            result += gameStep(player,table,roundNumber);
            let winner = checkForHorizontalWin(table);
            if(winner !== null) {
                result += "PLAYER "+ player + " WON!"
            }
        }
        console.log(result);
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

const gameStep = (player, table, roundNumber) => {
    let result = "\n";
    result += "Round " + roundNumber + " : \n";
    result += "Player " + player + " : \n";
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

const checkForHorizontalWin = (table) => {
    let winner = null;
    if(table[0][0] === table[0][1] && table[0][1] === table[0][2]) {
        winner = table[0][0];
    } else if(table[1][0] === table[1][1] && table[1][1] === table[1][2]) {
        winner =  table[0][0];
    } else if(table[2][0] === table[2][1] && table[2][1] === table[2][2]) {
        winner =  table[0][0];
    }
    return winner;
}

const nextPlayer = (roundNumber) => {
    return  roundNumber % 2 === 0 ? "O" : "X";
}



module.exports =  { tictactoekata }