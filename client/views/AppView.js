// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params){
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.libraryView = new LibraryView({collection: this.model.get('library')});

    // Create a new property, set it equal to a new SongQueueView, and set the collection to songQueue
    this.queueView = new SongQueueView({collection: this.model.get('songQueue')});

    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'
    this.model.on('change:currentSong', function(model){
      this.playerView.setSong(model.get('currentSong'));
    }, this);

    // Checks AppModel to see if soneQueue has changed, if it does, invoke queueView's render function, and pass this
    this.model.on('change:songQueue', this.queueView.render(), this);
    
  },

  render: function(){
    return this.$el.html([
      this.playerView.$el,
      this.libraryView.$el,
      // This adds the queueView to the complete AppView DOM build
      this.queueView.$el
    ]);
  }

});
