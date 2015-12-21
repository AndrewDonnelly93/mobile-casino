function LaunchPage() {
    if ($("td.modal-pattern").length) {
        var windowHeight = $(window).height();
        var tableHeight = 0;
        if ($("td.modal-pattern").height() < windowHeight) {
            tableHeight = $("td.modal-pattern").height();
        }
        if ( tableHeight < windowHeight ) {
            $("td.modal-pattern").css("height", windowHeight + "px");
        }
    }
}
$(document).ready(function() {
    LaunchPage();
});
$(function() {
    $(window).resize(function() {
        LaunchPage();
    });
});

