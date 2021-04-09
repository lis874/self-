
$("#callout").hover(function(){
    $("#pic").css("opacity","1");
    $("#pic").css("z-index","1");
    }, function(){
    $("#pic").css("opacity","0");
    $("#pic").css("z-index","0");
  });

$(".view").click(function(){
  $(".menu").toggleClass('opaque');
});



   // setTimeout(function(){
   //   $('#callout').fadeIn(5000);

   //   // $('#callout').show(2500,'linear');
   // },3000);



$("#callout").fadeIn(5000);


// 	var divs = document.getElementsByClassName("image");

// var winWidth = window.innerWidth;
// var winHeight = window.innerHeight;

// for ( var i=0; i < divs.length; i++ ) {
  
//     var thisDiv = divs[i];
    
  
//     randomTop = getRandomNumber(0, winHeight);
//     randomLeft = getRandomNumber(0, winWidth);
    
//     thisDiv.style.top = randomTop +"px";
//     thisDiv.style.left = randomLeft +"px";
    
// }

// function getRandomNumber(min, max) {

//   return Math.random() * (max - min) + min;
    
// }


// 	$('body').append( '<img class="image" src="img/aldrin.jpg">');

//  	timedelay = 1;
// }
// 	timedelay = timedelay+1;
// }

// $(document).mousemove(function() {
//   // timedelay = 1;
//   clearInterval(_delay);
//   $('.image').remove();
// _delay = setInterval(delayCheck, 500);
// });

// _delay = setInterval(delayCheck, 500)








// $(document).mousemove(function(e){
// 	$('#pic').css({
//     left: event.clientX,
//     top: event.clientY,
//     opacity:1,
//   });
// });


// $(document).on('mousemove', (event) => {
//   $('.follower').css({
//     left: event.clientX,
//     top: event.clientY,
//   });
// });

