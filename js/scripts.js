//Start Youtube API
  // Load the IFrame Player API code asynchronously.
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // Replace the 'ytplayer' element with an <iframe> and
  // YouTube player after the API code downloads.
  var player;
  function onYouTubePlayerAPIReady() {  
    player = new YT.Player('1player', {
      height: '390',
      width: '640',      
      events: {
            'onStateChange': function(event) {
              if (event.data == YT.PlayerState.PLAYING) {
                  myFunction();
              }
            }
          }  
    });           
  }

