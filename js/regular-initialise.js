function StartPage() {

    if ($(".menu-button").length) {
        var windowWidth = $(window).width();
        var centerWrapperWidth = $("header").find(".center-wrapper").width();
        var $centerWrapper = $("header").find(".center-wrapper");
        var menuButtonLeft = $(".menu-button").position.left;
        var $menuButton = $(".menu-button");
        var menuTabletButtonLeft = $(".menu-tablet-button").position.left;
        var $menuTabletButton = $(".menu-tablet-button");
        var cashboxRight = $("a.cashbox").position.right;
        var $cashboxRight = $("a.cashbox");
        var regButtonRight = $("a.reg-button").position.right;
        var $regButtonRight = $("a.reg-button");

        var Center1280L = (window.matchMedia("screen and (min-width:1280px) and (orientation:landscape"));
        if (Center1280L.matches) {
            centerWrapperWidth = 1020;
            menuButtonLeft = 18;
            menuTabletButtonLeft = 18;
            regButtonRight = 15;
            cashboxRight = 6;
        }
        else {
            var Center960L = (window.matchMedia("screen and (min-width:960px) and (orientation:landscape"));
            if (Center960L.matches) {
                centerWrapperWidth = 746;
                menuButtonLeft = 18;
                menuTabletButtonLeft = 18;
                regButtonRight = 15;
                cashboxRight = 6;
            }
            else {
                var Center800P = (window.matchMedia("screen and (min-width:800px) and (orientation:portrait"));
                if (Center800P.matches) {
                    centerWrapperWidth = windowWidth - 70;
                    menuButtonLeft = 18;
                    menuTabletButtonLeft = 18;
                    regButtonRight = 14;
                    cashboxRight = 8;
                }
                else {
                    var Center768P = (window.matchMedia("screen and (min-width:768px) and (orientation:portrait)"));
                    if (Center768P.matches) {
                        centerWrapperWidth = windowWidth - 70;
                        menuButtonLeft = 18;
                        menuTabletButtonLeft = 18;
                        regButtonRight = 14;
                        cashboxRight = 8;
                    }
                    else {
                        var Center736L = (window.matchMedia("screen and (min-width:736px) and (orientation:landscape)"));
                        if (Center736L.matches) {
                            centerWrapperWidth = windowWidth - 26;
                            menuButtonLeft = 14;
                            menuTabletButtonLeft = 14;
                            regButtonRight = 11;
                            cashboxRight = 4;
                        }
                        else {
                            var Center640L = (window.matchMedia("screen and (min-width:640px) and (orientation:landscape)"));
                            if (Center640L.matches) {
                                centerWrapperWidth = windowWidth - 20;
                                menuButtonLeft = 14;
                                menuTabletButtonLeft = 14;
                                regButtonRight = 11;
                                cashboxRight = 4;
                            }
                            {
                                var Center600P = (window.matchMedia("screen and (min-width:600px) and (orientation:portrait)"));
                                if (Center600P.matches) {
                                    centerWrapperWidth = windowWidth - 30;
                                    menuButtonLeft = 14;
                                    menuTabletButtonLeft = 14;
                                    regButtonRight = 11;
                                    cashboxRight = 4;
                                }
                                else {
                                    var Center480L = (window.matchMedia("screen and (min-width:480px) and (orientation:landscape)"));
                                    if (Center480L.matches) {
                                        centerWrapperWidth = windowWidth - 20;
                                        menuButtonLeft = 10;
                                        menuTabletButtonLeft = 10;
                                        regButtonRight = 6;
                                        cashboxRight = 2;
                                    }
                                    else {
                                        var Center414P = (window.matchMedia("screen and (min-width:414px) and (orientation:portrait)"));
                                        if (Center414P.matches) {
                                            centerWrapperWidth = windowWidth - 14;
                                            menuButtonLeft = 10;
                                            menuTabletButtonLeft = 10;
                                            regButtonRight = 6;
                                            cashboxRight = 2;
                                        }
                                        else {
                                            var CenterP = window.matchMedia("screen and (orientation:portrait)");
                                            if (CenterP.matches) {
                                                centerWrapperWidth = windowWidth - 20;
                                                menuButtonLeft = 10;
                                                menuTabletButtonLeft = 10;
                                                regButtonRight = 6;
                                                cashboxRight = 2;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }

                }
            }
        }

        $centerWrapper.css("width", centerWrapperWidth + "px");
        $menuButton.css("left", menuButtonLeft + "px");
        $cashboxRight.css("right", cashboxRight + "px");
        $menuTabletButton.css("left", menuTabletButtonLeft + "px");
        $regButtonRight.css("right", regButtonRight + "px");

    }
}

function StartModalPage() {
    if ($("body.modal-pattern").length) {
        var windowWidth = $(window).width();
        var $modalCenterWrapper = $(".modal-pattern").find(".center-wrapper").first();
        var modalCenterWrapperWidth = $modalCenterWrapper.width();
        var Center1280L = (window.matchMedia("screen and (min-width:1280px) and (orientation:landscape"));
        if (Center1280L.matches) {
            modalCenterWrapperWidth = windowWidth - 40;
        }
        else {
            var Center960L = (window.matchMedia("screen and (min-width:960px) and (orientation:landscape"));
            if (Center960L.matches) {
                modalCenterWrapperWidth = windowWidth - 30;
            }
            else {
                var Center800P = (window.matchMedia("screen and (min-width:800px) and (orientation:portrait"));
                if (Center800P.matches) {
                    modalCenterWrapperWidth = windowWidth - 30;
                }
                else {
                    var Center768P = (window.matchMedia("screen and (min-width:768px) and (orientation:portrait)"));
                    if (Center768P.matches) {
                        modalCenterWrapperWidth = windowWidth - 30;
                    }
                    else {
                        var Center736L = (window.matchMedia("screen and (min-width:736px) and (orientation:landscape)"));
                        if (Center736L.matches) {
                            modalCenterWrapperWidth = windowWidth - 26;
                        }
                        else {
                            var Center640L = (window.matchMedia("screen and (min-width:640px) and (orientation:landscape)"));
                            if (Center640L.matches) {
                                modalCenterWrapperWidth = windowWidth - 20;
                            }
                            {
                                var Center600P = (window.matchMedia("screen and (min-width:600px) and (orientation:portrait)"));
                                if (Center600P.matches) {
                                    modalCenterWrapperWidth = windowWidth - 30;
                                }
                                else {
                                    var Center480L = (window.matchMedia("screen and (min-width:480px) and (orientation:landscape)"));
                                    if (Center480L.matches) {
                                        modalCenterWrapperWidth = windowWidth - 20;
                                    }
                                    else {
                                        var Center414P = (window.matchMedia("screen and (min-width:414px) and (orientation:portrait)"));
                                        if (Center414P.matches) {
                                            modalCenterWrapperWidth = windowWidth - 14;
                                        }
                                        else {
                                            var CenterP = window.matchMedia("screen and (orientation:portrait)");
                                            if (CenterP.matches) {
                                                modalCenterWrapperWidth = windowWidth - 20;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }

                }
            }
        }
        $modalCenterWrapper.css("width", modalCenterWrapperWidth + "px");
        $(".btn.close.enter").css("right",0);
    }
}

function SetWinCupPosition() {
    if ($(".win-cup").length) {
        var $winCup = $(".win-cup");
        var winCupWidth = $winCup.width();
        var centerWrapperWidth = $winCup.parent(".center-wrapper").width();
        var winCupRight = (centerWrapperWidth - winCupWidth)/2;
        $winCup.css("right",winCupRight + "px");
    }
}

$(function () {
    StartPage();
    StartModalPage();
    SetWinCupPosition();
});

$(function () {
    $(window).resize(function () {
        StartPage();
        StartModalPage();
        SetWinCupPosition();
    });
});