//Orrin Gauper

var count = 0;
var Qarray = [];

function question(qtext, array){
    this.quest = qtext;
    this.answers = array;

}

function Submit(){
  //var qtext = document.getElementById("Qtext").value;
  //localStorage.qtext = document.getElementById("Qtext").value;
  //setCookie("qtext", document.getElementById("Qtext").value, 100);
  //setCookie("option1", document.getElementById("Op1").value, 100);
  //setCookie("option2", document.getElementById("Op2").value, 100);
  //setCookie("option3", document.getElementById("Op3").value, 100);
  var option1 = document.getElementById("Op1").value;
  var option2 = document.getElementById("Op2").value;
  var option3 = document.getElementById("Op3").value;
  var answer = document.getElementById("ans").value;
  var array = [option1, option2, option3, answer ];
  Qarray[count] = new question(qtext, array);

  window.localStorage.setItem('qtext', document.getElementById("Qtext").value );
  var obj =  window.localStorage.getItem(Qarray[0]);
  count = count + 1;
  /*var h = document.createElement("li");
  var p = document.createElement("p");
  var t = document.createTextNode(Qarray[0].quest);
  var list = document.getElementById("listDisplay");
  h.appendChild(t);
  list.appendChild(h);
  var x = document.createTextNode("A. " + Qarray[0].answers[0]);
  p.appendChild(x);
  h.appendChild(p); */ 

  document.getElementById("Qtext").value = "";
  document.getElementById("Op1").value = "";
  document.getElementById("Op2").value = "";
  document.getElementById("Op3").value = "";
  document.getElementById("ans").value = "";
}



function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function Done(){
  //setCookie("Cookie", Qarray[0].quest, 100);
  window.location = 'page2.html';
 //var make = localStorage.getItem(Qarray[0]);
}

function Load(){
  //var make = getCookie("Cookie");
  //var newarray = localStorage.getItem(Qarray[0]);
    var h = document.createElement("li");
  var p = document.createElement("p");
  var t = document.createTextNode(localStorage.getItem(Qarray[0]));
  var list = document.getElementById("listDisplay");
  h.appendChild(t);
  list.appendChild(h)
}

