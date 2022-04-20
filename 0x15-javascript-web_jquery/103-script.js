$(function () {
  const textField = $('INPUT#language_code');
  const button = $('INPUT#btn_translate');

  function getData () {
    const valueTextField = textField.val();
    $.ajax({
      crossDomain: true,
      url: 'https://www.fourtonfish.com/hellosalut/?lang=' + valueTextField,
      success: function (data) {
        const hello = data.hello;
        $('DIV#hello').text(hello);
      }
    });
  }

  button.click(getData);
  textField.keypress(function (e) {
    if (e.which === 13) {
      getData();
    }
  });
});
