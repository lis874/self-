
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

