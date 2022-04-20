$(function () {
  const addItem = $('DIV#add_item');
  const removeItem = $('DIV#remove_item');
  const clearList = $('DIV#clear_list');

  addItem.click(function () {
    $('UL.my_list').append('<li>Item</li>');
  });

  removeItem.click(function () {
    $('UL.my_list li:last-child').remove();
  });

  clearList.click(function () {
    $('UL.my_list li').remove();
  });
});
