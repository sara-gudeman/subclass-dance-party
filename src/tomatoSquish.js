$(document).ready(function() {
  $('body').on('click', '.tomato', function() {
    $(this).find('.first').toggle();
    $(this).find('.second').toggle();
  });
});