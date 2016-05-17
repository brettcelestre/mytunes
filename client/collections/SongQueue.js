// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function() {
      console.log('added from within songQueue', this.length);
      if  (this.length === 1) {
        this.playFirst();
      }
        
    });

    // stored song queue


    // Add listening for songQueue
      // this.set('currentSong', new SongModel());

    // params.library.on('play', function(song){
    //   this.set('currentSong', song);
    // }, this);
  },

  // playFirst 
  playFirst: function(){
    // tells AppModel to play fist song in queue and shift it off
    this.trigger('playFirst', this);
    //console.log('playFirst works');
  }

});