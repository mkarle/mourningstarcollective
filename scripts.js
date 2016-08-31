var clicked = false;
var revertBackground = function () {
    if (!clicked) {
        $("#large-logo").attr("src", "assets/large/gold_160407_Mourningstar_logos_lg_09.png")
        $("body").css("background-color", "#14322c");
    }
}
var revertAll = function () {
        if (clicked) {
            clicked = false;
            revertBackground();
            $("#large-logo-container").animate({
                height: '30em',
                width: '100%'
            });
            
            $('#logo-wrapper').animate({
                width: '30em'
            })
            $("#large-logo").css("width", "30em").animate({
                height: '30em',
                width: '30em'
            }).css("cursor","auto");

            $("#sections").css("position", "").css("top", "100%")
                .children().show();
            $(".section-text").hide();
            $(".section-header").css("text-align", "center").css("display", "flex");

        }
}

window.onload = function () {

    $("#industry").hover(function () {
        $("#large-logo").attr("src","assets/large/gold_160407_Mourningstar_logos_lg_08.png")
        $("body").css("background-color", "#141842");
    }, revertBackground
    );

    $("#industry").click(function () {
        clicked = true;
        $("#large-logo").attr("src", "assets/large/gold_160407_Mourningstar_logos_lg_08.png")
        $("body").css("background-color", "#141842");
    })

    $("#art").hover(function () {
        $("#large-logo").attr("src", "assets/large/gold_160407_Mourningstar_logos_lg_07.png")
        $("body").css("background-color", "#131112");
    }, revertBackground
    );
    $("#art").click(function () {
        clicked = true;
        $("#large-logo").attr("src", "assets/large/gold_160407_Mourningstar_logos_lg_07.png")
        $("body").css("background-color", "#131112");
    });

    $("#community").hover(function () {
        $("#large-logo").attr("src", "assets/large/gold_160407_Mourningstar_logos_lg_10.png")
        $("body").css("background-color", "#44121D");
    }, revertBackground
    );
    $("#community").click(function () {
        clicked = true;
        $("#large-logo").attr("src", "assets/large/gold_160407_Mourningstar_logos_lg_10.png")
        $("body").css("background-color", "#44121D");
    })
    $("#large-logo").click(revertAll)
    $("#mourningstar-name").click(revertAll)
    $("#sections").children().click(function () {
       
        if ($(window).width() > 900) {
            $("#large-logo-container").animate({
                height: '30em',
                width: '15em',

            });
            $('#logo-wrapper').animate({
                width: '15em'
            })
            $("#large-logo").css("width", "30em").animate({
                height: '15em',
                width: '15em'
            }).css("cursor", "pointer");

            $(this).parent().css("position", "absolute");
            $(this).parent().animate({
                top: '0',
            });
            $(this).css("display", "inline");
            $(this).css("text-align", "left");
            $(this).children().show();
            $(this).siblings().hide();
        }
        else {
            $("#large-logo-container").animate({
                height:'15em'
            })
            $('#logo-wrapper').animate({
                width: '15em'
            })
            $("#large-logo").css("width", "30em").animate({
                height: '15em',
                width: '15em'
            }).css("cursor", "pointer");
            
            $(this).parent().animate({
                top: '0',
            });
            $(this).css("display", "inline");
            $(this).css("text-align", "left");
            $(this).children().show();
            $(this).siblings().hide();

        }
    })
}