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


    // Library has listener for enqueue which tells the app model to 
    params.library.on('enqueue', function(song){
      // This grabs 'songQueue' and pushes this song into it
      this.get('songQueue').push(song);
    // Don't forget to bind it with this
    }, this);


    // This grabs songQueue and listens for an add event
    this.get('songQueue').on('add', function(){
      console.log('song has been added');
      console.log('Enqueue after adding: ', this);
    }, this);

    // Use .get to grab 'songQueue' and listen for 'playFirst' to be invoked
    this.get('songQueue').on('playFirst', function(){
      // Set the currentSong to the first song inside of our songQueue
      this.set('currentSong', this.get('songQueue').at(0));
    // Don't forget to bind it with this
    }, this);


    // Listens to the play event
    params.library.on('play', function(song){
      if ( this.get('songQueue').length === 0 ){
        // Sets the currentSong to this song
        this.set('currentSong', song);
      }
    }, this);


    // listen to library for the 'ended' event
    params.library.on('ended', function(song){
      console.log("'before shift this.get('songQueue').length'", this.get('songQueue').length);
      // When a song ends, take the first song off the list
      this.get('songQueue').shift()
      // change current song to new first song in enqueue
      this.set('currentSong', this.get('songQueue').at(0));
      // console.log('Ended after using pop: ', this.get('songQueue'));
      console.log("'after shift this.get('songQueue').length'", this.get('songQueue').length);
    }, this);
  }

});
