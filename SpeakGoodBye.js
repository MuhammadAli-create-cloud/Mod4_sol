(function (window) {
  // Create a byeSpeaker object
  var byeSpeaker = {};

  // Define the word to be spoken
  var speakWord = "Good Bye";

  // Attach the speak method to the byeSpeaker object
  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  // Expose byeSpeaker to the global scope
  window.byeSpeaker = byeSpeaker;

})(window);
