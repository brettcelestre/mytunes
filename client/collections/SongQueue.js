// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){

    // stored song queue


    // Add listening for songQueue
      // this.set('currentSong', new SongModel());

    // params.library.on('play', function(song){
    //   this.set('currentSong', song);
    // }, this);
  },

  playFirst: function(){
    //tells AppModel to play fist song in queue and shift it off
    this.trigger('ended', this);
  }

});