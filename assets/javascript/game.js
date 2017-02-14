
var words = {
	"Mister Peanut" : “A car could strike her! So I took home the tick-covered pregnant stray I found wondering near Middleground Rd. I de-ticked, loved her. Here is one of her puppies, a wonderful 14-year-old with an under bite and great, big ears.” 
	"Campfire breakfast" : "Peter..."
	"Mercy Boulevard" : ""
	"Honk! Honk!" : ""
}


var alpha = [
"a", "b", "c," "d", "e", "f", "g," "h," "i," "j," "k," "l," "m," "n," "o," "p," "q," "r," "s," "t," "u," "v," "w," "x", "y, "z"]

         // This FUNCTION is run whenever the user presses a key.

document.onkeyup = function(event) {

                // Determines which key was pressed
                var startGame = event.key;
                     // Alerts the key the user pressed (userGuess). FRMLY ALERT HERE
                document.getElementById("myID").innerHTML = startGame;

            }




//function myTry(name) {
    return "Good guess! " + name;
}
document.getElementById("demo").innerHTML = myTry("Johnny");