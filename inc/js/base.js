/*
Infinite Scroll Slideshow using ES5 Object Oriented Javascript
*/

"use strict";

(function() {
	var slideShow = slideShow || {};

	slideShow = function(){
		var self_ = this;		

		self_.init = function(){
			self_.slides = document.querySelectorAll('#slides .slide');
			self_.currentSlide = 0;
		}

		self_.nextSlide = function(){

			self_.slides[self_.currentSlide].className = 'slide';
			self_.currentSlide = (self_.currentSlide + 1) % self_.slides.length;

			self_.slides[self_.currentSlide].className = 'slide showing';
		}

		self_.prevSlide = function(){
			self_.slides[self_.currentSlide].className = 'slide';

			if(self_.currentSlide == 0){
				self_.currentSlide = self_.slides.length - 1;
			}
			else {
				self_.currentSlide = self_.currentSlide - 1;
			}

			self_.slides[self_.currentSlide].className = 'slide showing';
		}
	};

	$(function(){
		//create new instance of slideshow, initialize it, hook into the events
		var s = new slideShow();
		s.init();

		//previous and next buttons
		var carouselNext = document.getElementById('carousel-next');
			carouselNext.addEventListener("click", function(){
			setTimeout(function(){ s.nextSlide(); }, 500);
		
		});

		var carouselPrev = document.getElementById('carousel-prev');
			carouselPrev.addEventListener("click", function(){
			setTimeout(function(){ s.prevSlide(); }, 500);
		});

		//keyboard events
		document.onkeydown = keyboardSlideControl;

		function keyboardSlideControl(e) {
		    if (e.keyCode == '37') {
		       setTimeout(function(){ s.prevSlide(); }, 500);
		    }
		    else if (e.keyCode == '39') {
		       setTimeout(function(){ s.nextSlide(); }, 500);
		    }

		}
	});
	
})(window);