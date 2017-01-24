//back end
function MoviePrices(name, age) {
  this.movieName = name;
  this.movieAge = age;
  this.movieTime = [];
}

function priceByTime() {
  newMoviePrices.movieTime.forEach(function(time) {
    if (inputtedMovieTime === "6AM" || inputtedMovieTime === "10AM") {
      timePrice = 5;
    } else if (inputtedMovieTime === "Matinee") {
      return 7;
    } else if (inputtedMovieTime === "12PM") {
      return 10;
    } else if (inputtedMovieTime === "3PM") {
      return 10;
    } else if (inputtedMovieTime === "5PM") {
      return 12;
    } else if (inputtedMovieTime === "8PM") {
      return 14;
    }
  });
};

var newMoviePrices.movieTime;
var inputtedMovieAge;
var output = ''
function pricePerAge(priceByTime) {
  if (inputtedMovieAge < 18 || inputtedMovieAge > 65) {
    return '<li>' + inputtedMovieTime + (priceByTime / 2) + '</li>';
  }
}

//front end

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var inputtedMovieName = $("#movies").val();
    var inputtedMovieAge = parseInt($("input#age").val());
    var newMoviePrices = new MoviePrices(inputtedMovieName, inputtedMovieAge);

    var inputtedMovieTime = $("input:checkbox[name=times-of-day]:checked").each(function() {
      var timesOfDay = $(this).val();
      newMoviePrices.movieTime.push(timesOfDay);
    });


    $("ul.unstyled").append(
      "<li>" + newMoviePrices.movieName + "</li>" +
      "<li>" + newMoviePrices.movieTime + "</li>" +
      "<li>" + newMoviePrices.movieAge + "</li>");


    $("#pricing-results").show();

    for (var i = 0; i < newMoviePrices.movieTime.length; i++)
    $("#pricing").append(pricePerAge(priceByTime(newMoviePrices.movieTime)));

    $("#pricing-answers").show();

  });
});
