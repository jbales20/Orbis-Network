var input = window.location.href;
var redirect = document.querySelector("#test");
function test(){
    input = input.substring(input.indexOf("?") + 1);
    console.log(input)
    var start = "psns:browse?product="
    input = start + input + "-BEATSABERFULL000"
    text = "Click here"
    redirect.innerHTML = text.link(input)
}