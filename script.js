(function (window) {
  // Define the list of names
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  // Loop through each name in the array
  for (var i = 0; i < names.length; i++) {
    // Get the first letter of the current name and convert it to lowercase
    var firstLetter = names[i].charAt(0).toLowerCase();

    // Determine whether to say "Hello" or "Good Bye"
    if (firstLetter === 'j') {
      window.byeSpeaker.speak(names[i]); // Say "Good Bye" for names starting with 'J'
    } else {
      window.helloSpeaker.speak(names[i]); // Say "Hello" for other names
    }
  }
})(window);
