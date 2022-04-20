$(function () {
  $.ajax({
    crossDomain: true,
    url: 'https://swapi.co/api/films/?format=json',
    success: function (data) {
      const listFilms = data.results;
      $.each(listFilms, function (index, value) {
        $('UL#list_movies').append('<li>' + value.title + '</li>');
      });
    }
  });
});
