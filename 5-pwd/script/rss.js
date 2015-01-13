function Rss(desk, wind){

var xhr = new XMLHttpRequest();

var showRss = document.createElement('div');
    showRss.classList.add("showRss");
    wind.main.appendChild(showRss);


var self = this;

this.wind = wind;
this.loadBar = wind.loadBar;




xhr.onreadystatechange = function(){
            
             
            
           if(xhr.readyState === 4 && xhr.status === 200){
                   
                  self.loadBar.parentNode.removeChild(self.loadBar);
                   
                   
                    var responsetext = xhr.responseText;
                showRss.innerHTML = responsetext;
                        
                       
                        
                        
                    }
            }
      
      xhr.open("GET", "http://homepage.lnu.se/staff/tstjo/labbyServer/rssproxy/?url="+escape("http://www.dn.se/m/rss/senaste-nytt"), true);
    xhr.send(null);
      
        }
    

