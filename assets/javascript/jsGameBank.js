<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Trigger Random</title>

  <!-- Added link to the jQuery library -->
  <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>

  <!-- Added a link to Bootstrap-->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
  <script type="text/javascript">

</head>
<body>



$("input").keypress(function(){
    $("span").text(i += 1);
});




document.onkeyup = function(event) {
                document.getElementById("myID").innerHTML = startGame("Pick a letter");
  }
                // Determines which key was pressed
                var startGame = event.key;
                     // Alerts the key the user pressed (userGuess). FRMLY ALERT HERE


          
document.onkeypress = function(key_dtl) {
key_dtl = key_dtl || window.event; 
var uni_code = key_dtl.keyCode || key_dtl.which; 
var key_name = String.fromCharCode(uni_code); 
alert(key_name); 
}

//function myTry(name) {
    return "Good guess! " + name;
}
document.getElementById("demo").innerHTML = myTry("Johnny");

</script>

</body>
</html>

$("input").keypress(function(){
    $("span").text(i += 1);
});

document.onkeyup = function(event) {


		var wordAnswers = {
	"Mister Peanut" : “A car could strike her! So I took home the tick-covered pregnant stray wondering near Middleground Road. She was loved; had 8 pups. Here's one, 14, with an under bite and great, big ears.”, 
	"Campfire breakfast" : "Peter...",
	"Mercy Boulevard" : "St. Jo's blah, blah, blah, blah",
	"Kesuke Miyagi" : "Charater in 'Karate Kid' movie who had mercy on the bad guy...",
}


var alpha = [
"a", "b", "c," "d", "e", "f", "g," "h," "i," "j," "k," "l," "m," "n," "o," "p," "q," "r," "s," "t," "u," "v," "w," "x", "y, "z"]

var startGame = 

var wordAnswers = { "Mister Peanut" : "_ _ _ _ _ _   _ _ _ _ _ _",
			 	"Campfire breakfast" : "_ _ _ _ _ _ _ _   _ _ _ _ _ _ _ _ _",
			 		"Kesuke Miyagi" : "_ _ _ _ _ _   _ _ _ _ _ _ ",
			 		"Mercy Boulevard" : "_ _ _ _ _   _ _ _ _ _ _ _ _ _" };

console.log(Object.values(wordAnswers));

 var wordAnswers = { "Mister Peanut" : "_ _ _ _ _ _   _ _ _ _ _ _",
			 			"Campfire breakfast" : "_ _ _ _ _ _ _ _   _ _ _ _ _ _ _ _ _",
			 			"Kesuke Miyagi" : "_ _ _ _ _ _   _ _ _ _ _ _ ",
			 			"Mercy Boulevard" : "_ _ _ _ _   _ _ _ _ _ _ _ _ _" };

var wordHints = {"Mister Peanut" : "I saved a pregnant stray with many tics from the streets. <br>She had this precious pup, now age 14, with wonderfully big ears. <br>Guess his name to see him! <br>(2 words)",
			 			"Campfire breakfast" : "_ _ _ _ _ _ _ _   _ _ _ _ _ _ _ _ _",
			 			"Kesuke Miyagi" : "_ _ _ _ _ _   _ _ _ _ _ _ ",
			 			"Mercy Boulevard" : "_ _ _ _ _   _ _ _ _ _ _ _ _ _" };


			 			    function letterCheck() {
               	wordAnswers["Mister Peanut"] = "Mister Peanut";
               	check = wordAnswers.includes(userGuessUpper);
               	document.getElementById("demo")innerHTML = check;

               }; 

         1111111      here is mopre stuf i just cut:
                function letterCheck() {

               	wordPeanut  = "Mister Peanut";


               	 check = wordAnswers.includes(userGuessUpper);
               	document.getElementById("demo")innerHTML = check;

              

            };
 function letterCheck() {
               	wordAnswers["Mister Peanut"] = "Mister Peanut";
               	check = wordAnswers.includes(userGuessUpper);
               	document.getElementById("demo")innerHTML = check;

               }; 

  var pNut = 

  var userGuess = 

 if ("Mister Peanut".indexOf(userGuessUpper) > -1) 
 {
 	alert("yes");
 }





function letterCheck() {
               	wordAnswers["MISTER PEANUT"] = "MISTER PEANUT";
               	check = wordAnswers["MISTER PEANUT"].includes(userGuessUpper);
               	document.getElementById("demo").innerHTML = check;

               }; 


               if (wordAnswers["MISTER PEANUT"].indexOf(userGuessUpper) === -1){
          			alert("nope");
          		}


          		
              if (wordAnswers["MISTER PEANUT"].includes(userGuessUpper)){
               	document.getElementById("demo").innerHTML = ("oh");

               }; 
"&nbsp;" 

if (condition) {
    block of code to be executed if the condition is true
}
function myFunction() {
    var str = "MISTER PEANUT";
    var n = str.includes(userGuessUpper);
    document.getElementById("demo").innerHTML = n;


      : "_ _ _ _ _ _  &nbsp;  _ _ _ _ _ _",
			 			"Campfire breakfast" : "_ _ _ _ _ _ _ _   _ _ _ _ _ _ _ _ _",
			 			"Kesuke Miyagi" : "_ _ _ _ _ _   _ _ _ _ _ _ ",
			 			"Mercy Boulevard" : "_ _ _ _ _   _ _ _ _ _ _ _ _ _" }; 



//HTML from 0216 and earlier
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Hangman</title>
</head>
<body>
<style>
#myID {
		text-indent: 25px;
		font-size: 42px;
		color: skyblue;
	}

#myHints {
		text-indent: 25px;
		font-size: 42px;
		color: grey;

	}

#userLetter {
		text-indent: 25px;
		font-size: 42px;
		color: black;
	}

</style>
<script src="assets/javascript/game.js"></script> 
</script>
	
	<p><h1>Press any key to get started!</h1></p>
	<p id="myID"></p>

	<p> </p>
		<p id="myBG"></p>

	<p> </p>
		<p id="myHints"></p>

		<p> </p>
		<p id="userLetter"></p>

		<button onclick="myFunction()">Check here to see if your letter guess is good</button>

<p id="demo"></p>

		<p id="banco"></p>
		<hr>

</body>
</html>

<!--	<p><input id="scriptBox" type="text" onkeypress="return.runScript"/></p>
-->


i took this out. is that ok?   <script src="https://code.jquery.com/jquery.js"></script>
============================================================================
02-17-17




         // This FUNCTION is run whenever the user presses a key.
 
      //if("MISTER PEANUT")

	var words = ["MISTER PEANUT", "CAMPFIRE BREAKFAST", "KESUKE MIYAGI", "MERCY BOULEVARD"];
	var pNut = ["MISTER PEANUT",];
	var pNutLetters = ["M", "I", "S", "T", "E", "R", "P","E","A","N","U","T"];
	 
 var blanks = ["_ _ _ _ _ _  &nbsp;  _ _ _ _ _ _", "_ _ _ _ _ _ _ _ &nbsp;  _ _ _ _ _ _ _ _ _"];
	
var alpha = [
"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

 	var Guesses = 15

	//});
//document.getElementById("ganBtn").addEventListener("click", function(){
//document.getElementById("pPara").innerHTML = "_ _ _ _ _ _  &nbsp;  _ _ _ _ _ _";	});
 	document.getElementById("peauntb").addEventListener("click", function(){
	document.getElementById("pPara").innerHTML = "_ _ _ _ _ _  &nbsp;  _ _ _ _ _ _";
	document.onkeyup = function(event) {
     // Determines which key was pressed
                var userGuess = event.key;
                var letterGuess = userGuess.toUpperCase();
    // Alerts the key the user pressed (userGuess). FRMLY ALERT HERE
  document.getElementById("blanks").innerHTML = letterGuess;


  if(pNutLetters.indexOf(letterGuess) === -1){
  	Guesses--;
  	
  	document.getElementById("Guesses").innerHTML = Guesses;
	document.getElementById("letters").innerHTML = letterGuess;

  }
                  
    else if ( letterGuess === "A"){

alert("it's a");

      }
                  


  





 
//console.log("Borobudur".replace(/[ou]/, "a"));
// → Barobudur
//console.log("Borobudur".replace(/[ou]/g, "a"));
// → Barabadar

  // letterCheck("a");

       

//slpice that index [] and the player selection of array, replace



 //#got to change to another 

//slpice that index [] and the player selection of array, replace


	  //  document.getElementById("myHints").innerHTML = (wordHints["Mister Peanut"]); 
//console.log(Object.values(wordAnswers));
//THIS WORKS: console.log(wordAnswers["Mister Peanut"]);

//    document.getElementById("myHint").innerHTML = (wordHints["Mister Peanut"]);  	
//She was loved; had eight pups. Please guess the name her runt. He is fourteen with great big ears.
//I took home a pregnant stray with many tics.”

//var bg = ("A little background:");
//document.getElementById("myBG").innerHTML = ("Here's a little background:");

//if(user)
-------------------------------------------------------

  else if ( letterGuess === "A"){

alert("it's a");



function myFunction() {
  			     var filledA = document.getElementById("pPara").innerHTML; 
			    var res = filledA.replace(blanks[0], "_ _ _ _ _ _  &nbsp;  _ _ A _ _ _");
			    document.getElementById("pPara").innerHTML = res}
}