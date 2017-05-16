var promise =

  $.ajax ({
    url: "https://api.themoviedb.org/3/search/movie?api_key=ec457859cd32502859fced3c3ca8ede&query=Jack+Reacher"

    //  'https://api.themoviedb.org/3/discover/movie?page=1&include_video=false&include_adult=false&sort_by=popularity.desc&language=en-US&api_key=dec457859cd32502859fced3c3ca8ede'
  });

  promise.done(function(data) {
    console.log(data);
  });
