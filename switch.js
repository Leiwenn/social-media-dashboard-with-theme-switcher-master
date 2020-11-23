   
$("input[type=checkbox]").on("click", function(){
    if ($("body").hasClass("dark")){
        $("body").removeClass("dark");
    }
    else{
        $("body").addClass("dark");
    }
    $("header").css("background", "var(--dark-top-bg");
    $("body").css("background", "var(--dark-bg)");
    $(".dark, h1, h2, h3").css("color", "var(--dark-text-white)");
    $("body, .followers .card-link").css("color", "var(--dark-text-blue)");
    $(".facebook, .twitter, .instagram, .youtube, .overview .card").css("background", "var(--dark-card-bg)");
});


/* a revoir .slider:before  */
/*  */