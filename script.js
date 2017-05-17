var promise =
 makeAjaxCall();

function makeAjaxCall(movieTitle){
   var promise =
     $.ajax ({
       url: "https://api.themoviedb.org/3/search/movie?api_key=dec457859cd32502859fced3c3ca8ede&query=" + movieTitle
     });
     promise.done(function(data) {
      console.log(data);
    //   console.log("Movie Title", data.results[0].title);
    //   console.log("fooooooo", data.results[0].vote_average);
     });
 }

var movie1Title;
var movie1Average;
var leftQuery = document.querySelector('.left-query');
leftQuery.addEventListener('keyup', function(evt) {
  if (evt.keyup !== 13) {
  movie1Title = leftQuery.value;
  }
  console.log("what?", movie1Title);
  var re = / /gi;
  var movieOne = movie1Title.replace(re, "+")
  console.log("hey", movieOne);

  movieTitle = movieOne;

  makeAjaxCall(movieTitle);
  console.log("check", movieTitle);

  var promise =
    $.ajax ({
      url: "https://api.themoviedb.org/3/search/movie?api_key=dec457859cd32502859fced3c3ca8ede&query=" + movieTitle
    });
    promise.done(function(data) {
    //  console.log("First Movie Title", data.results[0].title);
    //  console.log("First Movie Rating", data.results[0].vote_average);
     movie1Title = data.results[0].title;
     movie1Average = data.results[0].vote_average;
    });
    console.log("Movie Name:", movie1Title);
    console.log("Movie Average:", movie1Average);


});


var movie2Title;
var movie2Average;
var rightQuery = document.querySelector('.right-query');
rightQuery.addEventListener('keyup', function(evt) {
  (evt.keyCode !== 13)
  var movie2Title = rightQuery.value;
  console.log("what?", movie2Title);
  var re = / /gi;
  movieTwo = movie2Title.replace(re, "+")
  console.log("hey", movieTwo);

  movieTitle = movieTwo;

  makeAjaxCall(movieTitle);
  console.log("check", movieTitle);

  var promise =
    $.ajax ({
      url: "https://api.themoviedb.org/3/search/movie?api_key=dec457859cd32502859fced3c3ca8ede&query=" + movieTitle
    });
    promise.done(function(data) {
    //  console.log("Second Movie Title", data.results[0].title);
    //  console.log("Second Movie Rating", data.results[0].vote_average);
     movie2Title = data.results[0].title;
     movie2Average = data.results[0].vote_average;
    });
    console.log("Movie Name:", movie2Title);
    console.log("Movie Average:", movie2Average);
});


var duelButton = document.querySelector("#duel-button");
duelButton.addEventListener('click', function() {

    if (movie1Average > movie2Average) {
      return alert('THE WINNER IS: ' + movie1Title);
    }
      else if {
        return alert('THE WINNER IS: ' + movie2Title);
      }
        else {
          alert('DRAW');
        }
});
