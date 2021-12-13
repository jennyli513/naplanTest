
$(document).ready(function(){
    applyPreferences();
});


var question = function(qImg, a1, a2, a3, a4, a)
    {
        this.qImg = qImg;
        this.a1 = a1;
        this.a2 = a2;
        this.a3 = a3;
        this.a4 = a4;
        this.a = a;
    }

var ques = [];
ques[0] = new question("images/q1.JPG", "Carmen’s string is longer than Sal’s string.",
                        "Carmen’s string is shorter than Sal’s string.",
                        "Carmen’s string is the same length as Sal’s string.",
                        "None of above", "Carmen’s string is longer than Sal’s string.");

ques[1] = new question("images/q2.JPG", "33 cents", "16 cents", "60 cents", "50 cents","60 cents");
ques[2] = new question("images/q3.JPG", "More students have brown eyes than black eyes.", 
                        "Less students have hazel eyes than grey eyes.", 
                        "Green is the most common eye colour.","Blue is the most common eye colour.",
                        "Blue is the most common eye colour.");
ques[3] = new question("images/q4.JPG","6","9","12","18", "18");
ques[4] = new question("images/q5.JPG", "Sunday", "Monday", "Tuesday", "Wednesday", "Monday");
ques[5] = new question("images/q6.JPG", "100", "90", "95", "80", "100");
ques[6] = new question("images/q7.JPG", "45","47","40","42","47");
ques[7] = new question("images/q8.JPG", "322", "326", "344", "346", "326");
ques[8] = new question("images/q9.JPG", "2","3","5","6", "3");
ques[9] = new question("images/q10.JPG", "quarter to 3", "quarter past 3", "quarter to 4", "quarter past 4",
                        "quarter to 4");
ques[10] = new question("images/q11.JPG", "13 grams", "14 grams", "15 grams", "16 grams", "15 grams");
ques[11] = new question("images/q12.JPG", "437 km", "4037 km", "4370 km",  "40 037 km", "4037 km");
ques[12] = new question("images/q13.JPG", "certain", "likely", "unlikely", "impossible", "likely");
ques[13] = new question("images/q14.JPG", "Henry has 12 apples and gets 6 more. How many apples does he have now?", 
                        "Henry has 12 apples. He shares them with 6 friends. How many apples does each friend get?",
                        "Henry has 12 friends. He buys 6 apples for each friend. How many apples does he buy?",
                        "Henry has 12 apples and gives 6 away. How many apples does he have now?",
                        "Henry has 12 friends. He buys 6 apples for each friend. How many apples does he buy?");
ques[14] = new question("images/q15.JPG", "Jack", "David", "Sam", "Tim","Jack");
ques[15] = new question("images/q16.JPG","50", "40", "9", "8", "9");
ques[16] = new question("images/q17.JPG", "A3", "C1", "C4", "D3", "D3");
ques[17] = new question("images/q18.JPG", "$6", "$7", "$24", "$54", "$6");
ques[18] = new question("images/q19.JPG", "85 cents", "90 cents", "95 cents", "$1.70","85 cents");
ques[19] = new question("images/q20.JPG", "51 – 38 = 13", "51 + 38 = 89", "38 – 51 = 13",  "38 – 13 = 25",
                        "51 – 38 = 13");
ques[20] = new question("images/q21.JPG", "Lina is most likely to win.", "Bess is most likely to win.", 
                        "Both are equally likely to win.", "All of above is wrong.", "Both are equally likely to win.");
ques[21] = new question("images/q22.JPG", "36", "37", "38", "39", "38");
ques[22] = new question("images/q23.JPG", "90", "99", "900", "909", "909");
ques[23] = new question("images/q24.JPG", "2 + 5 = ?", "? + 2 = 5", "5 – 2 = ?", "? = 5 – 2","2 + 5 = ?");
ques[24] = new question("images/q25.JPG", "5 centimetres", "6 centimetres", "9 centimetres", "14 centimetres",
                        "5 centimetres");
ques[25] = new question("images/q26.JPG", "48","28","14","38", "28");
ques[26] = new question("images/q27.JPG", "12","24","21","42", "21");
ques[27] = new question("images/q28.JPG", "1 gram", "10 grams", "1 kilogram", "10 kilograms","1 kilogram");
ques[28] = new question("images/q29.JPG", "19", "23", "33", "9", "23");
ques[29] = new question("images/q30.JPG", "3, 13, 23, 33","4, 7, 11, 16","6, 10, 14, 18", "8, 11, 14, 17",
                        "8, 11, 14, 17");

          
function doStart()
{
    let name = document.getElementById("txtName").value;
    if(isValidName(name))
    {
        $("#errorMsg").hide();
        window.location.href = "#page2";
        document.getElementById("welcome").innerHTML = "Welcome, " + name + "!";
    }
    else
    {
        document.getElementById("errorMsg").innerHTML = "Invalid name! Please enter 2 letters or more."
        $("#errorMsg").show();
        document.getElementById("txtName").focus;
    }
   
}

//global variables
let subArray = new Array(5); //array for random questions
let randomQuestion; //object
let random = 0;  //random numer
let upto = 0;  //question upto
let score = 0; //user score

let timeLeft = 10;
let count = 0;
let interval;

//start new game
function doNewGame()
{
    window.location.href = "#page3";
    $("#displayScore").hide();
    $("#nextStepBtns").hide();
    $("#theQuestion").show();
    $("#next").show();
    
    //reset the variable to 0 when restart new game
    count = 0;
    upto = 0;
    score = 0;

    for (let i= 0; i < 5; i++)
    {
        console.log("i:" + i);
        do{
            random = Math.floor(Math.random() * ques.length); 
            randomQuestion = ques[random];
        }while(subArray.indexOf(randomQuestion) != -1)
        console.log("num: " + random);
        subArray[i] =randomQuestion;
    }
    document.getElementById("num").innerHTML = "Question 1 of 5";
    document.getElementById("qImg").src = subArray[0].qImg;
    document.getElementById("a1").innerHTML=subArray[0].a1;
    document.getElementById("a2").innerHTML=subArray[0].a2;
    document.getElementById("a3").innerHTML=subArray[0].a3;
    document.getElementById("a4").innerHTML=subArray[0].a4;

    timeOut();//countdown timer
    
}

function checkAns(theAns)
{
    //when user clicked the answer, stop timer
    clearInterval(interval);

    let str ="";
    console.log("choose answer: " + theAns);
// console.log("ques answer: " + subArray[upto].a);

    if(upto < subArray.length) 
    {
        if(theAns == subArray[upto].a)
        {
            str += "Correct!";
            score ++;
        }      
        else
        str += "Incorrect!";

        $("#feedback").show();
        
        document.getElementById("feedback").innerHTML = str;
        
        upto ++;

    }
    else //when restart new game upto is greater than 5
    {
        upto = 0; // reset upto back to 0
        score = 0; // reset the score to 0
        if(theAns == subArray[upto].a)
        {
            str += "Correct!";
            score ++;
        }      
        else
        str += "Incorrect!";

        $("#feedback").show();        
        document.getElementById("feedback").innerHTML = str;        
        upto ++;
    } 

    //disable the radio buttons when one answer was selected
    $(":radio[name='radAns']").on('click', function(){
        $(":radio[name='radAns']").attr('disabled',true);
    });
   
}

function nextQes()
{ 
    //enable radio button
    $(":radio[name='radAns']").attr('disabled',false);

    //refresh the radio button
    $('input[name="radAns"]').attr('checked',false).checkboxradio('refresh', true);
    $("#feedback").hide();

    count = 0;
    clearInterval(interval);//clear timer from last question

    timeOut(); //start timer again

    if (upto < subArray.length)
    {
        document.getElementById("num").innerHTML = "Question " + (upto + 1) +" of 5";
        document.getElementById("qImg").src = subArray[upto].qImg;
        document.getElementById("a1").innerHTML=subArray[upto].a1;
        document.getElementById("a2").innerHTML=subArray[upto].a2;
        document.getElementById("a3").innerHTML=subArray[upto].a3;
        document.getElementById("a4").innerHTML=subArray[upto].a4;
    }

     if (upto == 5)
     {
        displayScore();
        clearInterval(interval);
     }
        
}

//set a countdown timer
function timeOut()
{   
    
    document.getElementById("countdown").innerHTML = "Timer: "+ (timeLeft - count);
    interval = setInterval('timer()', 1000);
}

function timer()
{
    count++;
    document.getElementById("countdown").innerHTML = "Timer: "+ (timeLeft - count);

    if(count == timeLeft) //when time out
    {
        upto ++;
       //go to next question
        nextQes();
        if (upto == 5)
        {
            displayScore();
            clearInterval(interval);
        }
    }
}

//function to display the user's score
function displayScore()
{ 
    
    $("#theQuestion,#feedback,#next").hide();
    $("#displayScore").show();
    if(score == 5)
    {
        $("#faceEmoji").attr("src","images/happyface.png");
        $("#score").html("Your Score is<br />100");
        $("#scoreAns").html("Congratulations! You pass the test!<br />");
        $("#info").html("Take your next step");

    }
    else if (score >= 3 & score <5)
    {
        $("#faceEmoji").attr("src","images/thinkingface.png");
        $("#score").html("Your Score is<br />" + (score*100/5));
        $("#scoreAns").html("Congratulations! You pass the test!<br />Take a breath, you are almost there!");
        $("#info").html("Take your next step");

    }
    else
    {
        $("#faceEmoji").attr("src","images/sadface.png");
        $("#score").html("Your Score is<br />" + (score*100/5));
        $("#scoreAns").html("Sorry! You fail the test!<br />Take a breath and work hard next time!");
        $("#info").html("Take your next step");
    }
    $("#nextStepBtns").show();
}
//display game description
function doDescription()
{
    window.location.href = "#page5";
    $("#displaySearchResults").hide();
}

//store the score
function doStore()
{
    if($("#storeScore").click)
    {
       var option = window.confirm("Would you like the application to store your score?");
       if(option) //when user choose yes
       {
           console.log("You choose yes!")
           let name = document.getElementById("txtName").value;
           //if restart new game, and user didn't input a name
           if(name.length == 0)
              name = prompt("Enter your name: ");

            console.log("name: " + name);
            score = (score*100)/5;
            time = getTime() + " " + getDate();
            console.log("name: " + name + ", score: " + score + ",time: " + time);

            //if there is no score stored in local storage
            if(localStorage.getItem("myAppScore") == null)
            {
                let myScoreArr = [];
                let myScore = {"name":name, "score":score, "time":time};
                myScoreArr.push(myScore);
                localStorage.setItem("myAppScore", JSON.stringify(myScoreArr));
                alert("Your score has been stored!");
                console.log("Your score has been stored!");

            }
            //if there are scores stored in local storage
            else
            {
                //retrieve the array
                let myScoreArr = JSON.parse(localStorage.getItem("myAppScore"));           
                try
                {
                    let myScore = {"name":name, "score":score, "time":time}; //create the object
                    myScoreArr.push(myScore);
                    localStorage.setItem("myAppScore", JSON.stringify(myScoreArr));
                    alert("Your score has been stored!");
                    console.log("Your score has been stored!");
                }
                catch(e)
                {
                    if(e == QUOTA_EXCEEDED_ERR)
                        console.log("You are out of local storage");
                    else
                        console.log("unknown error");
                }  
            }

       }
       else //when user choose no
       {
          console.log("You choose no !")
       }
    }

}
//display top five scores
function doTopScores()
{
    window.location.href = "#page4";
    let str ="";
    let retrieveScores = [];
    let retrieveData = localStorage.getItem("myAppScore");
    
    //console.log("retrieveScores.length" + retrieveScores.length);
    if(retrieveData === null)
    {
        str += "There is no score in the local storage!"
    }
    else
    {
        retrieveScores = JSON.parse(retrieveData);
        //sorted array in decending order according to the score
        retrieveScores.sort(function(x,y){
        return y.score - x.score;
        });

        str += "<table  align='center'>";
        //display top 5 scores
        for (let i = 0; i < retrieveScores.length; i++)
        {
            if(i < 5)
            {
                str += "<tr><td>No."+ (i+1) + "</td>"; 
                str += "<td>Name: "+ retrieveScores[i].name + "</td>";       
                str += "<td>Score: " + retrieveScores[i].score + "</td>";     
                str += "<td>Time: " + retrieveScores[i].time + "</td></tr>";   
            }
            else
               break;               
        }
        str += "</table>";
    }    
    document.getElementById("displayScores").innerHTML = str;

}

//when the search score button was clicked, the seach score page will be shown
function doSearch()
{
    window.location.href = "#page6";

}
//search scores by name
function searchAndDisplay()
{
    let name = document.getElementById("txtSearchName").value;
    let str = "";
    let retrieveScores = [];
    let found = false;
    //if user left blank
    if(name.trim().length == 0)
    {
        str += "Please enter name to search!";
    }
    else
    {
        let retrieveData = localStorage.getItem("myAppScore");
        //if there is nothing in local storage
        if(retrieveData === null)
        {
            str += "There is no score in the local storage!"
        }
        else
        {
            retrieveScores = JSON.parse(retrieveData);
            //sort array
            retrieveScores.sort(function(x,y){
            return y.score - x.score;
            });
            console.log("length: " + retrieveScores.length);
            str += "<table  align='center'>";
            for (let i = 0; i < retrieveScores.length; i++)
            {
                if(name.trim().toUpperCase() == retrieveScores[i].name.toUpperCase())
                {
                    found = true;
                    console.log("retrieve name: " + retrieveScores[i].name);
                    str += "<tr><td>Name: "+ retrieveScores[i].name + "</td>";       
                    str += "<td>Score: " + retrieveScores[i].score + "</td>";     
                    str += "<td>Time: " + retrieveScores[i].time + "</td></tr>";   
                }               
            }
            str += "</table>";
        

            if(found == false)
              str += "There is no score for " + name + "!";
        }

    }
    document.getElementById("displaySearchResults").innerHTML = str;
    $("#displaySearchResults").show();
}

function goUserPref()
{
    window.location.href = "#page7";
}
//set user preferences
function savePrefs()
{
    let bgColor = document.getElementById("txtBGColor").value;
    let color = document.getElementById("txtFontColor").value;
    let fontSize = document.getElementById("txtFontSize").value;

    console.log(bgColor + " " + color + " " + fontSize);

    try
    {     
        let myPrefs = {"bgColor":bgColor, "color":color, "fontSize":fontSize}; // create a JS Object
        localStorage.setItem("MyAppPrefs", JSON.stringify(myPrefs));
    } 
    catch (e)
    {
        if(e == QUOTA_EXCEEDED_ERR)
            console.log("You are out of local storage");
        else
        console.log("unknown error");
    }

    applyPreferences();
}
function applyPreferences()
{
    let bgColor ="#FFFFFF";
    let color ="#000000";
    let fontSize = "12";

    if (localStorage.getItem("MyAppPrefs"))
    {
        let myPrefs = JSON.parse(localStorage.getItem("MyAppPrefs"));
        console.log(myPrefs);
        // get the values from the object
        bgColor = myPrefs.bgColor;
        color = myPrefs.color;
        fontSize = myPrefs.fontSize;

        console.log("Retrieved: " + bgColor + " " + color + " " + fontSize);

    }

    $(".ui-mobile [data-role='page']").css({"background-color": bgColor, "color":color, "font-size":fontSize + "px"});

    //apply setting to the elements
    let backColor2 = document.querySelector("#txtBGColor");
    backColor2.value = bgColor;
    backColor2.select();
    let fontColor2 = document.querySelector("#txtFontColor");
    fontColor2.value = color;
    fontColor2.select();
    let fontSize2 = document.querySelector("#txtFontSize");
    fontSize2.value = fontSize;
}

function resetPrefs()
{
    if ('localStorage in window' && window.localStorage !== null)
    {
        try
        {
            let myPrefs = {"bgColor":"#FFFFFF", "color":"#000000", "fontSize":"12"};
            reset = localStorage.setItem("MyAppPrefs", JSON.stringify(myPrefs));
        }
        catch(e)
        {
            if(e == QUOTA_EXCEEDED_ERR)
                console.log("You are out of local storage");
            else
                console.log("unknown error");
        }
    }
    else
    {
        console.log("This browser does NOT support local storage!");
    }
    applyPreferences();
}


//function to get the time
function getTime()
{
    let now = new Date();
    let str = "";
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    if(minute < 10)
       str += "0" + minute;
    if(second < 10)
       str += "0" + second;
    
    str = hour + ":" + minute + ":" + second;
    console.log("time: " + str);
    return str;
}

function getDate()
{
    let now = new Date();
    let str = "";
    let date = now.getDate();
    let month = now.getMonth()+1;
    let year = now.getFullYear();

    str += date + "/" + month + "/" + year;
    console.log("date: " + str);
    return str;
}

//function to validate the name:
//Must enter letters
//minimum number of letter is two
function isValidName(name)
{
   let pattern = new RegExp(/^[A-Za-z]{2,}$/);
   name = name.replace(/\s/g, '');
   return name.match(pattern); 
}

//clear the user input and error msg when home button was clicked
function doClear()
{
    document.getElementById("txtName").value = "";
    $("#errorMsg").hide();
}
