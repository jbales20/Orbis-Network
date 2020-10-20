function shorten(){
let linkRequest = {
    destination: input,
    domain: { fullName: "orbis.click" }
    , slashtag: titleID
    , title: titleID
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
    }
  });
}