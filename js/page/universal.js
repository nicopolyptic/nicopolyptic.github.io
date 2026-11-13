

$(document).ready(function() {
    $("ul#menu li a")
        .filter(function (index){return this.href == window.location.href; })
        .click(function(){return false;}).addClass("current-page-link");

    $("#banner a")
        .filter(function (index){return this.href == window.location.href || window.location.href == "https://nicopolyptic.github.io/"; })
        .click(function(){return false;}).addClass("current-page-home");

    var overSwitch = function(){$("#projects").css("display","block");$("#page").fadeTo(200, 0.3);};
    var outSwitch = function(){$("#projects").css("display","none");$("#page").fadeTo(100, 1);};
    $("#projects-item").hoverIntent({over:overSwitch,timeout:500, out:outSwitch});
//        $("#gradient").css({ opacity: 0.7 });
//        $("#block").css({ opacity: 0.7 });

    //stick the footer at the bottom of the page if we're on an iPad/iPhone due to viewport/page bugs in mobile webkit
    if(navigator.platform == 'iPad' || navigator.platform == 'iPhone' || navigator.platform == 'iPod')
    {
         $("#gradient").css("position", "static");
         $("#block").css("position", "static");
    };

});