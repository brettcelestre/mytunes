// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  // This enqueue method sends an enqueue event when it is called
  enqueue: function(){
    this.trigger('enqueue', this);
  },

  play: function(){
    // Triggering an event on an instance of a SongModel will also trigger that event on all collections that SongModel instance belongs to.
    // Why do we need to pass along the keyword this when we trigger the 'play' event?
    this.trigger('play', this);
  },

  //this ended function starts the next song in the queue
  ended: function () {
    this.trigger('ended', this);
    console.log('song ended');
  }

});
