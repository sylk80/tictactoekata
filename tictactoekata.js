const tictactoekata = () => {
    let result = "";
    let table = [[" "," "," "],[" "," "," "],[" "," "," "]];
    for(let roundNumber = 0 ; roundNumber < 10; roundNumber++) {
        if(roundNumber === 0) {
            result += firstStep(table);
        } else {
            result += "\n";
            result += "Round " + roundNumber + " : \n";
            result += "Player X : \n";
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


module.exports =  { tictactoekata }