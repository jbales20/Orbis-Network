var input = window.location.href;
var redirect = document.querySelector("#test");
var redirect = document.querySelector("#test2");
function test(){
    input = input.substring(input.indexOf("?") + 1);
    console.log(input)
    var link_start = "https://store.playstation.com/en-us/product/UP4882-"
    var link_end = "_00-BEATSABERFULL000"
    var link = link_start + input + link_end;
    var place = document.getElementById('test2').src;
    console.log(link)
    console.log(place)
}

function hi(){
    var start = "psns:browse?product="
    input = start + input + "-BEATSABERFULL000"
    text = "Click here"
}