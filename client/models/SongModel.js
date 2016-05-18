// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  // Creates a new property for each song to track play count
  defaults: {
    playCount: 0
  },

  // This enqueue method sends an enqueue event trigger when it is called
  enqueue: function(){
    this.trigger('enqueue', this);
  },

  // This dequeue method sends an dequeue event trigger when it is called
  dequeue: function(){
    this.trigger('dequeue', this);
  },

  play: function(){
    // Triggering an event on an instance of a SongModel will also trigger that event on all collections that SongModel instance belongs to.
    // Why do we need to pass along the keyword this when we trigger the 'play' event?
    this.trigger('play', this);
  },

  //this ended function starts the next song in the queue
  ended: function () {
    // This sends the 'ended' even to AppModel, which is listening for it
    this.trigger('ended', this);
  }

});
