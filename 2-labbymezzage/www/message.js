function Message(message, date) 
{
    
    
    this.getText = function() 
    {
        return message;
    }
    
    
    this.setText = function(text) 
    {
        message = text;
        
    }
    



this.getDate = function() 
{
    return date;
}    

this.setDate = function(_date) 
{
 date = _date;  
}



Message.prototype.toString = function() 
{
    return this.getText()+" ("+this.getDate()+")";
}


Message.prototype.getHTMLText = function() 
{
 
return this.getText().replace(/[\n\r]/g, "<br/>");
}

Message.prototype.getDateText = function() 
{
    var hours = this.getDate().getHours();
    var minutes = this.getDate().getMinutes();
    var seconds = this.getDate().getSeconds();
    
    return "Meddelandet skapades: " +hours +":" +minutes+ ":" +seconds;
    
    
}


}
