"use strict"


function Desktop(Icon){
    
     this.element = document.querySelector("#main");
    this.x = 50;
    this.y = 50;
    this.zindex = 0;
    
    
    
}


Desktop.prototype.addApp = function(name, img, Class ){
    var icon = new Icon(this, name, img, Class);
};