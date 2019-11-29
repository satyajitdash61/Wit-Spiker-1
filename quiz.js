
 //var data ;
let currentQuestion = -1;
let answer = '';
let score = 0;
let arr=[];
var testdata;
$(document).ready(function(){
    $.ajax({
        url:'https://wit-spiker.herokuapp.com/api',
        
    }).done(function(data) {
        //this.data = dataNew;
        getNextQues(data);
        // $('#next').click(function(){
        //     getNextQues(data);
        // });
        $('.checkAnswer').click(function(){
            var tempAns = $(this).index();
            
            arr.push(tempAns);
            console.log(arr)
            getNextQues(data);
        });

       

        $('#submit').click(function(){
            $('.exam-online').hide();
            $('#result-div').show();
            $('#next').hide();
            $('#prev').hide();
            $('#submit').hide();
            for(let i=0;i<arr.length;i++){
                console.log("bye");
                if(parseInt(data[i].answer)=== arr[i]){
                    score+=1;
                    console.log("hi");
                }
            }
            console.log(score);
            document.getElementById('score').innerHTML = score;
        });
       
    }) 
})
       // console.log(this.data[0].question);


      // console.log(testdata);


function getNextQues(data){ 
    //function(data){
        
        if(currentQuestion+1 < 10){
            testdata=data;
            currentQuestion += 1;
            //document.getElementById('ques-div').innerHTML = data[currentQuestion].question;   
            $("#ques-div").text(data[currentQuestion].question);
            $("#option1").text(data[currentQuestion].options[0]);
            $("#option2").text(data[currentQuestion].options[1]);
            $("#option3").text(data[currentQuestion].options[2]);
            $("#option4").text(data[currentQuestion].options[3]);
            
        }
    //}
}













