/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//Variables used to check if documents have been clicked by the user
var DocumentValidation1 = false;                        
var DocumentValidation2 = false;

//Variable that checks if the scrollbox has been scolled to the bottom
var ScrollValidation = false;                      

//Checks if a radio button has been selected by the user
var RadioConatinue = false;                        

//Check if the agree radio button has been selected by the user
var accepted = false;                        

//Check if the not agree radio button has been selected by the user
var declined = false;                         

var agree1 = document.getElementById('agreeLink1');
var agree2 = document.getElementById('agreeLink2');

var btnAgree = document.getElementById('agree');
var btnNotAgree = document.getElementById('notagree');

//Click event listener for the first document 
agree1.addEventListener('click', doc1Valid);        

//Click event listener for the second document
agree2.addEventListener('click', doc2Valid);        

var objDiv = document.getElementById("agreeScroll");

//Scroll event listener for the scroll box
objDiv.addEventListener('scroll',scrollValid);      



function ToggleDiv() {              //Function that hides everything from the page
                 $("#section1,#section2,#mainform").toggle("slow");
            };



function doc1Valid(){                //Function that changes the variable related with the first document to true
    DocumentValidation1 = true;               
    console.log("document 1 is " + DocumentValidation1);
    scrollValid();
}



function doc2Valid() {              //Function that changes the variable related with the second document to true
    DocumentValidation2 = true;
    console.log("document 2 is " + DocumentValidation2);
    scrollValid();
}



function scrollValid() {            //Function thats checks if the scroll box has been fully scrolled through its length
    if ( objDiv.scrollTop === (objDiv.scrollHeight-objDiv.offsetHeight)){
        ScrollValidation = true;
    }
    if (DocumentValidation1 === true && DocumentValidation2 === true &&ScrollValidation == true ){
        btnAgree.disabled = false;
        btnNotAgree.disabled = false;
    }
    console.log("scroll bar is " + ScrollValidation);
    
}



function btnValid(){            //Function to set the variable related with each radio button to true
                                //then appends continue message after continue button
        if (document.getElementById('agree').checked === true && DocumentValidation1 === true && DocumentValidation2 === true){
            
            declined = false;
            accepted = true;
        }
        else if (document.getElementById('notagree').checked === true && DocumentValidation1 === true && DocumentValidation2 === true){             

            accepted = false;
            declined = true;
        }
        if (RadioConatinue !== true && DocumentValidation1 === true && DocumentValidation2 === true){
            $("<b>You may now continue</b>").appendTo('form');
            RadioConatinue = true;
}
}

//Function that creates the new div
function createNewDiv(color,bgcolor,width,border,borderradius,height,margin,html){          
var NewDiv = document.createElement("div");
      NewDiv.style.color = color;
      NewDiv.style.backgroundColor = bgcolor;
      NewDiv.style.width = width;
      NewDiv.style.border = border;
      NewDiv.style.borderRadius = borderradius;
      NewDiv.style.minHeight = height;
      NewDiv.style.margin= margin;
      var label = document.createElement('label');
      label.innerHTML = html;
      label.style.textAlign="center";
      NewDiv.appendChild(label);
      myDiv = document.getElementById("changeDiv");
      document.body.insertBefore(NewDiv, myDiv);
}


function validation(){          //Function that hides everything from the page and runs the function
                                //to create and show the new div, depending which radio button is selected        
        
            if (declined === false && accepted === true){                
                                
                ToggleDiv();
                
                createNewDiv(
                        "white",
                        "purple",
                        "500px",
                        "2px solid black",
                        "15px",
                        "100%",
                        "1em auto",            
                        "<h3>Thank you! You have agreed to the terms and conditions. You may now continue.</h3>");                    
            }                   
            else if (accepted === false && declined === true){                        
                              
                ToggleDiv();
                                         
                createNewDiv(
                        "white",
                        "red",
                        "500px",
                        "2px solid black",
                        "15px",
                        "100%",
                        "1em auto",            
                        "<h3>You have not accepted the terms and conditions!!!!</h3>");                                    
            }       
}

$('#agree').click(function() {              //Click event listener for the agree radio button
    btnValid();
});

$('#notagree').click(function() {           //Click event listener for the notagree radio button
    btnValid();
});

$('#submitAgreement').click(function() {    //Click event listener for the continue button
    validation();
});




