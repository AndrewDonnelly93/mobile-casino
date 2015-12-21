$(function(){
    if ($(".radio").length) {
        $(".radio").click(function () {
            $(".radio").removeClass("active");
            $(this).addClass("active");
        });
    }
    if ($(".checkbox").length) {
        $(".checkbox").click(function () {
            $(".checkbox").removeClass("active");
            $(this).addClass("active");
        });
    }
    if ($("#type-of-bill").length) {
        $("#type-of-bill").fancySelect();
        $("#type-of-bill").parent(".fancy-select").addClass("type-of-bill");
    }

    if ($(".type-of-purse").length) {
        $(".type-of-purse").fancySelect();
        $(".type-of-purse").parent(".fancy-select").addClass("type-of-purse");
    }

    if ($(".phone-number").length) {
        $(".phone-number").focus();
    }

    if ($(".valid-period").length) {
        $(".valid-period").fancySelect();
        $("#valid-period-month").parent(".fancy-select").addClass("valid-period-month");
        $("#valid-period-year").parent(".fancy-select").addClass("valid-period-year");

        $(".fancy-select").on("click", function() {
            if ($("ul.options").hasClass("open")) {
                $("ul.options").removeClass("open");
            }
            $(this).find("ul.options").addClass("open");
        });
    }

    if ($(".birth-date").length) {
        $(".birth-date").fancySelect();

        if ($("#birth-date-day").length) {
            $("#birth-date-day").parent(".fancy-select").addClass("birth-date-day");
        }
        if ($("#birth-date-month").length) {
            $("#birth-date-month").parent(".fancy-select").addClass("birth-date-month");
        }
        if ($("#birth-date-year").length) {
            $("#birth-date-year").parent(".fancy-select").addClass("birth-date-year");
        }

        $(".fancy-select").on("click", function() {
                if ($("ul.options").hasClass("open")) {
                    $("ul.options").removeClass("open");
            }
            $(this).find("ul.options").addClass("open");
        });
    }

    if ($("#telephone-number").length) {
        $("#telephone-number").mask("x0y000z000q00q00", {
            translation: {
                "x": {
                    pattern: /\+/,
                    fallback: "+"
                },
                "y": {
                    pattern: /\(/,
                    fallback: "("
                },
                "z": {
                    pattern: /\)/,
                    fallback: ")"
                },
                "q": {
                    pattern: /\-/,
                    fallback: '-'
                },
                placeholder: "+_(___)__-__-__"
            }
        });
    }

    if ($("#phone").length) {
        $("#phone").mask("y000z000q00q00", {
            translation: {
                "y": {
                    pattern: /\(/,
                    fallback: "("
                },
                "z": {
                    pattern: /\)/,
                    fallback: ")"
                },
                "q": {
                    pattern: /\-/,
                    fallback: '-'
                },
                placeholder: "(___)__-__-__"
            }
        });
    }

});
