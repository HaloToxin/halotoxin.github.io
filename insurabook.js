//  | This is the main javascript file for use with the Insurabook CRM
//  | 
//  | 
//  | Date: 10/13/2022
//  | Author(s): Jeffrey Robinson II

//  | This if statement can check for text within the current url
//  | The '-1' means 'not found'

function urlContains(targets) {
    let flag = false;

    for (let i = 0; i < targets.length; i++){
        if (document.location.href.indexOf(targets[i]) > -1) { 
            flag = true;
        }
    }

    return flag;

    
    
}

function favicon(url) {
    var link = document.querySelector("link[rel~='icon']");
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.getElementsByTagName('head')[0].appendChild(link);
    }
    link.href = url;
}

function main() {
    favicon('https://halotoxin.github.io/IB-Favicon.png');
}

main();
