//Orrin Gauper


var count = 0;
var Qarray = [];
var current = -1;

function question(qtext, array){
    this.quest = qtext;
    this.answers = array;

}

function Submit(){
  if (document.getElementById("ans").value == ''){
    alert("You must enter an answer. ");
    return;
  }
  var qtext = document.getElementById("Qtext").value;
  var option1 = document.getElementById("Op1").value;
  var option2 = document.getElementById("Op2").value;
  var option3 = document.getElementById("Op3").value;
  var answer = document.getElementById("ans").value;

  var array = [option1, option2, option3, answer ];
  Qarray[count] = new question(qtext, array);
  count = count + 1;

  document.getElementById("Qtext").value = "";
  document.getElementById("Op1").value = "";
  document.getElementById("Op2").value = "";
  document.getElementById("Op3").value = "";
  document.getElementById("ans").value = "";
}





function Done(){
  for(var i = 0; i < count; i++){
    localStorage.setItem(('Q' + i) , Qarray[i].quest);
    localStorage.getItem('Q' + i);
      for(var j = 0; j < Qarray[i].answers.length; j++){
        if(j == 3){
          localStorage.setItem(('Q' + i + '_ans') , Qarray[i].answers[j]);}
        else  {
          localStorage.setItem(('Q' + i + '_op' + j) , Qarray[i].answers[j]); }
          }
      }
  localStorage.setItem('count' , count);
  window.location = 'page2.html';
}

function Load(){

  var list = document.getElementById("listDisplay");
  var count = localStorage.getItem('count');

  for(var i = 0; i < count; i++){
      var li = document.createElement("li");
      var form = document.createElement("form");
      var Qtext = document.createTextNode(localStorage.getItem('Q' + i));
      li.appendChild(Qtext);//Appends Question text to li element
      var ol = document.createElement("ol");
      ol.setAttribute("type", "A");
      li.appendChild(form);
      form.appendChild(ol);
      numArray = [0, 1, 2, 3];
      for(var j = 0; j < 4; j++){
        num = RandNUM(numArray);
        var Qli = document.createElement("li");

        var aPara = document.createElement("input");
        aPara.setAttribute("type", "radio");
        if(num == 3){
            var label = document.createTextNode(localStorage.getItem('Q' + i + '_ans'));
            aPara.setAttribute("name", 'ans' + i);
            aPara.setAttribute("id" , 'ans' + i);
            }
        else{
            var label = document.createTextNode(localStorage.getItem('Q' + i + '_op' + num));
            aPara.setAttribute("name", "Q" + i);
            aPara.setAttribute("id" , 'Q' + i + '_op' + num);
          }

        Qli.appendChild(label);
        Qli.appendChild(aPara);
        ol.appendChild(Qli);
    }

      list.appendChild(li);
    }

}

function RandNUM(numArray){
  if( numArray.length == 1 )
      return numArray[0];
var num = Math.floor(Math.random() * (numArray.length)  );
var newnum = numArray[num];
numArray.splice(num, 1);

return newnum;}

function CalcScore(){
  var score = 0;
  var count = localStorage.getItem('count');
  for(var i = 0; i < count; i++){
    if(document.getElementById('ans' + i).checked)
      score = score + 1;
  }
  score = (score / count * 100).toFixed(2);
  alert("Your score is: " + score + '%');
}
