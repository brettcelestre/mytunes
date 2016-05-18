// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    // Tracks an add event
    this.on('add', function() {
      // If this is the first song in songQueue
      if  (this.length === 1) {
        // We play the song
        this.playFirst();
      }
    });
  },

  // playFirst triggers the playFirst event which appModel is listening for
  playFirst: function(){
    // tells AppModel to play fist song in queue and shift it off
    this.trigger('playFirst', this);
  }

});