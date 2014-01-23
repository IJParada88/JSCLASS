/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function randomAd (){ 

var ads = [];
            
            ads.push({ "title" : '<strong>Learn a new language!</strong><br/br/>', "description" : 'All it takes i devotion and 20 minutes out of your day'});
            ads.push({ "title" : '<strong>Ford</strong><br/br/>', "description" : 'Built for tough'});
            ads.push({ "title" : '<strong>Cheap Phones</strong><br/br/>', "description" : 'Straight from china'});
            ads.push({ "title" : '<strong>Win a getaway to Paradise</strong><br/br/>', "description" : 'Enter a free drawing for a chance to win'});
            ads.push({ "title" : '<strong>Dunknin Donuts</strong><br/br/>', "description" : 'America runs on DUNKIN'});
            
            var adIndex = randomNum (ads.length);
            
            console.log (adIndex);
            
            
                console.log(ads[adIndex]["title"] + " " + ads[adIndex]["description"]);
              
    var newTitle = ads[adIndex]["description"];
    
    document.title = newTitle.substr(0,10) + "..." ;
              
return ads[adIndex]["title"] + " " + ads[adIndex]["description"];
}

function randomNum(max) {
    
    return (Math.floor( Math.random()*max));
}


var div = document.getElementById("ad");

div.innerHTML = randomAd();






        


