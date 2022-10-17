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

function main() {
    let intervalID  = setInterval((event) => {
        let o = document.getElementById('sb_opportunities').children[1];
        o.innerHTML = 'Dashboards';
    }, 10);
    let finished = false;
    while (!finished)) {
        if (!!document.getElementById('sb_opportunities')) {
            finished = true;
            clearInterval(intervalID);
        }
    }
}

main();
