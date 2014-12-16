"use strict";

window.onload = function() {

    var messageObject = {};
    var messages = [];
    var showMessage = document.getElementById("showMessage");
    var count = document.getElementById("Counter");
    

    var text = document.getElementById("text");

    var send = document.getElementById("send");

    send.addEventListener("click", function(e) {

        e.preventDefault();
if (text.value !== ""){
        messageObject = new Message(text.value, new Date());
        messages.push(messageObject);



        renderMessages(messages.length - 1);


}








    });

    var enter = document.getElementById("text");
    enter.addEventListener("keydown", function(e) {

        if (e.keyCode === 13 && !e.shiftKey) {
            e.preventDefault();
            if (text.value !== "") {
                messageObject = new Message(text.value, new Date());
                messages.push(messageObject);

                renderMessages(messages.length - 1);
                text.value = "";


            }


            else {
                console.log("Ingen text");
            }


        }



    });








    var renderMessages = function(messageID) {

        document.getElementById("Counter").innerHTML = "Antal meddelanden: " + messages.length;
        

        var textBox = document.createElement("div");
        textBox.className = "textBox";

        var text = document.createElement("p");
        text.className = "text";

        var clock = document.createElement("p");
        clock.className = "clock";





        text.innerHTML = messages[messageID].getHTMLText();
        clock.innerHTML = messages[messageID].getDateText();


        text.appendChild(clock);
        textBox.appendChild(text);


        showMessage.appendChild(textBox);









        // Ta bort meddelande

        var img = new Image(20, 20);
        img.src = "basketBin.jpg";
        text.appendChild(img);

        img.onclick = function() {
            var question = confirm("Vill du verkligen radera meddelandet?");

            if (question === true) {

                removeMessage(messageID);
              
            }
            else {
                return false;
            }


            document.getElementById("showMessage").innerHTML = "";

            for (var i = 0; i < messages.length; ++i) {

                renderMessages(i);
            }
if (messages.length === 0)
{
    count.innerHTML = "Antal meddelanden; 0";
}
        };


        // Se tid

        var clockTime = new Image(20, 20);
        clockTime.src = "clock.png";
        text.appendChild(clockTime);

        clockTime.onclick = function() {
            alert("Inlägget skapades " + messages[messageID].getDate());
        };



    };



    var removeMessage = function(id) {
        messages.splice(id, 1);


    }



};
