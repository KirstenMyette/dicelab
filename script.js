let dice= ['1', '2', '3', '4', '5', '6'];

document.addEventListener("DOMContentLoaded", function () {
    var button = document.createElement("button");
    button.innerText = "Generate Dice";
    document.body.appendChild(button);
    button.addEventListener("click", function () {
        diceInfo();
        // diceArray.push(new Die());
    });
//Creates dice and displays original "roll"
    function diceInfo() {
        this.div = document.createElement('div');
        document.body.appendChild(this.div);
        this.div.id = getRandom();
        this.div.innerText =  getRandom();
    }

    function getRandom() {
        return dice[Math.floor(Math.random() * dice.length)];
    }


var button = document.createElement("button");
button.innerText = "Roll Dice";
document.body.appendChild(button);
button.addEventListener("click", function () {
    Roll();
   
});

function Roll() {
    document.getElementsByTagName("div");
    // var dice = new Die ();
}

var button = document.createElement("button");
button.innerText = "Sum of Dice";
document.body.appendChild(button);
button.addEventListener("click", function () {

});

//closes dom content loaded
});


// new.dice (kanye.whatever)
//store dice in array(to access them all in a new flip)




