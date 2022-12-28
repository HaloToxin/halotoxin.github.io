//  | This is the main javascript file for use with the Insurabook CRM
//  | 
//  | 
//  | Date: 10/13/2022
//  | Author(s): Jeffrey Robinson II

//  | This if statement can check for text within the current url
//  | The '-1' means 'not found'

function urlContains(String target) {
    if (document.location.href.indexOf(target) > -1){ 
        return true;
    } else {
        return false;
    }
    
}

function favicon() {
    var link = document.querySelector("link[rel~='icon']");
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.getElementsByTagName('head')[0].appendChild(link);
    }
    link.href = 'https://halotoxin.github.io/IB-Favicon.png';
}

function main() {
    favicon();
    
    // Change the logo for the Digital Blend Leads subaccount
    if (urlContains("TR2M2XqUylHeOoLksd0z")) {
        document.querySelector(".agency-logo")[0].src = "https://halotoxin.github.io/DBL-Blender.png";
    }
}

main();
