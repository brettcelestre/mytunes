// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params){
    //console.log(params);
    //console.log(this);
    this.set('currentSong', new SongModel());
    this.set('songQueue', new SongQueue());

    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' callback function will always be bound to that context we pass in.
    In the current example, we're binding the value of the keyword this to the App. That is helpful because otherwise
    the 'this' we use inside the function body (this.set('currentSong', song)) would
    end up referring to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */


    params.library.on('play', function(song){
      this.set('currentSong', song);
    }, this);

    // Library has listener for enqueue which tells the app model to 
    params.library.on('enqueue', function(song){
      // add the song that was clicked to the songQuene collection
      this.get('songQueue').add(song);
      console.log('Enqueue after adding: ', this.get('songQueue'));
    }, this);

    //listen to library on ended
    params.library.on('ended', function(song){
      // change current song to first song in enqueue
      console.log('Ended before using pop: ', this.get('songQueue'));
      this.set('currentSong', this.get('songQueue').pop());
    }, this);
  }

});
