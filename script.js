var promise =
var leftQuery = document.querySelector('.left-query');
var movie1Title;
var movieOne;

leftQuery.addEventListener('keyup', function(evt) {
  if (evt.keyup !== 13) {
  movie1Title = leftQuery.value;
  }
  console.log("what?", movie1Title);
  var re = / /gi;
  movieOne = movie1Title.replace(re, "+")
  console.log("hey", movieOne);
});

function makeAjaxCall(){
  var promise =
    $.ajax ({
      url: "https://api.themoviedb.org/3/search/movie?api_key=dec457859cd32502859fced3c3ca8ede&query=" + movieOne
    });
    promise.done(function(data) {
      console.log(data);
    });
}


var rightQuery = document.querySelector('.right-query');
rightQuery.addEventListener('keyup', function(evt) {
  (evt.keyCode !== 13)
  var movie2Title = rightQuery.value;
  console.log("what?", movie2Title);
  var re = / /gi;
  movieTwo = movie2Title.replace(re, "+")
  console.log("hey", movieTwo);
  makeAjaxCall();

});
