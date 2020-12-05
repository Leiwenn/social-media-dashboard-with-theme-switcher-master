   
$("input[type=checkbox]").on("click", function(){
    
    $("header").toggleClass("dark-top-bg", "top-bg");
    $("body").toggleClass("dark-bg", "bg");
    $(".dark, h1, h2, h3").toggleClass("text-white", "text-dark-blue");
    $("body, .followers .card-link").toggleClass("text-blue", "text-gray-blue");
    $(".facebook, .twitter, .instagram, .youtube, .overview .card").toggleClass("dark-card-bg", "card-bg");
    
});