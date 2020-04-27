function test(){
    console.log("hmm");
    $("body").append('Test');
    $('body').append("test");
    $('video').playbackRate=2.5;
}
console.log("asdfsdfa");

function main() {
    // Initialization work goes here.
    console.log("loaded");
  }

  function clickHandler(e) {
    console.log("click");
  }
  
  // Add event listeners once the DOM has fully loaded by listening for the
  // `DOMContentLoaded` event on the document, and adding your listeners to
  // specific elements when it triggers.
  document.addEventListener('DOMContentLoaded', function () {
      console.log("wtf");
    var link = document.getElementById('start');
    
    link.addEventListener('click', function() {
        // link.innerText = "asdfa";
        chrome.tabs.query({ active: true, currentWindow: true}, function(activeTabs) {
            // WAY 1
            chrome.tabs.executeScript(activeTabs[0].id, 
                { code: `document.querySelector('video').playbackRate = 2` 
            });
        });
        var video = document.querySelector('video');
        link.innerText = video.videoWidth.toString();
        video.playbackRate= 2;
        console.log("buttont");
    });
    document.querySelector('button').addEventListener('click', clickHandler);
    main();
  });