(function (window) {
  // Create a helloSpeaker object
  var helloSpeaker = {};

  // Define the word to be spoken
  var speakWord = "Hello";

  // Attach the speak method to the helloSpeaker object
  helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  // Expose helloSpeaker to the global scope
  window.helloSpeaker = helloSpeaker;

})(window);
