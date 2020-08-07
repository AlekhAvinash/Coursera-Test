// NOTE! The steps in this file are basically identical to the ones you
// performed in the SpeakHello.js file.

// STEP 6: Wrap the entire contents of SpeakGoodBye.js inside of an IIFE
// See Lecture 52, part 2
(function (window) {
	var byeSpeaker = {};
	var speakWord = "Good Bye";
	byeSpeaker.speak = function (name) {
	  console.log(speakWord + " " + name);
	}
	// STEP 9: Expose the 'byeSpeaker' object to the global scope. Name it
	// 'byeSpeaker' on the global scope as well.
	window.byeSpeaker = byeSpeaker;
})(window);