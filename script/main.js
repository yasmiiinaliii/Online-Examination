//global varibals 
var q, a, b, c, d, qnum, f;
var iqnum = 0;
var questionsList = randomQuestions(questions)
var choices, choice;
var gradeArr = [];
var grade = 0;
var marklistcontainer, markIcon, questMarked;
var qm;
var Timer = _("timer")
var progBar = _("progBar")
var next = _('next')
var prev = _('prev')
q = _("quesHeader");
a = _("LA");
b = _("LB");
c = _("LC");
d = _("LD");
qnum = _('qnum');
f = _('f');



// get element by id shourtcut
function _(x) {
    return document.getElementById(x)
};

window.addEventListener("load", start, false);

//start function 
function start() {
    displayQuestion();
    startTimer(60);
}

// random questions function
function randomQuestions(arr) {
    var qList = [];
    while (qList.length < 10) {
        var r = arr[Math.floor(Math.random() * 10)];
        if (qList.indexOf(r) === -1) qList.push(r);
    }
    return qList;
}
var inp =document.querySelectorAll("input[type='radio']")


// displayQuestion
function displayQuestion() {
    for(let i=0;i<inp.length;i++){
        inp[i].checked=false;
    }
    check();
    q.innerHTML = questionsList[iqnum].quesHeader;
    a.innerHTML = questionsList[iqnum].answers[0].name;
    b.innerHTML = questionsList[iqnum].answers[1].name;
    c.innerHTML = questionsList[iqnum].answers[2].name;
    d.innerHTML = questionsList[iqnum].answers[3].name;
    qnum.innerHTML = iqnum + 1;
    markIconColor();
    prevNextColor();
   
}



//display next and prev question
function nextQus() {
    for(let i=0;i<inp.length;i++){
        inp[i].checked=false;
    }
    
    if (iqnum < questionsList.length -1) {
        iqnum++;
    }
    check();
    displayQuestion();
}


function prevQus() {
    for(let i=0;i<inp.length;i++){
        inp[i].checked=false;
    }
 
    console.log(iqnum);
    if (iqnum < questionsList.length && iqnum != 0) {
        iqnum--;
    }
    check();
    displayQuestion();
}


//next and prev btn color
function prevNextColor() {
    if (iqnum == 0) {
        prev.style.color = '#A3A3A8'
    } else {
        prev.style.color = '#6C63FF'
    }
    if (iqnum == 9) {
        next.style.color = '#A3A3A8'
    } else {
        next.style.color = '#6C63FF'
    }
}


//get question answer value from user
function getUserAnswersValue() {
    choices = document.getElementsByName("Capitals");
    choice = 0;
    for (var i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
            choice = choices[i].value;
        }
    }
    gradeArr[iqnum] = choice;
}
function check(){
    for(let i=0 ;i<inp.length;i++){
        if(inp[i].id==gradeArr[iqnum]){
            inp[i].checked=true;
        }
    }
}


//mark ques functoins
var markedQus;

function markeQuestion() {
    markIcon = _('mark');
    questMarked = document.getElementById(iqnum)
    if (questMarked) {
        questMarked.remove();
    } else {
        marklistcontainer = document.getElementById('mark-list-container-content');
        marklistcontainer.innerHTML += '<div class="marked-questions" id="' + iqnum + '" onclick="displayMarkQues(event)">Question ' + (iqnum + 1) + '</div>'
    }
    markIconColor()

}

function displayMarkQues(e) {
    iqnum = Number(e.target.id);
    displayQuestion();
}

function markIconColor() {
    questMarked = document.getElementById(iqnum)
    markIcon = _('mark');
    if (questMarked) {
        markIcon.style.color = '#6C63FF';
    } else {
        markIcon.style.color = 'black';
    }
}


//set timer
function startTimer(duration) {
    var timer = duration,
        minutes, seconds;
    var w = 0;
    var x = setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        Timer.textContent = minutes + ":" + seconds;
        w += 100 / duration;
        progBar.style.width = `${w}%`
        if (--timer < 1) {
            submit();
            clearInterval(x);
        }

    }, 1000)
}

// calcGrades function
function calcGrades() {
    for (var i = 0; i < questionsList.length; i++) {
        if (gradeArr[i] === questionsList[i].rightAnswer)
            grade++;
    }
}

// submite function
function submit() {
    calcGrades()
    console.log(grade)
    setCookie ("grade",grade,"10/10/2024")
    window.open("grade.html", "_self");
}



