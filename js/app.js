var player = new MediaElement('player', {
  pluginPath: "https://cdnjs.com/libraries/mediaelement/",
  shimScriptAccess: 'always',
  success: function(mediaElement, originalNode) {
    // do things
  }
});

player.setCurrentTime(4);
console.log('We are live');
