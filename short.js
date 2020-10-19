var input = window.location.href;

function start(){
    input = input.substring(input.indexOf("?") + 1);
    title = input.substring(20, 26);
    title = title.replace(/\d+/g, '');
    title = title.toLowerCase();
    title = title.charAt(0).toUpperCase() + title.slice(1);

    var link_start = "psns:browse?product="
    link = link_start + input;
    var please = document.querySelector("#label");
    please.outerHTML = "<a id='label' href='" + link + "'>Click here to continue to " + title + " on your PlayStation System.</a>";
    

}