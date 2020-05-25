var t = true;
$(document).ready(function(){
	console.log(t);
	$('#zero').click(function(){
		$('#nav-icon').toggleClass('open',t);
		$('#nav').toggleClass('open',t);
		$('.hitbox').toggleClass('open',t);
		$('#nav-icon').toggleClass('close',!t);
		$('#nav').toggleClass('close',!t);
		$('.hitbox').toggleClass('close',!t);
		t=!t;
		if(t==false){
		document.getElementById('one').onclick = function(){
			$('html, body').animate({
				scrollTop: $(".bgimg-1").offset().top
			}, 2000);
		};
		document.getElementById('two').onclick = function(){
			$('html, body').animate({
				scrollTop: $(".bgimg-2").offset().top
			}, 2000);
		};
		document.getElementById('three').onclick = function(){
			$('html, body').animate({
				scrollTop: $(".bgimg-3").offset().top
			}, 2000);
		};
		document.getElementById('four').onclick = function(){
			$('html, body').animate({
				scrollTop: $(".bgimg-4").offset().top
			}, 2000);
		};
	}
	});
});
$(document).ready(function(){
	window.addEventListener("scroll", myFunction);
	var length = -400;
	function myFunction() {
		var scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
		var move = length * scrollpercent;
		$('.quote').css({
			'top':move
		});
	}
});