//back end
function MoviePrices(name, age) {
  this.movieName = name;
  this.movieAge = age;
  this.movieTime = [];
}

//front end

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var inputtedMovieName = $("#movies").val();
    var inputtedMovieAge = $("input#age").val();
    var newMoviePrices = new MoviePrices(inputtedMovieName, inputtedMovieAge);


    var inputtedMovieTime = $("input:checkbox[name=times-of-day]:checked").each(function() {
      var timesOfDay = $(this).val();
      newMoviePrices.movieTime.push(timesOfDay);
    });


    $("ul.pricing-results").append(
      "<li>" + newMoviePrices.movieName + "</li>" +
      "<li>" + newMoviePrices.movieTime + "</li>" +
      "<li>" + newMoviePrices.movieAge + "</li>");

      //alert(newMoviePrices.movieName + ", " + newMoviePrices.movieAge + ", " + newMobiePrices.movieTime);
    $(".pricing-results").show();


  });
});
