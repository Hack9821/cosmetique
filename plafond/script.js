$(document).ready(function() {

    $('ul li a').click(function() {
        $('ul li a.active-1').removeClass('font-weight-bold');
        $('ul li a.active-1').removeClass('active-1');
        $(this).closest('a').addClass('active-1');
        $('ul li a.active-1').addClass('font-weight-bold');

    });

});