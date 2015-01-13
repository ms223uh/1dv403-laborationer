"use strict";

function Icon(desktop, name, img, Class, Gallery){
    var self = this;
    this.desktop = desktop;
    this.name = name;
    this.img = img;
    
    this.bar = document.querySelector(".menyBar");
    this.icon = document.createElement("img");
    this.icon.title = name;
    this.icon.className = name;
    this.icon.src = img;
    this.Class = Class;
    
     
    this.icon.onclick = function(){
        self.open();        
    };
    
    this.bar.appendChild(this.icon); 
}

Icon.prototype.open = function(){
    var wind = new Window(this.desktop, this.name, this.img);
    new this.Class(this.desktop,wind);
};

