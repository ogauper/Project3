//Orrin Gauper

var count = 0;
var y = 0;
var x = 0;

function validate1(){
var entered = document.getElementById("answer1").value;
  if (entered == 27)
  {
    document.getElementById("answer1success").innerHTML = "Correct Answer!";
    var Output = document.getElementById("Feedback");
    x = document.getElementById("answer1error");
    y = document.getElementById("answer1success");
    Output.removeChild(x);
    Output.appendChild(y);



    //document.getElementById("answer1error").classlist.add("shown-message");


    count = count + 1;
    setCookie("AmntCorrect", count, 100);
  }

  else
  {

    document.getElementById("answer1error").innerHTML = "Wrong Answer!";

    var Output = document.getElementById("Feedback");
    y = document.getElementById("answer1success");
    x = document.getElementById("answer1error");

    Output.removeChild(y);
     Output.appendChild(x);


  }

}

function validate2(){
  var entered2 = document.getElementById("answer2").value;

  if (entered2 == 53)
  {

    Number(getCookie("AmntCorrect"));
    document.getElementById("answer2success").innerHTML = "Correct Answer!";
    count = Number(getCookie("AmntCorrect")) + 1;
    setCookie("AmntCorrect", count, 100);
  }

  else
  {
     document.getElementById("answer2error").innerHTML = "Wrong Answer!";
  }

}

function validate3(){
  var entered3 = document.getElementById("answer3").value;

  if (entered3 == 9)
  {
    document.getElementById("answer3success").innerHTML = "Correct Answer!";
    count = Number(getCookie("AmntCorrect"))+ 1;
    setCookie("AmntCorrect", count, 100);
  }

  else
  {
    document.getElementById("answer3success").remove;
    document.getElementById("answer3error").innerHTML = "Wrong Answer!";
  }

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
    return "0";
}

function Reset(){
  count = 0;
  setCookie("AmntCorrect", count, 100);

}

function calculate_Score(){
        var Showscore = getCookie("AmntCorrect");
        Showscore = (Showscore / 3 * 100).toFixed(2) + "%";
        alert("Your score is: " + Showscore);
}
