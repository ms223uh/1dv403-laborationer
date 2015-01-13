function TV(desk, wind){

var xhr = new XMLHttpRequest();

var showTV = document.createElement('div');
    showTV.classList.add("showTV");
    wind.main.appendChild(showTV);


var self = this;

this.wind = wind;
this.loadBar = wind.loadBar;




xhr.onreadystatechange = function(){
            
             
            
           if(xhr.readyState === 4 && xhr.status === 200){
                   
                  self.loadBar.parentNode.removeChild(self.loadBar);
                   
                   
                    var responsetext = xhr.responseText;
                showTV.innerHTML = responsetext;
                        
                       
                        
                        
                    }
            }
      
      xhr.open("GET", "http://homepage.lnu.se/staff/tstjo/labbyServer/rssproxy/?url="+escape("http://www.omtv.se/rss/justnu/"), true);
    xhr.send(null);
      
        }
    

