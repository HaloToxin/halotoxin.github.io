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

    // Change the logo for the Digital Blend Leads subaccount @JakeWithSAM
    const targets = [
        'TR2M2XqUylHeOoLksd0z', // Video Blend Leads - VBL Snapshot Source
        'E8fz7WJmRxiBGMZAqVkU', // Evelynn Francisco
        's4RXQeAgtig0RLhoD9SB', // Donovan March - Synchronized Agency
        'YWifbVzd6shHgcL7mZeB', // Keri McCallister - Horse Creek Insurance
        'wTS2r9AFomCOfr863Rve', // Joshua Rockwood - Rocket Growth Strategies
        '9sxFwZ4WD4aqNXkejNZw', // Alex Jackson - The Jackson Agency
        'B8eUe9X61z05pHPFKJxf', // VBL Test Account
    ];

    const logoChanger = setInterval((event) => {
        try {
            var logo = document.querySelector("img.object-contain.agency-logo");
            if (urlContains(targets)) {
                logo.src = "https://halotoxin.github.io/DBL-Blender.png";
                logo.id="dbl-logo";
            }
        } catch (error) {
            console.log("Searching for Logo...");
        }
        
    }, 50);

    const titleChanger = setInterval((event) => {
        try {
            var title = document.getElementsByTagName('title')[0];
            console.log(title);
            if (urlContains(targets)) {
                title.innerText = "Video Blended Leads";
                clearInterval(titleChanger);
            }
        } catch (error) {
            console.log("Searching for Title...");
        }
    }, 50);
}

main();
