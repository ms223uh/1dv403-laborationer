function Twitter(desk, wind){

var xhr = new XMLHttpRequest();

var showTweet = document.createElement('div');
    showTweet.classList.add("showTweet");
    wind.main.appendChild(showTweet);


var self = this;

this.wind = wind;
this.loadBar = wind.loadBar;




xhr.onreadystatechange = function(){
            
             
            
           if(xhr.readyState === 4 && xhr.status === 200){
                   
                  self.loadBar.parentNode.removeChild(self.loadBar);
                   
                   
                    var responsetext = xhr.responseText;
                showTweet.innerHTML = responsetext;
                        
                       
                        
                        
                    }
            }
      
      xhr.open("GET", "http://homepage.lnu.se/staff/tstjo/labbyServer/rssproxy/?url="+escape("http://twitrss.me/twitter_user_to_rss/?user=alias_herbert"), true);
    xhr.send(null);
      
        }
    

