"use strict";


function Gallery(desk, wind){

var xhr = new XMLHttpRequest();
var array = [];
var self = this;

this.wind = wind;
this.loadBar = wind.loadBar;




xhr.onreadystatechange = function(){
            
             
            
           if(xhr.readyState === 4 && xhr.status === 200){
                   
                  self.loadBar.parentNode.removeChild(self.loadBar);
                   
                    array = JSON.parse(xhr.responseText);
                    
                    var content = self.wind.main;
                    
                    for(var i = 0; i < array.length; i++)
                    {
                    var image = document.createElement("img");    
                    image.src = array[i].thumbURL;
                    image.widht = array[i].width;
                    image.heigth = array[i].height;
                    image.picture = array[i].URL;
                    
                    var aTag = document.createElement("a");
                    var imageBox = document.createElement("div");
                    imageBox.className = "imageBox";
                    
                    aTag.href = "#";
                    aTag.url = array[i].URL;
                    
                    image.addEventListener("click", function(){
                        self.imageViewer(desk, this);    
                    });
                    
                    
                    imageBox.appendChild(image);
                    aTag.appendChild(imageBox);
                    content.appendChild(aTag);
                    
                    
                        
                       
                        
                        
                    }
            }
      
      
      
        }
    xhr.open("GET", "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/", true);
    xhr.send(null);
}


Gallery.prototype.imageViewer = function(desk, img, URL) {
    
    var image = document.createElement("img");
    image.src = img.picture;
    
   
    var showPic = new Window(desk,"Image Viewer", "pics/gallery.png");
    img.className = "imageViewerPic";
     
    showPic.loadBar.parentNode.removeChild(showPic.loadBar);
     
    showPic.main.appendChild(image);
    showPic.getSize(img.widht, img.heigth);
};