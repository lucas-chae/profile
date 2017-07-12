
//Activate Parallax
(function($){
            //Plugin activation
            $(window).enllax();
        })(jQuery);



//Opacity Change
$(window).on('scroll', function() {
    $('.overlay').css('opacity', function() {
        return ($(window).scrollTop()*0.9 / $(this).outerHeight());
    });
});


//Dynamic Content
 $(document).ready(function(){
    $('#menu a').click(function(){
        $('.main-content').hide();
        $('#'+this.rel+'').fadeToggle();
        return false;
    });
    
});



//dynamic list

var $contents = $('.tab-content');
$contents.hide();
$('.tab').click(function() {
  var $target = $('#' + this.id + 'show').show();
  $contents.not($target).hide();
});