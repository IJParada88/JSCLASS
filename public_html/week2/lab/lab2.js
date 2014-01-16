/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function submitForm() { 
    
    var name = document.getElementById ("name");//these are both my variables, each will do different things according to how they validate
         var nameErr = document.getElementById("err_name");
         
                if ( name.value.length > 0 ) {// this if statement tests the vaidation statements and if correct ot will do the following
                    
                    name.className = "good";
                    nameErr.innerHTML= "OK!";
                    nameErr.className= "valid";
                    
                  
                } else {// if the arguements are not valid then it skips down to this else statement and executes the following code
                    
                   name.className = "bad";
                   nameErr.innerHTML = "<strong>Email is <em>NOT</em> valid</strong>";
                   nameErr.className = "error";
                }
               
       var mail = document.getElementById ("email");
         var mailErr = document.getElementById("err_email"); 
         
         if (mail.value.length > 0 && mail.value.indexOf ("@") > 0 && mail.value.indexOf (".") > 0) {//in this if/else statements if validates whether
             //the input of data contains the valid arguements, which are both a @ and a .
             
             
             mail.className = "good";
             mailErr.innerHTML = "OK!";
             mailErr.className = "valid";
         
               } else {
                   mail.className = "bad";
                   mailErr.innerHTML = "<strong> Email is <em>NOT</em> valid</strong>";
                   mailErr.className = "error";
               }  
               
         var comments = document.getElementById ("comments");
         var commentsErr = document.getElementById("err_comments");  
         
         if (comments.value.length > 0 && comments.value.length < 150) {// this if/else statement tests that the amount of characers 
             //entered are greater then 0 and less then 150
             
             comments.className = "good";
             commentsErr.innerHTML = "OK!";
             commentsErr.className = "valid";
         } else {
             
             comments.className = "bad";
             commentsErr.innerHTML = "<strong> <em> Please enter a comment </em></strong>";
             commentsErr.className = "error";
         }
         
             
         
                 
}
 