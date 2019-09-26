// $(document).ready(function(){
//     $("#next").click(function(){
//         $("#question").hide();
//          $("#answer").hide();
//     });
// })


// functionalities

let currentQuestion = -1;
let answer = '';
let score = 0;
getNextQues();

// getting the next question

function getNextQues(){
    $.getJSON('data.json',function(data){
        if(currentQuestion+1 < data.questions.length){
            currentQuestion += 1;
            document.getElementById('ques-div').innerHTML = data.questions[currentQuestion].question;
            document.getElementById('option1').innerHTML = data.questions[currentQuestion].options[0];
            document.getElementById('option2').innerHTML = data.questions[currentQuestion].options[1];
            document.getElementById('option3').innerHTML = data.questions[currentQuestion].options[2];
            document.getElementById('option4').innerHTML = data.questions[currentQuestion].options[3];
            answer = data.questions[currentQuestion].answer;
        }
    })
}


// next question function

$('#next').click(function(){
    getNextQues();
});

// previous question function

$('#prev').click(function(){
    if(currentQuestion >= 1){
        currentQuestion -= 2;
        getNextQues();
    }   
});

// checking answer correct or wrong

$('.checkAnswer').click(function(){
    var tempAns = $(this).text();
    console.log(tempAns);
    if(answer==tempAns){
        score += 1;
        console.log(score);

    }
    // else{
    //     alert("Oops! Wrong Answer")
    // }
});

$('#submit').click(function(){
    $('.exam-online').hide();
    $('#result-div').show();
    $('#next').hide();
    $('#prev').hide();
    $('#submit').hide();
    document.getElementById('score').innerHTML = score;
});