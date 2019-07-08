
//var me = false;
//var num = 10;

//var a = document.getElementById('questions');
//var b = document.getElementsByTagName('input');

/*var arrayq = new Array();
arrayq[0] = "First";
arrayq[1]= "second";
arrayq[2] = "Third";
arrayq[3] = "Fourth";
arrayq[4] ="Fifth";

//document.writeln("" +arrayq);

a.value = "" +arrayq; */

/*var arrayq = new Array(5);
arrayq = ["First question", "Second question", "First question", "First question","First question"];
var something = arrayq;

for (i=0 ; i<arrayq.length; i++){
		a.value = " " +arrayq[i];

}

*/
//var something1 = arraya
//for j =0, j<something1.lngth, j++
//a[i].value = +i
//b[j].value += j

//a.value = "bin";


//function show(){
/*	var b = document.getElementsByTagName('input');
for(i = 0; i < b.length; i++){
	b[i].value = "Button " +i;

	//document.write("AButtons" +i);
	
}*/ 
  	

//}


//document.write("Yayy");
/*var changea= document.getElementById("a");
var changeb= document.getElementById("b");
var changec= document.getElementById("c");
var changed= document.getElementById("d"); */


window.onload = function() {
	alert("You have four seconds to each question, click ok or press enter to start");	
	changequestion();
	setInterval(changequestion,4000);
}


var a = document.getElementById("a");
var b = document.getElementById("b");
var c = document.getElementById("c");
var d  = document.getElementById("d");

var questionchanger = document.getElementById("questions");
var questions = ["Start","What is JS", "What does document.getElementById do?", "Full meaning of DOM", "Full meaning of CSS", "You won!!!, Reload window to play again"];

var opta = ["", "A script", "Gets all html elements","Document Object Model",  "Correct Style Sheets",   ""];
var optb = ["", "a language", "starts the web app", "Director of management",  "Cursive Style Sheets", ""];
var optc = ["", "coffee", "ends the web app", "Divide Or Mime","Cascading Style sheets",""];
var optd = ["", "food","gets all elements with the id",  "Do or Mope", "Crime Style Sheets", ""];
var counter = 0;

var answer1 = ["a language" ];
var answer2 = ["gets all elements with the id"];
var answer3 = ["Document Object Model"];
var answer4 = ["Cascading Style sheets"];

function changequestion(){
		questionchanger.value = questions[counter];
		a.value = opta[counter];
		b.value = optb[counter];
		c.value = optc[counter];
		d.value = optd[counter];
	
		a.onclick = function() {
				alert("Are you sure?");	
				//a.style.backgroundColor = "#f0ad4e";
				//a.style.borderColor = "#eea236";
				for (var i = 0; i < answer3.length; i++) {
					if (answer3[i] == a.value){
						alert("Correct");
						break;
					}
					else{
					a.style.backgroundColor = "#843534";
					a.style.borderColor = "#a94442";
					a.style.color = "#fff";
					alert("Wrong, play again?");
					window.location.reload(true);
				
					}	
				}				
		}

		b.onclick = function () {
			alert("Are you sure?");	
			for (var i = 0; i < answer1.length; i++) {
				if (answer1[i] == b.value){
					alert("Correct");
				}
				else{
				b.style.backgroundColor = "#843534";
				b.style.borderColor = "#a94442";
				b.style.color = "#fff";
				alert("Wrong, play again?");
				window.location.reload(true);

				}
			} 
		}	

		c.onclick = function () {
			alert("Are you sure?");	
			for (var i = 0; i < answer4.length; i++) {
				if (answer4[i] == c.value){
					alert("Correct");
					break;
				}
				else{
				c.style.backgroundColor = "#843534";
				c.style.borderColor = "#a94442";
				c.style.color = "#fff";
				alert("Wrong, play again?");
				window.location.reload(true);
				}	
			}

		}

		d.onclick = function () {
			alert("Are you sure?");
			for (var i = 0; i < answer2.length; i++) {
				if (answer2[i] == d.value){
					alert("Correct");
					break;
				}
				else{
				d.style.backgroundColor = "#843534";
				d.style.borderColor = "#a94442";
				d.style.color = "#fff";
				alert("Wrong, play again?");
				window.location.reload(true);
				}	
			}
		}
		
		counter++;
		
}			

	















