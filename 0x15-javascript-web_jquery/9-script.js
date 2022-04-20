$(function () {
  $.ajax({
    crossDomain: true,
    url: 'https://fourtonfish.com/hellosalut/?lang=fr',
    success: function (data) {
      const hello = data.hello;
      $('DIV#hello').text(hello);
    }
  });
});
