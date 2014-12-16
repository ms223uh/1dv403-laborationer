"use strict";

var BoardGame = {
    cols : 4,
    rows : 4,
    myGameObj : [],
    picOut : [],
    imgCount : 0,

    tries : 0,
    firstTry : null,
    secondTry : null,
    status : true,
    turnedCard : 0,
    pairs : 0,
    gameInProgress : false,
    text : '',
    
    
    init : function(){
        
        this.text = document.getElementById("text");
        var startGame = document.getElementById("startGame");
        var resetGame = document.getElementById("resetGame");
        startGame.addEventListener("click", function(e) {
            
            if(BoardGame.gameInProgress){
                return;
            }
            BoardGame.gameInProgress = true;
            BoardGame.StartGame();
            
        });
    },
    
    StartGame : function(){
        BoardGame.myGameObj = RandomGenerator.getPictureArray(BoardGame.rows, BoardGame.cols);

        var playbox = document.getElementById("playbox");

        //Skapar en tabell

        var table = document.createElement("table");
        table.className = "tableTag";

        for (var i = 0; i < BoardGame.rows; i++) {

            var tr = document.createElement("tr");
            tr.className = "trTag";

            for (var j = 0; j < BoardGame.cols; j++) {

                var td = document.createElement("td");
                td.className = "tdTag";

                var img = document.createElement("img");
                img.className = "imgTag";

                var a = document.createElement("a");

                //Laddar in bilderna i varje imgTag        

                a.href = "#";
                img.src = "script/cardBack.png";
                a.img = img;
                img.className = "pics/" + this.myGameObj[BoardGame.imgCount] + ".png";
                a.addEventListener("click", this.ClickPick);

                a.appendChild(img);
                td.appendChild(a);
                tr.appendChild(td);

                BoardGame.imgCount++;

            }
            table.appendChild(tr);

        }
        playbox.appendChild(table);


    },
    
    ClickPick : function(){
        
        if (BoardGame.status === true) {

            BoardGame.turnedCard += 1;
            this.img.src = this.img.className;
            this.removeEventListener("click", BoardGame.ClickPick);


            if (BoardGame.turnedCard === 1) {

                BoardGame.firstTry = this;
            }


            if (BoardGame.turnedCard === 2) {

                BoardGame.tries += 1;
                BoardGame.status = false;
                BoardGame.secondTry = this;
                BoardGame.turnedCard = 0;


                //Kollar om två bilder stämmer överrens med varandra

                if (BoardGame.firstTry.img.className === BoardGame.secondTry.img.className) {

                    BoardGame.status = true;
                    BoardGame.pairs += 1;


                    //Skriver ut hur många försök det tog att klara spelet  

                    if (BoardGame.pairs === BoardGame.myGameObj.length / 2) {

                        BoardGame.text.innerHTML = "Grattis! - Du klarade det på " + BoardGame.tries + " försök.";

                    }

                }


                else {

                    //Timer. Tiden det ska ta & vända ett kort, 1sek

                    setTimeout(function() {

                        BoardGame.firstTry.img.src = "script/cardBack.png";
                        BoardGame.secondTry.img.src = "script/cardBack.png";
                        BoardGame.firstTry.addEventListener("click", BoardGame.ClickPick);
                        BoardGame.secondTry.addEventListener("click", BoardGame.ClickPick);
                        BoardGame.status = true;


                    }, 1000);


                }

                //Räknar hur många par du har hittat

                if (BoardGame.pairs < BoardGame.myGameObj.length / 2) {
                    BoardGame.text.innerHTML = "Du har hittat: " + BoardGame.pairs + " par.";
                }

            }



        }
        
        
        
        
    }
};



window.onload = function() {
    BoardGame.init();
}






/*
window.onload = function() {

    //Skapar variabler    

    var cols = 4;
    var rows = 4;
    var myGameObj = [];
    var picOut = [];
    var imgCount = 0;

    var tries = 0;
    var firstTry = null;
    var secondTry = null;
    var status = true;
    var turnedCard = 0;
    var pairs = 0;
    var gameInProgress = false;

    //Skickar in värden i html/css

    var playbox = document.getElementById("playbox");
    var text = document.getElementById("text");
    var startGame = document.getElementById("startGame");
    var resetGame = document.getElementById("resetGame");

    //Gör en klickfunktion



    startGame.addEventListener("click", function(e) {

        if(gameInProgress){
            return;
        }
        gameInProgress = true;

        //Hämtar regler ifrån random.js vad det gäller RandomGenerator för bilderna


        myGameObj = RandomGenerator.getPictureArray(rows, cols);


        //Skapar en tabell

        var table = document.createElement("table");
        table.className = "tableTag";

        for (var i = 0; i < rows; i++) {

            var tr = document.createElement("tr");
            tr.className = "trTag";

            for (var j = 0; j < cols; j++) {

                var td = document.createElement("td");
                td.className = "tdTag";

                var img = document.createElement("img");
                img.className = "imgTag";

                var a = document.createElement("a");

                //Laddar in bilderna i varje imgTag        

                a.href = "#";
                img.src = "script/cardBack.png";
                a.img = img;
                img.className = "pics/" + myGameObj[imgCount] + ".png";
                a.addEventListener("click", clickPick);

                a.appendChild(img);
                td.appendChild(a);
                tr.appendChild(td);

                imgCount++;

            }
            table.appendChild(tr);





        }
        playbox.appendChild(table);






    })


    var clickPick = function() {



        if (status === true) {

            turnedCard += 1;
            this.img.src = this.img.className;
            this.removeEventListener("click", clickPick);


            if (turnedCard === 1) {

                firstTry = this;
            }


            if (turnedCard === 2) {

                tries += 1;
                status = false;
                secondTry = this;
                turnedCard = 0;


                //Kollar om två bilder stämmer överrens med varandra

                if (firstTry.img.className === secondTry.img.className) {

                    status = true;
                    pairs += 1;


                    //Skriver ut hur många försök det tog att klara spelet  

                    if (pairs === myGameObj.length / 2) {

                        text.innerHTML = "Grattis! - Du klarade det på " + tries + " försök.";

                    }

                }


                else {

                    //Timer. Tiden det ska ta & vända ett kort, 1sek

                    setTimeout(function() {

                        firstTry.img.src = "script/cardBack.png";
                        secondTry.img.src = "script/cardBack.png";
                        firstTry.addEventListener("click", clickPick);
                        secondTry.addEventListener("click", clickPick);
                        status = true;


                    }, 1000);


                }

                //Räknar hur många par du har hittat

                if (pairs < myGameObj.length / 2) {
                    text.innerHTML = "Du har hittat: " + pairs + " par.";
                }

            }



        }



    };




};
*/