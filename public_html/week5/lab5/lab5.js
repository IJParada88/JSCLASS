/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var fname = document.getElementById('fname');
var lname = document.getElementById('lname');
var mail = document.getElementById('email');
var comments = document.getElementById('comments');


function noSpaceAlphaValidate( str ) {
        var alphaRegex = /^[A-z]{1,}$/;
        return alphaRegex.test(str);			
}

function SpaceAlphaValidate( str ) {
        var alphaRegex = /^[A-z, ]{1,}$/;
        return alphaRegex.test(str);			
}

function ValidateEmail( str ) {
        var alphaRegex = /(^[a-sA-Z]+[@][a-zA-Z]+[.][a-zA-Z]{3}$)/;
        return alphaRegex.test(str);			
}

function strip_HTML(str) {
        var findHtml = /<(.|\n)*?>/gi;
        return str.replace(findHtml,"");
}


var name = document.getElementById ("name");//these are both my variables, each will do different things according to how they validate
var nameErr = document.getElementById("err_name");

var Lname = document.getElementById ("name");//these are both my variables, each will do different things according to how they validate
var lnameErr = document.getElementById("err_lname");

var email = document.getElementById ("email");
var mailErr = document.getElementById("err_email"); 

var ccomments = document.getElementById ("comments");
var commentsErr = document.getElementById("err_comments");

function submitform() {

    
    var fname = document.getElementById('fname');
        
        if ( !fname.value.length ) {
                console.log("Fname needs a length");
        } 
        else if ( noSpaceAlphaValidate( fname.value ) == false ) {
            
                   name.className = "bad";
                   nameErr.innerHTML = "<strong>First is <em>NOT</em> valid</strong>";
                   nameErr.className = "error";
                console.log("Fname needs Alpha chars");
        } 
        else {
                    name.className = "good";
                    nameErr.innerHTML= "OK!";
                    nameErr.className= "valid";
                console.log("firstName is good");
        }
        
    
    var lname = document.getElementById('lname');
        
        if ( !lname.value.length ) {
                console.log("Lname needs a length");
        } else if ( SpaceAlphaValidate( lname.value ) == false ) {
            
                   Lname.className = "bad";
                   lnameErr.innerHTML = "<strong>First is <em>NOT</em> valid</strong>";
                   lnameErr.className = "error";
                console.log("Lname needs Alpha chars");
        } else {
            
                    Lname.className = "good";
                    lnameErr.innerHTML= "OK!";
                    lnameErr.className= "valid";
                console.log("Last Name is good");
        }
        
        
    var mail = document.getElementById('email');
        
        if ( !mail.value.length ) {
                console.log("Lname needs a length");
        } else if ( ValidateEmail( mail.value ) == false ) {
            
                   email.className = "bad";
                   mailErr.innerHTML = "<strong> Email is <em>NOT</em> valid</strong>";
                   mailErr.className = "error";
                console.log("Please Enter a Valid E mail");
        } else {
            
                email.className = "good";
                mailErr.innerHTML = "OK!";
                mailErr.className = "valid";
                console.log("E mail is good");
        }
        
    
    var comments = document.getElementById('comments');
    comments.value = strip_HTML(comments.value);
        
        if ( !comments.value.length || comments.value.length >150 ) {
            
                ccomments.className = "bad";
                commentsErr.innerHTML = "<strong> <em> Please enter keep your comments under 150 characters </em></strong>";
                commentsErr.className = "error";
                console.log( "Comments needs a length");
        } 
        else {
            
                ccomments.className = "good";
                commentsErr.innerHTML = "OK!";
                commentsErr.className = "valid";
                console.log("Comments is good");
        }
}

document.getElementById('subBtn').addEventListener('click', submitform );



