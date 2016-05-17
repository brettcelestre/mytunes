// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  initialize: function() {
    // this.on('ended', this.model.ended, this);

  },

  // This object will be passed to delegateEvents which makes a DOM element of this view listen to this events and do the corresponding function
  events: {
    // Listens to the DOM for 'ended', once heard, invokes the 'endSong' function
    'ended': "endSong"

    // The below also works with an anonymous function
    // 'ended': function(){
    //     this.model.ended()
    //   }
  },

  setSong: function(song){
    this.model = song;
    this.render();
  },

  // endSong function calls the .ended() function up our model chain. SongModel --> AppModel
  endSong: function(){
    console.log('endSong');
    this.model.ended()
  },

  render: function(){
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
