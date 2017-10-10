let diceArray = [];
var generate = document.querySelector("#generate");
var roll = document.querySelector("#roll");
var sum = document.querySelector("#sum");

var Die = function () {
    this.div = document.createElement('div');
    document.body.appendChild(this.div);
    this.value = Math.floor(Math.random() * 6 + 1);
    this.div.id =  this.value;
    this.div.innerText =  this.value;
}

Die.prototype.rolling = function (){
    this.div.value = Math.floor(Math.random() * 6 + 1);
    this.div.innerText = this.div.value;
}

//Doesn't work
// Die.prototype.roll = function(){
//     this.div.addEventListener("click", function (){ 
//         rolling();
//     });
//     this.div.addEventListener("dblclick", function() {
//         remove();
//  });
// }

//Doesn't work correctly (adds up too much if pressed more than once)
function getSum() {
    var sum = diceArray.reduce(function(a, b) {return a + b.value; }, 0);
    alert(sum);
}


document.addEventListener("DOMContentLoaded", function () {
generate.addEventListener("click", function () {
        diceArray.push(new Die);
    });

roll.addEventListener("click", function () {
    for (var i = 0; i < diceArray.length; i++) {
        diceArray[i].rolling();
    }
});

sum.addEventListener("click", function () {
   getSum();
});





//closes dom content loaded
});
