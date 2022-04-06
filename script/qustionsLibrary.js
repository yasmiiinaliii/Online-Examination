function Question (id,quesHeader, answers , rightAnswer){
    this.id = id,
    this.quesHeader = quesHeader,
    this.answers = answers,
    this.rightAnswer = rightAnswer
}

function Answer (id,name){
    this.id = id,  
    this.name = name
}

var aCairo = new Answer ("A1","Cairo")
var aRabat = new Answer ("A2","Rabat")
var aAbouDhabi = new Answer ("A3","Abou Dhabi")
var aTripoli = new Answer ("A4","Tripoli")
var aRiyadh = new Answer ("A5","Riyadh")
var aKhartoum = new Answer ("A6","Khartoum")
var aBeirut = new Answer ("A7","Beirut")
var aJerusalem = new Answer ("A8","Jerusalem")
var aAmman = new Answer ("A9","Amman")
var aDoha = new Answer ("A10","Doha")


var q1 = new Question(1,"What is capital of Egypt?",[aCairo,aAbouDhabi,aBeirut,aDoha],"A")
var q2 = new Question(2,"What is capital of Morocco?",[aBeirut,aKhartoum,aRabat,aTripoli],"C")
var q3 = new Question(3,"What is capital of libya?",[aCairo,aAbouDhabi,aTripoli,aRabat],"C")
var q4 = new Question(4,"What is capital of United Arab Emarat?",[aRiyadh,aAbouDhabi,aKhartoum,aDoha],"B")
var q5 = new Question(5,"What is capital of  Lebanon?",[aBeirut,aAbouDhabi,aAmman,aJerusalem],'A')
var q6 = new Question(6,"What is capital of jordan?",[aCairo,aAbouDhabi,aBeirut,aAmman],'D')
var q7 = new Question(7,"What is capital of Saudi Arabia?",[aDoha,aRiyadh,aTripoli,aAmman],'B')
var q8 = new Question(8,"What is capital of Qatar?",[aCairo,aAbouDhabi,aAmman,aDoha],'D')
var q9= new Question(9,"What is capital of Sudan?",[aKhartoum,aAmman,aRabat,aDoha],'A')
var q10= new Question(10,"What is capital of Plastine?",[aAmman,aBeirut,aJerusalem,aCairo],'C')

var questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
