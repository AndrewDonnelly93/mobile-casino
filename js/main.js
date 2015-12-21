$(function() {
    if (($(".menu-button").length) || ($(".menu-tablet-button").length)) {
        if ($(".menu-button").is(":visible")) {
            $(".sb-slidebar").html($("#menu")).attr("data-sb-width","300px");
            $.slidebars({
                scrollLock: true
            });
        }
        else {
                $(".sb-slidebar").html($("#tablet-portrait-menu")).attr("data-sb-width","230px");
                $.slidebars({
                    scrollLock: true
                });
        }
    }
});

$(function() {
    if ($(".button-filter").length) {

        $(".button-filter").fancybox({
                autoSize: true,
                closeClick: false,
                openEffect: 'none',
                closeEffect: 'none',
                padding: 0,
                minWidth: 300,
                afterLoad: function () {
                    if ($(this.element).hasClass("over-hid")) {
                        $(".fancybox-inner").addClass("over-hid");
                    }
                },
            afterClose : function() {
                $(".filter").removeClass("click-filter");
            },
                tpl: {
                    closeBtn: '<a title="Close" class="fancybox-item fancybox-close top-close" href="javascript:;"></a>'
                }
            }).click( function() {
                $(".filter").addClass("click-filter");
            });
    }
});

$(function() {
   $(".menu-list li a").click(function() {
       $(".menu-list li a").removeClass("click-menu");
       $(this).addClass("click-menu");
   });
});

$(function() {
    $(".tablets-smartphones .main-menu-list li a").click(function() {
        $(".tablets-smartphones .main-menu-list li a").removeClass("click-tablet-menu");
        $(this).addClass("click-tablet-menu");
    });
});

(function($){
    $(window).load(function() {
    if ($(".games-list-tablet").length ){
        $(".games-list-tablet").mCustomScrollbar({
            theme: "inset"
        });
    }
    });
})(jQuery);
