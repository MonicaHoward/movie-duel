var promise =

function makeAjaxCall(){
   var promise =
     $.ajax ({
       url: "https://api.themoviedb.org/3/search/movie?api_key=dec457859cd32502859fced3c3ca8ede&query="
     });
     promise.done(function(data) {
      console.log(data);
     });
}

var genreAction = document.querySelector(".action-genre");
genreAction.addEventListener('click', function() {
  makeAjaxCall();
  console.log(data);
})
