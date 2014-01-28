/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//this is a function for my ads
function randomAd (){ 
//this is the variable for my ads. it will hold the title and discription of my ads            
var ads = [];
            
            //these are my arrays. each of the ads are being put into my variable with the push command
            ads.push({ "title" : '<strong>Learn a new language!</strong><br/br/>', "description" : 'All it takes i devotion and 20 minutes out of your day'});
            ads.push({ "title" : '<strong>Ford</strong><br/br/>', "description" : 'Built for tough'});
            ads.push({ "title" : '<strong>Cheap Phones</strong><br/br/>', "description" : 'Straight from china'});
            ads.push({ "title" : '<strong>Win a getaway to Paradise</strong><br/br/>', "description" : 'Enter a free drawing for a chance to win'});
            ads.push({ "title" : '<strong>Dunknin Donuts</strong><br/br/>', "description" : 'America runs on DUNKIN'});
            
            //this is another variable, that holds my index and it recieves its value from the randomNum function
            var adIndex = randomNum (ads.length);
            
            console.log (adIndex);
            
            
                console.log(ads[adIndex]["title"] + " " + ads[adIndex]["description"]);
              
    var newTitle = ads[adIndex]["description"];
    
    document.title = newTitle.substr(0,10) + "..." ;
              
return ads[adIndex]["title"] + " " + ads[adIndex]["description"];
}

//this funstion does the randomnizing of the ads and returns the value to my adIndex variable
function randomNum(max) {
    
    return (Math.floor( Math.random()*max));
}


var div = document.getElementById("ad");

div.innerHTML = randomAd();






        


