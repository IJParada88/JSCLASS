/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//following are my JSON variables with the key and values, which later on are
// used inside the functions.
var userdata = {
    "email" : "",
    "name": "",
    "height": "",
    "width": "",
    "navigator": "",
    "title": "",
    "mouseX": [],
    "mouseY": []
};
//the following are my variables with the html ID stored into them
var fName = document.getElementById('fullname');
var Mail = document.getElementById('email');

//this function and event listener records what is typed into the fullname textbox
function getName(){
    userdata.name = document.getElementById('fullname').value;
}
fName.addEventListener('blur', getName);

//this function and event listener records what is typed into the E-mail textbox
function getEmail(){
    userdata.email = document.getElementById('email').value;
}
Mail.addEventListener('blur', getEmail);

//this function and event listener measures of the window size via the height
function collectHeight (){
    
    userdata.height = (innerHeight);
    
}

window.addEventListener('load',collectHeight);

//this function and event listener measures of the window size via the width
function collectWidth (){
    
    userdata.width = (innerWidth);
    
}

window.addEventListener('load',collectWidth);

//this function and event listener collects the navigator(s) you used to load the web page
function getNavigator (){
    
    userdata.navigator = (navigator.userAgent);
    
}

window.addEventListener('load',getNavigator);

//this function and event listener collect the titleof the web page you load in
function getTitle (){
    
    userdata.title = (document.title);
    
}

window.addEventListener('load',getTitle);

//this function and event listener keep track of the mouse moments via the X axis
function mouseMoveX(e){
      userdata.mouseX.push(e.clientX);
                
      if ( userdata.mouseX.length > 100 )
      {
       document.removeEventListener('mousemove', mouseMoveX);
      }
        }
        
document.addEventListener('mousemove', mouseMoveX);
        

//this function and event listener keep track of the mouse moments via the Y axis
function mouseMoveY(e){
     userdata.mouseY.push(e.clientY);
                
     if ( userdata.mouseY.length > 100 ) 
              {
               document.removeEventListener('mousemove', mouseMoveY);
              }
        }
        
document.addEventListener('mousemove', mouseMoveY);





function showResults() {
    console.clear();
    console.log(userdata);
}

var results = document.getElementById('showResults');

results.addEventListener("click", showResults);