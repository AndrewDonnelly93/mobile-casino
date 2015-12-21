$(function () {
    $(".cashbox-menu").hide();
    $(".show").show();
    $(".tabs").hide();
    $(".open-bonuses-screen").hide();
    $(".profile").hide();
    $("#open-cashbox-menu").on("click", function () {
        if ($(".cashbox-menu").is(":visible")) {
            $(".cashbox-menu").hide().removeClass("active");
            $("#open-cashbox-menu").removeClass("active");
            $(".cashbox-menu-item").removeClass("active");
            $("#open-cashbox-menu").find(".arrow-nav").removeClass("active");
            $(".tabs").hide();
        } else {
            $(".cashbox-menu").show();
            $("#open-cashbox-menu").addClass("active");
            $("#open-cashbox-menu").find(".arrow-nav").addClass("active");
            $("a.tabs-open").first().click();
        }
    });
    $("#open-bonuses").on("click", function() {
       if ($(".open-bonuses-screen").is(":visible")) {
           $(".open-bonuses-screen").hide();
           $("#open-bonuses").find(".arrow-nav").removeClass("active");
       }
        else {
           $(".open-bonuses-screen").show();
           $("#open-bonuses").find(".arrow-nav").addClass("active");
       }
    });
    $("#open-profile").on("click", function() {
        if ($(".profile").is(":visible")) {
            $(".profile").hide();
            $("#open-profile").find(".arrow-nav").removeClass("active");
            $("#open-profile").css("margin-bottom","50px");
        }
        else {
            $(".profile").show();
            $("#open-profile").find(".arrow-nav").addClass("active")
            $("#open-profile").css("margin-bottom","20px");
        }
    });
    $("a.tabs-open").click(function (evt) {
        evt.preventDefault();
        $(".tabs").hide();
        $this = $(this);
        $(".cashbox-menu-item").removeClass("active");
        $this.parent().addClass("active");
        var panel = $this.attr("href");
        $(panel).show();
    });
    $("a.another").first().click();

if ($(".games-in-bonus").length) {
    $(".games-in-bonus-item").on("tap click", function () {
        $(".games-in-bonus-item").removeClass("selected");
        $(this).addClass("selected");
    });
}

});
