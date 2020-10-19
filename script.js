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
    if (input.includes("product")){
        input = input.substring(input.indexOf("product") + 8);
    } else if (input.includes("grid")){
        input = input.substring(input.indexOf("grid") + 5);
    }else{
        input = "Unknown link. Please use link that had either grid or product in the URL";
        output_text.innerHTML = input;
        return;
    }
    if (platform == "PlayStation"){
        var start = "psns:browse?product="
        input = start + input
        platform_text.innerHTML = "You're platform is PlayStation"
    }else{
        platform_text.innerHTML = "You're not on PlayStation"
        // When my short domain is up, this address will change.
        var start = "http://orbisconverter.com/short.html?"
        input = start + input
        console.log(input)
        console.log(input)
    }
    input = input.link(input);
    var test = ((input + "<br>" + output_text.innerHTML))
    output_text.innerHTML = test
}

function start(){
    platform_text = document.querySelector("#platform");
    directions = document.querySelector("#directions");
    document.getElementById("container").style.width = document.getElementById("user_link").style.width + "370px";
    if (platform == "PlayStation"){
        platform_text.innerHTML = "You're platform is PlayStation"
        directions.innerHTML = "In a new tab, copy a store.playstation.com link and then place it into the textbox next to convert. Press convert." +
        " Click on the link inside the output.";
        }else{
        directions.innerHTML = "In a new tab, copy a store.playstation.com link and then place it into the textbox next to convert. Press convert." +
        " Afterwards, on your PlayStation, open your browser and visit the orbis.click website.";
        platform_text.innerHTML = "You're not on PlayStation"
    }
}