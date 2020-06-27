// select all divs and give them a purple backgroud
$("div").css("background","purple");

// select divs with class highlight and make them 200px wide
$("div.highlight").css("width", "200px");

// select the div with id "third" and give it an orange border
$("#third").css("border", "1px solid orange");

// BONUS: Select the first div ONLY and change its font color to pink
$("div").first().css("color", "pink");

// from solution -- it's faster because it's native css
// $("div:first-of-type").css("color", "pink");