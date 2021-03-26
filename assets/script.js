
var entries = [

  '<a href="page/xing.html">' + '“There was a period of time that I hated my stuffed animals, because I was...”' + '</a>' + "<a href='page/marc.html'>" + "<sup>" + "{" + 1 + "}" + "</sup>" + "</a>", 

	'<a href="page/nick.html">' + '“As a child growing up in a predominantly white place, I struggled with...”' + '</a>' + "<a href='page/vi.html'>"+ "<sup>" + "{" + 1 + "}" + "</sup>" + "</a>", 

	'<a href="page/bianca.html">' + '“They exist as a promise I made to my God. There’s three of them...”' + '</a>' + "<a href='page/meme.html'>"+ "<sup>" + "{" + 1 + "}" + "</sup>" + "</a>",

	'<a href="page/reed.html">' + '“I wrote about my good days, my bad days, and everything in between...”' + '</a>' + "<a href='page/maria.html'>" + "<sup>" + "{" + 1 + "}" + "</sup>" + "</a>", 

	'<a href="page/anson.html">' + '“In January 2020, I was lucky enough to get a second chance for interview...”' + '</a>' + "<a href='page/nicholas.html'>" + "<sup>" + "{" + 1 + "}" + "</sup>" + "</a>", 

	'<a href="page/nora.html">' + '“They started off all pink and soft, but they’ve been through a lot...”' + '</a>' + "<a href='page/maria.html'>" + "<sup>" + "{" + 1 + "}" + "</sup>" + "</a>",

  '<a href="page/ken.html">' + '“I remember learning english words and phrases through the game...”' + '</a>' + "<a href='page/tata.html'>"+ "<sup>" + "{" + 1 + "}" + "</sup>" + "</a>",

  '<a href="page/wallis.html">' + "“We always give each other weird nicknames that don't make any sense...”" + '</a>' + "<a href='page/ali.html'>"+ "<sup>" + "{" + 1 + "}" + "</sup>" + "</a>",

  '<a href="page/mimi.html">' + '“Growing up my mom was very spiritual and performed spiritual cleansings on me whenever I was down...”' + '</a>' + "<a href='page/ruby.html'>"+ "<sup>" + "{" + 1 + "}" + "</sup>" + "</a>",
	];



var x = entries[Math.floor(Math.random()*entries.length)];

document.getElementById('quote').innerHTML = x;



$(".view").hover(function(){
    $(".bar").css("background-color","#a6adf2");
    }, function(){
    $(".bar").css("background-color","white");
  });


$(".toc").click(function(){
  $(".menu").toggleClass('opaque');
});


// $("sup").click(function(){
//   $(".xing").css("opacity","1");
//   $("#qc").css({"top": "5vw", "left": "27vw"});
// });

// $("#sup2").click(function(){
//   $(".aldrin").css("opacity","1");
//   $("#qc").css({"top": "10vw", "left": "10vw"});
// });





// var divs = document.getElementsByClassName("text");

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


 
    

// $(window).mousemove(function(e) {
      
//     var mx = e.clientX;
//     var my = e.clientY;
        
//     var winWidth = $(window).width();
//     var winHeight = $(window).height();
        
//     var px = ((mx / winWidth) - .5) * 2;
//     var py = ((my / winWidth) - .5) * 2;
        
//     var maxX = 1000;
//     var maxY = 1000;
        
//     var tx = -Math.floor(px * maxX);
//     var ty = -Math.floor(py * maxY);
        

//     $("#qc").css("transform", "translate("+tx+"px,"+ty+"px)");
      
// });
  

