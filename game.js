player_1_name=localStorage.getItem("Player 1 ");
player_2_name=localStorage.getItem("Player 2 ");

player_1_score=0;
player_2_score=0;

document.getElementById("player1show").innerHTML=player_1_name+":";
document.getElementById("player2show").innerHTML=player_2_name+":" ;

document.getElementById("player1score").innerHTML=player_1_score;
document.getElementById("player2score").innerHTML=player_2_score;

document.getElementById("player_question").innerHTML="Question Turn"+"-"+player_1_name;
document.getElementById("player_answer").innerHTML="Answer Turn"+"-"+player_2_name;

function send(){

num1var=document.getElementById("num").value;
num2var=document.getElementById("num1").value;
a=parseInt(num1var)*parseInt(num2var);

question_word="<h4>"+num1var+"X"+num2var+"</h4>";
input_box="<br> Answer: <input type=number class='btn btn-info' id='checkin'"; 
check_button="<br><br> <button id=check onclick='check()'> Check </button>";

row=question_word+input_box+check_button;
document.getElementById("output").innerHTML=row;
document.getElementById("num").value="";
document.getElementById("num1").value="";

}

question_turn = "player1";
answer_turn = "player2";


function check()
{
    get_answer = document.getElementById("checkin").value;

    if(get_answer == a)  
    {
        if(answer_turn == "player1")
        {
            player_1_score = player_1_score +1;
            document.getElementById("player1score").innerHTML = player_1_score;
        }
        else 
        {
            player_2_score =player_2_score +1;
            document.getElementById("player2score").innerHTML = player_2_score;
        }
    }
    if(question_turn == "player1")
    {
        question_turn = "player2"
        document.getElementById("player_question").innerHTML = "Question Turn - " + player_2_name ;
    }
    else 
    {
        question_turn = "player1"
        document.getElementById("player_question").innerHTML = "Question Turn - " + player_1_name ;
    }

    if(answer_turn == "player1")
    {
        answer_turn = "player2"
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player_2_name ;
    }
    else 
    {
        answer_turn = "player1"
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player_1_name ;
    }

    document.getElementById("output").innerHTML = "";
}