"use strict";

var makePerson = function(persArr){

        var names = " ";
        var nameArr = [];
        var ageArr = [];
        
        var minAge = 0;
        var maxAge = 0;
        var averageAge = 0;
        
        
        
        
        for(var i = 0; i <  persArr.length; i += 1)
        {
            ageArr[i] = persArr[i].age;
            
        }
        
        minAge = Math.min.apply(null, ageArr);
        maxAge = Math.max.apply(null, ageArr);
        
        var sum = ageArr.reduce(function(a, b) 
        { return a + b });
        averageAge = Math.round(sum / ageArr.length);
        
       
        
        
         for(var i = 0; i <  persArr.length; i += 1)
        {
            nameArr[i] = persArr[i].name;
            
        }
        
        
        
        
        nameArr.sort(function(a,b){
        return a.localeCompare(b);
        });
        names = nameArr.toString(); 
        names = names.split(",").join(", ")
        
        
        var result =
        {
            minAge:minAge,
            maxAge:maxAge,
            averageAge:averageAge,
            names:names
            
        };



return result;

};

var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];

var result = makePerson(data);

console.log(result);