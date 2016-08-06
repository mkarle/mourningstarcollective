var clicked = false;
var revert = function () {
    if (!clicked) {
        $("#large-logo").attr("src", "assets/large/gold_160407_Mourningstar_logos_lg_09.png")
        $("body").css("background-color", "#14322c");
    }
}
window.onload = function () {
    $("#industry").hover(function () {
        $("#large-logo").attr("src","assets/large/gold_160407_Mourningstar_logos_lg_08.png")
        $("body").css("background-color", "#141842");
    }, revert
    );

    $("#industry").click(function () {
        clicked = true;
        $("#large-logo").attr("src", "assets/large/gold_160407_Mourningstar_logos_lg_08.png")
        $("body").css("background-color", "#141842");
    })

    $("#art").hover(function () {
        $("#large-logo").attr("src", "assets/large/gold_160407_Mourningstar_logos_lg_07.png")
        $("body").css("background-color", "#131112");
    }, revert
    );
    $("#art").click(function () {
        clicked = true;
        $("#large-logo").attr("src", "assets/large/gold_160407_Mourningstar_logos_lg_07.png")
        $("body").css("background-color", "#131112");
    });

    $("#community").hover(function () {
        $("#large-logo").attr("src", "assets/large/gold_160407_Mourningstar_logos_lg_10.png")
        $("body").css("background-color", "#44121D");
    }, revert
    );
    $("#community").click(function () {
        clicked = true;
        $("#large-logo").attr("src", "assets/large/gold_160407_Mourningstar_logos_lg_10.png")
        $("body").css("background-color", "#44121D");
    })
    $("#sections").children().click(function () {
        $("#large-logo-container").animate({
            height: '30em',
            width: '15em',

        });
        $('#logo-wrapper').animate({
            width: '15em'
        })
        $("#large-logo").css("width","30em").animate({
            height: '15em',
            width: '15em',
            left: '0'
        });

        $(this).parent().css("position", "absolute");
        $(this).parents().animate({
            top: '0',
        })
        $(this).css("text-align", "left")
        $(this).children().show()
        $(this).siblings().hide();
        $(this).removeClass("col-md-2");
        $(this).children().removeClass("col-md-2")
        $(this).removeClass("col-md-offset-1")
        $(this).addClass("col-md-offset-2")
    })
}