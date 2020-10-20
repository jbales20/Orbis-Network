// Platform Detector. This detects if the user is on PlayStation

const version = navigator.appVersion;
const submit = document.querySelector("#user_convert");
let platform = null
if (version.includes("PlayStation")==true){
    platform = "PlayStation"
}

const output_text = document.querySelector("#output_text")
var short_url = "";
var titleID = "";
var input = "";
var i = 0;
submit.addEventListener("click", link_gen);

function link_gen(){
    i = 0;
    input = document.getElementById('user_link');
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
    console.log(input)
    var titleID = input.substring(
        input.indexOf("-") + 1, 
        input.lastIndexOf("_")
    );
    console.log(titleID)
    if (platform == "PlayStation"){
        var start = "psns:browse?product="
        input = start + input
        platform_text.innerHTML = "You're platform is PlayStation"
    }else{
        platform_text.innerHTML = "You're not on PlayStation"
        // When my short domain is up, this address will change.
        var start = "http://orbisconverter.com/short.html?"
        input = start + input
        test3 = input;
        test4 = titleID;
        console.log(test4)
    }
    shorten();
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

function shorten(){
    console.log(test4);
    let linkRequest = {
        destination: test3,
        domain: { fullName: "orbis.click" }
        , slashtag: test4
        , title: test4
      }
      
      let requestHeaders = {
        "Content-Type": "application/json",
        "apikey": "7858c7abacb349f2864f1a2d09792560",
        "workspace": "1639e633ce004d80a1018585c407a509"
      }
      $.ajax({
        url: "https://api.rebrandly.com/v1/links",
        type: "post",
        data: JSON.stringify(linkRequest),
        headers: requestHeaders,
        dataType: "json",
        success: (link) => {
          console.log(`Long URL was ${link.destination}, short URL is ${link.shortUrl}`);
          let short_url = link.shortUrl;
          change(short_url);
        }
      })
      .fail(
          change()
      )
      ;
    }

    function change(url){
        console.log(i);
        if (i === 0){
            i += 1;
            console.log(titleID);
            if (url === undefined){
                url = "orbis.click/" + test4;
            }
            url = "http://" + url;
            var url = url.link(url);
            var test = ((url + "<br>" + output_text.innerHTML))
            output_text.innerHTML = test;
        }
    }