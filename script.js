$(document).ready(function() {
  $(document).on("scroll", onScroll);
});

function onScroll(event) {
  var scrollPos = $(document).scrollTop();
  $('.navbar li a').each(function() {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (refElement.position().top - 150 <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
      $('.navbar li a').removeClass("active");
      currLink.addClass("active");
    } else {
      currLink.removeClass("active");
    }
  });
}

$(function()
{
    $('.menu a').click(function()
   {
       $('.navbar label').trigger('click');
    });
});