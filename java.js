var board = [["", "", ""],
          ["", "", ""],
          ["", "", ""]];

var turn, sqrid, user, computer, row, col, temp;
const arr_length = 3;

$(document).ready(function player() {

    //listen whether the checkbox is filled 
    $(".checkbox").click(function () {
        if ($(this).is(":checked")) { //if checkbox is checked,then user gets the value of the checkbox
            user = $(this).val();
            turn = user; //turn is initialized with user,and computer is given !user
            computer = (user == 'X') ? 'O' : 'X';
        }
    })


    //square event listener

    $(".square").click(function () { //every square is captured and the id is taken into consideration,and hence stored in sqrid

        sqrid = $(this).attr("id"); //seeks the attribute from the square clicked
        playermove();
        if (checkwinner()) {
            alert(temp+ "Wins the game");

        }
        if (!isdraw()) {
            alert("DRAW");

        }

    })
    $(".reset").click(function () {
        resetboard();
    })




});
//player move
function playermove() {

    if ($("#" + sqrid).text() == "") //if the square is empty then place a move
    {
        $("#" + sqrid).text(turn); //now turn that is either X or O is appended into the square clicked
        row = getrow();
        col = getcol();
        board[row][col] = turn;
        temp = turn;
        turn = (turn == user) ? computer : user; //reverse the turn now
    } else {

    }
}

//get row number
function getrow() {
    return Math.floor(sqrid / arr_length);
}


//get column number
function getcol() {
    return (sqrid) % (arr_length);
}

function checkwinner() {
    //checking rows
    for (var i = 0; i < arr_length; i++) {
        if (board[i][0] != "" && board[i][0] == board[i][1] && board[i][1] == board[i][2])
            return true;
    }
    //checking columns
    for (var i = 0; i < arr_length; i++) {
        if (board[0][i] != "" && board[0][i] == board[1][i] && board[1][i] == board[2][i])
            return true;

    }
    if (board[0][0] != "" && board[0][0] == board[1][1] && board[1][1] == board[2][2]) {
        return true;
    }
    if (board[0][2] != "" && board[0][2] == board[1][1] && board[1][1] == board[2][0])
        return true;

    return false;

}
function isdraw(){
    for(var i=0;i<arr_length;i++){
        for(var j=0;j<arr_length;j++)
            {
                if(board[i][j]==""){
                    return true;
                }
            }
    }
    return false;
    
}


function resetboard() {

    $(".square").text(""); //make each of the square elements empty
    $(".checkbox").prop("checked", false);
    //make the radio button unchecked
    //clear everything
    user="";
    turn="";
    computer="";
    for(var i=0;i<arr_length;i++){
        for(var j=0;j<board[i].length;j++){
            board[i][j]="";
        }
    }
}
