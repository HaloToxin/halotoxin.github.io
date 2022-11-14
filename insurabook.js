//  | This is the main javascript file for use with the Insurabook CRM
//  | 
//  | 
//  | Date: 10/13/2022
//  | Author(s): Jeffrey Robinson II

//  | This if statement can check for text within the current url
//  | The '-1' means 'not found'

function urlContains() {
    if (document.location.href.indexOf('Target') > -1){ 
    //Your code goes here
    }
}

function favicon() {
    var link = document.querySelector("link[rel~='icon']");
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.getElementsByTagName('head')[0].appendChild(link);
    }
    link.href = 'https://jeffreywithsam.github.io/IB-Favicon.png';
}

function main() {
    favicon();
}

main();
