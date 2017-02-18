


         // This FUNCTION is run whenever the user presses a key.
 
      //if("MISTER PEANUT")

	var words = ["MISTER PEANUT", "CAMPFIRE BREAKFAST", "KESUKE MIYAGI", "MERCY BOULEVARD"];
	var pNut = ["MISTER PEANUT",];
	var pNutLetters = ["M", "I", "S", "T", "E", "R", "P","E","A","N","U","T"];
	 
 var blanks = ["_ _ _ _ _ _  &nbsp;  _ _ _ _ _ _", "_ _ _ _ _ _ _ _ &nbsp;  _ _ _ _ _ _ _ _ _"];
	var blankP = "_ _ _ _ _ _  &nbsp;  _ _ _ _ _ _";
var alpha = [
"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

 	var Guesses = 12;

	//});
//document.getElementById("ganBtn").addEventListener("click", function(){
//document.getElementById("pPara").innerHTML = "_ _ _ _ _ _  &nbsp;  _ _ _ _ _ _";	});
 	//document.getElementById("peauntb").addEventListener("click", function(){
	document.onkeyup = function(event) {
     // Determines which key was pressed
                	 
        		document.getElementById("pPara").innerHTML = blanks[0]; 
         	
				var userGuess = event.key;
                var letterGuess = userGuess.toUpperCase();
    // Alerts the key the user pressed (userGuess). FRMLY ALERT HERE
  document.getElementById("blanks").innerHTML = letterGuess;


  if (pNutLetters.indexOf(letterGuess) === -1){
  	Guesses--;
  	
  	document.getElementById("Guesses").innerHTML = Guesses;
	document.getElementById("letters").innerHTML = letterGuess;

  } else if ( letterGuess === "a"){

  	//var stringReplace =  
  //	string.replace(blankP, "_ _ _ _ _ _  &nbsp;  _ _ A _ _ _");
  		 
}
}
 
  		 
		
                  
  //replace(blanks[0], "_ _ _ _ _ _  &nbsp;  _ _ A _ _ _");

      //"_ _ _ _ _ _  &nbsp;  _ _ _ _ _ _"
          
            
//document.getElementById("demo").innerHTML = res;

  //(blanks[0]


	//replace(blanks[0], "_ _ _ _ _ _  &nbsp;  _ _ A _ _ _");    
 

  		// function myFunction() {
  		//	     var stringReplace = document.getElementById("pPara").innerHTML; 
		//	    var res = filledA.replace("_ _ _ _ _ _  &nbsp;  _ _ _ _ _ _", "_ _ _ _ _ _  &nbsp;  _ _ A _ _ _");
		//	    document.getElementById("pPara").innerHTML = res};

  


 
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