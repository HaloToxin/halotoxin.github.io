//  | This is the main javascript file for use with the Insurabook CRM
//  | 
//  | 
//  | Date: 10/13/2022
//  | Author(s): Jeffrey Robinson II

//  | This if statement can check for text within the current url
//  | The '-1' means 'not found'

function urlContains(target) {
    if (document.location.href.indexOf(target) > -1) { 
        return true;
    } else {
        return false;
    }
    
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

    // Change the logo for the Digital Blend Leads subaccount
    const logoChanger = setInterval((event) => {
        try {
            var logo = document.querySelector("img.object-contain.agency-logo")
            if (urlContains("TR2M2XqUylHeOoLksd0z")) {
                logo.src = "https://halotoxin.github.io/DBL-Blender.png";
                logo.id="dbl-logo";
            }
        } catch (error) {
            console.log("Searching for Logo...");
        }
        
    });
}

main();
