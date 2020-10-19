var input = window.location.href;

function start(){
    input = input.substring(input.indexOf("?") + 1);
    var link = "http://orbisconverter.com/short.html?" + input;
    console.log(link);
    window.location.href = link;
}