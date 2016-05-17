// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'click': function() {
      this.model.play();

      // Send to SongQueue
      // Maybe use .add
      this.set('songQueue', this.model);



      //this.songQueue = new SongQueue({model: this.model.get('currentSong')});
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
