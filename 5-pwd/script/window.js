"use strict"


function Window(desktop, name, img, Class) {

    var self = this;
    this.desktop = desktop;

    var template = document.querySelector("#windowTemplate");
    var windowTemplate = template.content.querySelector(".windowContainer");
    this.wind = windowTemplate.cloneNode(true);

    var close = this.wind.querySelector(".close");
    this.title = this.wind.querySelector(".title");
    this.title.innerHTML = name;
    
    this.main = this.wind.querySelector(".windowMain");
    
    this.image = document.createElement("img");
    this.image.classList.add("titlePic");
    this.image.src = img;
    this.title.appendChild(this.image);
    close.onclick = function() {
        self.close();
    

        
    };
    
    
    this.loadImg = document.createElement("img");
this.loadBar = this.wind.querySelector(".statusBar");
this.loadImg.src = "pics/load.gif";
this.loadImg.className = "loader";
    
    this.loadBar.appendChild(this.loadImg);
    
    
    
    this.drag(this);
    
    
    
    
    this.wind.style.left = desktop.x + "px";
    desktop.x += 40;

    this.wind.style.top = desktop.y + "px";
    desktop.y += 40;
    
    if ((desktop.y + this.wind.offsetHeight) >= window.innerHeight - 420)
    {
        desktop.y = 50;
        this.wind.style.top = desktop.y + "px" ;
    }
    
    
    if ((desktop.x + this.wind.offsetHeight) >= window.innerHeight)
    {
        desktop.x = 5;
        this.wind.style.top = desktop.x + "px" ;
    }
    

    desktop.element.appendChild(this.wind);

    

    


    this.wind.onclick = function() {

        desktop.zindex += 1;
        self.wind.style.zIndex = desktop.zindex;

    };




}






Window.prototype.close = function() {
    this.desktop.element.removeChild(this.wind);
};

Window.prototype.getSize = function(bredd, hojd){
    
    var outside = {width: this.wind.clientWidth, height: this.wind.clientHeight};
    var inside = {width: this.main.clientWidth, height: this.main.clientHeight};
    
    var difference = {width: outside.width - inside.width, height: inside.height - inside.height};
    
    this.setSize(difference.width + bredd, difference.height + hojd);  
};

Window.prototype.setSize = function(width, height){
    this.wind.style.width =  width + "px";
    this.wind.style.height = height + "px";
};

var dragObj = null;


Window.prototype.drag = function(windowDrag) {

    function draggable(windDrag)

    {


        windDrag.wind;
        windDrag.wind.style.position = "absolute";


    }

    document.onmouseup = function(e) {
        dragObj = null;
    };

    document.onmousemove = function(e) {
        var x = e.pageX;
        var y = e.pageY;

        if (dragObj == null)
            return;

        dragObj.style.left = x + "px";
        dragObj.style.top = y + "px";
    };

    windowDrag.wind.onmousedown = function() {
        dragObj = windowDrag.wind;
    }

    
 
    
    

    
}; 