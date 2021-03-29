const tictactoekata = () => {
    let result = "Game board creation...";
    result += "\n";
    let table = [[" "," "," "],[" "," "," "],[" "," "," "]];
    result += drawTable(table);
    result += "Board Created."
    result += "The game will start with Player X\n";
    for(let roundNumber = 1 ; roundNumber < 10; roundNumber++) {
        result += "\n";
        result += "Round " + roundNumber + " : ";
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


module.exports =  { tictactoekata }