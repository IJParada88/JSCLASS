/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//this function chooses all the links and changes the color when you hover over them
$("a").mouseover(function (){
    $(this).css('color', 'white').css('background-color', 'purple');
});
//this function chooses all the links and changes the color when you move off of them
$("a").mouseout(function (){
    $(this).css('color', 'black').css('background-color', 'transparent');
});

//this function, upon the window loading it hides the content boxes from the page
$(window).load(function(){
$("#nav1,#nav2,#nav3,#nav4").addClass('contentBox').hide();
});

//all the following functions are for when the links are clicked on and they alternate which content box
//is shown and the rest are hidden
$('.button-color-1 a').click(function(){
    $('#nav2,#nav3,#nav4').hide();
    $('#nav1').show('easing');
});

$('.button-color-2 a').click(function(){
    $('#nav1,#nav3,#nav4').hide();
    $('#nav2').show('slow');
});

$('.button-color-3 a').click(function(){
    $('#nav1,#nav2,#nav4').hide();
    $('#nav3').show('slow');
});

$('.button-color-4 a').click(function(){
    $('#nav1,#nav2,#nav3').hide();
    $('#nav4').show('slow');
});