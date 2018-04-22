$(function(){
  initialize();
});

function initialize(){
  var $column = $('.column');

  $column.mouseenter(function(){
    $column.removeClass('wide');
    $column.css('width', '25%');
    $(this).addClass('wide');
  });

  $column.mouseleave(function(){
    $column.css('width', '25%');
    $column.removeClass('wide');
  });
}