// TABLE OF CONTENTS

// 1. CODE INITS
//     - parallax effect
// 2.PLUG INS
//     - click to show with css anim with sister binding
//     - click to change background with if binding



///////////CODE INITS

//Parallax Effect

        // (function($) {
        //     $('.background').each(function(){
        //         $(this).parallax('50%', 0.5, true);
        //     })
        // }(jQuery));



////////// PLUG INS


// Click to show with css anim with sister binding

// serviceSlider ('slider element' , 'buttons element');

var serviceSlider = function(slidersElem,buttonsElem){
     // vars
    var sliders = $(slidersElem).hide();
    var slidersOrder = sliders.each(function(i){
                                    var i = i - 1;
                                    $(this).addClass("slider"+(i+1));
                                });

    $(buttonsElem).on('click',function(){
        var currentBtn = $(this).index();
        var currentSlider = $(".slider"+currentBtn);

        // toggle the slider btns
        $(this)
            .fadeTo('slow' , 0.7)
            .siblings().css({'opacity' : '1'});

        // hide all sliders
        sliders.hide();

        // show slider and scroll to it
        currentSlider
            .show()
            .addClass('pt-page-rotateUnfoldTop')
            .delay(900);
        $('body')
            .scrollTo(currentSlider,{duration:'slow', offsetTop : '50'});
            event.preventDefault();

    }); // end .on

}; // end serviceSlider



// Click to change background with if binding

var headerBkgd = function(){
    var button = $('.pt-indicators li');
    var btnOrder = button.each(function(i){
                                    var i = i - 1;
                                    $(this).addClass("headerBkgdBtn"+(i+1));
                                });

    $(button).on('click', function(){
        if ($(this).hasClass('headerBkgdBtn0')) {
            $('section.header-17-sub').css('background-color', '#0D8AD1');
        } else if ($(this).hasClass('headerBkgdBtn1')) {
            $('section.header-17-sub').css('background-color', '#d15b05');
        } else if ($(this).hasClass('headerBkgdBtn2')) {
            $('section.header-17-sub').css('background-color', '#00b877');
        } 
    }); // end .on click

}; // end header background
        