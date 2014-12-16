"use strict"


function Window(desktop, name){
    
    var self = this;
    this.desktop = desktop;
    
    var template = document.querySelector("#windowTemplate");
    var windowTemplate = template.content.querySelector(".windowContainer");
    this.wind = windowTemplate.cloneNode(true);
    
    var close = this.wind.querySelector(".close");
    var title = this.wind.querySelector(".title");
    
    title.innerHTML = name;
    
    close.onclick=function(){
        self.close();
    };
    this.wind.style.left = desktop.x + "px";
    desktop.x += 20;
    
    this.wind.style.top = desktop.y + "px";
    desktop.y += 30;
    
    desktop.element.appendChild(this.wind);
    
    
}

Window.prototype.close = function()
{
    this.desktop.element.removeChild(this.wind);
};



