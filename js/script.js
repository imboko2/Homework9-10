$(function() {
//                //JavaScript Animation
//
// function slideLeft(el , duration, slideLength) {
//     var leftPosition = parseInt(el.style.left) || 0;
//     var time = 0;
//     var fps = 50;
//    var interval = setInterval(function () {
//
//        if (time >1000){
//            clearInterval(interval);
//            return;
//        }
//         leftPosition += slideLength/(duration/fps);
//        time += duration/fps;
//         el.style.left = leftPosition + 'px'
//     }, duration/fps);
// }
// var box = document.querySelector('.js-box');
// box.addEventListener('click', function () {
//     slideLeft(box , 1000, 200);
// });
//
//               //jQuery animation
// $('.jquery-box').on('click', function () {
//     $(this).animate({
//         left: '+=300'
//
//     }, 1000, 'easeInBack');
//                });
//
//
//
//                //CSS ANIMATION
//         $('.css-box').on('click',function () {
//             $(this).addClass('css-box-animated');
//         });


    (function($) {
        $(function() {
            $('.jcarousel').jcarousel();

            $('.jcarousel-control-prev')
                .on('jcarouselcontrol:active', function() {
                    $(this).removeClass('inactive');
                })
                .on('jcarouselcontrol:inactive', function() {
                    $(this).addClass('inactive');
                })
                .jcarouselControl({
                    target: '-=1'
                });

            $('.jcarousel-control-next')
                .on('jcarouselcontrol:active', function() {
                    $(this).removeClass('inactive');
                })
                .on('jcarouselcontrol:inactive', function() {
                    $(this).addClass('inactive');
                })
                .jcarouselControl({
                    target: '+=1'
                });

            $('.jcarousel-pagination')
                .on('jcarouselpagination:active', 'a', function() {
                    $(this).addClass('active');
                })
                .on('jcarouselpagination:inactive', 'a', function() {
                    $(this).removeClass('active');
                })
                .jcarouselPagination();
        });
    })(jQuery);



    $("#default-usage-select").selectbox().bind('change', function(){
        $('<div>Value of #default-usage-select changed to: '+$(this).val()+'</div>').appendTo('#demo-default-usage .demoTarget').fadeOut(5000, function(){
            $(this).remove();
        });
    });


    function changeCheck(el)
    {
        var el = el,
            input = el.find("input").eq(0);
        if(el.attr("class").indexOf("niceCheckDisabled")==-1)
        {
            if(!input.attr("checked")) {
                el.addClass("niceChecked");
                input.attr("checked", true);
            } else {
                el.removeClass("niceChecked");
                input.attr("checked", false).focus();
            }
        }
        return true;
    }
    function changeVisualCheck(input)
    {
        var wrapInput = input.parent();
        if(!input.attr("checked")) {
            wrapInput.removeClass("niceChecked");
        }
        else
        {
            wrapInput.addClass("niceChecked");
        }
    }
    function changeCheckStart(el)
    {
        try
        {
            var el = el,
                checkName = el.attr("name"),
                checkId = el.attr("id"),
                checkChecked = el.attr("checked"),
                checkDisabled = el.attr("disabled"),
                checkValue = el.attr("value");
            checkTab = el.attr("tabindex");
            if(checkChecked)
                el.after("<span class='niceCheck niceChecked'>"+
                    "<input type='checkbox'"+
                    "name='"+checkName+"'"+
                    "id='"+checkId+"'"+
                    "checked='"+checkChecked+"'"+
                    "value='"+checkValue+"'"+
                    "tabindex='"+checkTab+"' /></span>");
            else
                el.after("<span class='niceCheck'>"+
                    "<input type='checkbox'"+
                    "name='"+checkName+"'"+
                    "id='"+checkId+"'"+
                    "value='"+checkValue+"'"+
                    "tabindex='"+checkTab+"' /></span>");
            if(checkDisabled)
            {
                el.next().addClass("niceCheckDisabled");
                el.next().find("input").eq(0).attr("disabled","disabled");
            }
            el.next().bind("mousedown", function(e) { changeCheck(jQuery(this)) });
            el.next().find("input").eq(0).bind("change", function(e) { changeVisualCheck(jQuery(this)) });
            if(jQuery.browser.msie)
            {
                el.next().find("input").eq(0).bind("click", function(e) { changeVisualCheck(jQuery(this)) });
            }
            el.remove();
        }
        catch(e){
        }
        return true;
    }





    });



$(document).ready(function() {
    $( '.dropdown' ).hover(
        function(){
            $(this).children('.sub-menu').slideDown(200);
        },
        function(){
            $(this).children('.sub-menu').slideUp(200);
        }
    );
});

$(function () {
    $(".sex").mouseover(function(){
        jQuery(".sex").animate({
            backgroundColor: "#abcdef"
        }, 1500 );
    });
    $(".sex").museout(function(){
        jQuery(".sex").animate({
            backgroundColor: jQuery.Color({ saturation: 0 })
        }, 1500 );
    });
});






































