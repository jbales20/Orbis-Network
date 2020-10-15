// Platform Detector. This detects if the user is on PlayStation
const version = navigator.appVersion;
const submit = document.querySelector("#user_convert");
let platform = null
if (version.includes("PlayStation")==true){
    platform = "PlayStation"
}

const output_text = document.querySelector("#output_text")



submit.addEventListener("click", link_gen);

function link_gen(){
    var input = document.getElementById('user_link');
    input = input.value;
    input = input.substring(51, input.length - 20);
    if (platform == "PlayStation"){
        var start = "psns:browse?product="
        input = start + input
    }else{
        var start = "https://orbis.click/"
        input = start + input
    }
    input = input.link(input);
    var test = ((input + "<br>" + output_text.innerHTML))
    output_text.innerHTML = test
}