var promise =
 makeAjaxCall();

function makeAjaxCall(movieTitle){
   var promise =
     $.ajax ({
       url: "https://api.themoviedb.org/3/search/movie?api_key=dec457859cd32502859fced3c3ca8ede&query=" + movieTitle
     });
     promise.done(function(data) {
      console.log(data);
      console.log("hooooooo", data.results[0].title);
      console.log("fooooooo", data.results[0].vote_average);
     });
 }


var leftQuery = document.querySelector('.left-query');
leftQuery.addEventListener('keyup', function(evt) {
  if (evt.keyup !== 13) {
  var movie1Title = leftQuery.value;
  }
  console.log("what?", movie1Title);
  var re = / /gi;
  var movieOne = movie1Title.replace(re, "+")
  console.log("hey", movieOne);

  movieTitle = movieOne;

  makeAjaxCall(movieTitle);
  console.log("check", movieTitle);



});







var rightQuery = document.querySelector('.right-query');
rightQuery.addEventListener('keyup', function(evt) {
  (evt.keyCode !== 13)
  var movie2Title = rightQuery.value;
  console.log("what?", movie2Title);
  var re = / /gi;
  movieTwo = movie2Title.replace(re, "+")
  console.log("hey", movieTwo);
});
