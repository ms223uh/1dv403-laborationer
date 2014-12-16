"use strict";

var quiz = {
    
    xhr : new XMLHttpRequest(),
    question : null,
  
    tries : 0,
    array : [],
    server : "http://vhost3.lnu.se:20080/question/1",
    
    init : function(){
        
       document.getElementById("submit").onclick = function(e){
          
          e.preventDefault();
          var field = document.getElementById("field");
          quiz.sendAnswer(field.value, quiz.question.nextURL);
       };
        
     quiz.contact(quiz.server);
    },
    
    
    contact : function(server){
        
        
        
        quiz.xhr.onreadystatechange = function(){
            
            
            
           if(quiz.xhr.readyState === 4 && quiz.xhr.status === 200){
                    
                    quiz.question = JSON.parse(quiz.xhr.responseText);
                    document.getElementById("question").innerHTML = quiz.question.question;
                
                
                
            }
            
        },
        quiz.xhr.open("GET", server, true);
        quiz.xhr.send(null);
        
    },
    
    sendAnswer : function(anw, server){
        
        
        quiz.tries++;
        
        var xhr2 = new XMLHttpRequest();
        
            xhr2.onreadystatechange = function(){
                
                if(xhr2.readyState === 4){
                    var message = JSON.parse(xhr2.responseText);
                    console.log(message);
                    
                    if(message.message === "Correct answer!"){
                        
                        document.getElementById("msg").innerHTML = "Rätt Svar!";
                        quiz.array.push(quiz.tries);
                        quiz.tries = 0;
                        
                        if(message.nextURL !== undefined){
                            
                            


                            
                            quiz.contact(message.nextURL);
                            
                            
                        }
                        
                        else{
                            
                            quiz.read();
                        }
                        
                    }
                    
                    else{
                        document.getElementById("msg").innerHTML = "Fel Svar!";
                        
                    }
                    
                }
                
            };
        
        var answer = JSON.stringify({answer: anw});
        xhr2.open("POST", server, true);
        xhr2.setRequestHeader("Content-Type", "application/json");
        xhr2.send(answer);
        
        
        
    }, 
    
    read : function(){
        
        var i = 0;
        
        document.getElementById("msg").innerHTML = "Grattis du vann!";
        
        
            for( i = 1; i < quiz.array.length + 1; i++){
               var p = document.createElement("p");
            document.getElementById("msg2").appendChild(p);
            p.innerHTML = "Fråga "+ i +": " + quiz.array[i -1];
            }
        document.getElementById("submit").disabled = true;
    },
    
    
};


window.onload = quiz.init;





