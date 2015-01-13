"use strict"


window.onload= function(){
    
    var desk = new Desktop();
    
    
    
    desk.addApp("Gallery", "pics/gallery.png", Gallery);
    desk.addApp("Rss", "pics/rss.png", Rss);
    desk.addApp("TV", "pics/tv.png", TV);
    desk.addApp("Twitter", "pics/twitter.png", Twitter);
}