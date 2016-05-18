// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    // Creates a tracker for 'click', invokes an anonymous function that..
    'click': function() {
      // Invokes the play function for this selected model (song)
      this.model.play();
      // Invokes the enqueue function for this selected model (song)
      this.model.enqueue();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
