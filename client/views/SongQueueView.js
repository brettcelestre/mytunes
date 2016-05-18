// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    // First invoke our render function
    this.render();
    // Sets up a listener on our collection for an 'add' event, and on event we invoke our render function
    this.listenTo(this.collection, 'add', this.render);
    // Sets up a listener on our collection for a 'remove' event, and on event we invoke our render function
    this.listenTo(this.collection, 'remove', this.render);
  },

  render: function() {
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    // Builds our DOM with the current songs inside songQueue
    this.$el.html('<th>Queue</th>').append(
      this.collection.map(function(song){
        // Builds a new SongQueueEntryView with all of its songs
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
