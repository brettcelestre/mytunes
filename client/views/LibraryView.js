// LibraryView.js - Defines a backbone view class for the music library.
var LibraryView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    // Invokes render
    this.render();
  },

  render: function(){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    // Builds DOM for everything in our  songQueue collection
    this.$el.html('<th>Library</th>').append(
      this.collection.map(function(song){
        // Creates a new LibraryEntryView with all of the current songQueue songs
        return new LibraryEntryView({model: song}).render();
      })
    );
  }

});
