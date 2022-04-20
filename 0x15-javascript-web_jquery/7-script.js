$(function () {
  $.ajax({
    crossDomain: true,
    url: 'https://swapi.co/api/people/5/?format=json',
    success: function (data) {
      const name = data.name;
      $('DIV#character').text(name);
    }
  });
});
