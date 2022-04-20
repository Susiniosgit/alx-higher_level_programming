$(function () {
  const header = $('header');

  $('DIV#toggle_header').click(function () {
    header.toggleClass('red');
    if (header.hasClass('red')) {
      header.removeClass('green');
    } else {
      header.addClass('green');
    }
  });
});
