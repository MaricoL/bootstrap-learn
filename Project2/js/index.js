$(function(){
    var myNabvarHt = $('#myNavBar').outerHeight();
    var myNavBarContent=$('#myNavBarContent');
    $("#myNavBarContent a.nav-link").click(function (e) {


        e.preventDefault();
        myNavBarContent.collapse('hide');

        $('html,body').animate({
            scrollTop: $(this.hash).offset().top - myNabvarHt
        })
    });


    new WOW().init();
});