"use strict"


function Start(desk){
    
    // Galleri
    var menyBar = document.querySelector(".menyBar");
    
    var myImage = document.createElement("img");
    myImage.src = "pics/gallery.png";
    
    menyBar.appendChild(myImage);
    
    
    myImage.addEventListener("click",function(){
         var wind = new Window(desk,"Galleri");
    });
    
    
    // Inställningar
    var myImage2 = document.createElement("img");
    myImage2.src = "pics/property.png";
    
    menyBar.appendChild(myImage2);
    
    
    myImage2.addEventListener("click",function(){
         var wind = new Window(desk,"Inställningar");
    });



    
}


