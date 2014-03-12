/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var fading = document.getElementById('fade');
//var timeOut = document.getElementById('timeOut');
var fader = 1000;
var time = 0;

fading.style.opacity = time;
var timer = setInterval(fadeIn, 100);
var Will = document.getElementById('shapes');
var canvasValues = Will.getContext('2d');

        requestAnimationFrame(fadeIn);
            
            function fadeIn() {
                 
                if ( time < 10 ){
                    fading.style.opacity = (time *.1);
                    time += 1;
                                       
                     
                }
                else{
                    clearInterval(timer);
                }
            }  
             
            function hide() {
                    
                    document.getElementById("fade").style.visibility="hidden";
                
            } 
           
            setTimeout(hide, 10000);

canvasValues.fillStyle = "purple";
canvasValues.fillRect(50,200,250,100);

canvasValues.fillStyle = "blue";
canvasValues.beginPath();
canvasValues.arc(400, 250, 50, 0, Math.PI * 2, false);
canvasValues.fill();

function applyImage(){
    var can = document.getElementById('shapes');
    var ctx = can.getContext('2d');
    
    var img = new Image();
    img.src = "JsTrumpet.jpg";

    img.addEventListener("load", function(){ctx.drawImage(img,480,200);}, false);
}

window.addEventListener("load", applyImage, false);