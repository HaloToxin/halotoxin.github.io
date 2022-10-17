//   ___________________________________________________________________
//  | This is the main javascript file for use with the CHAMP CRM       |
//  |                                                                   |
//  |                                                                   |
//  | Date: 10/13/2022                                                  |
//  | Author(s): Jeffrey Robinson II                                    |
//  |___________________________________________________________________|

//  | This if statement can check for text within the current url
//  | The '-1' means 'not found'

function urlContains() {
    if (document.location.href.indexOf('Target') > -1){ 
    //Your code goes here
    }
}

function main() {
    // | Find and replace the text for the sidebar shortcut for 'Opportunities' to 'Dashboards'
    let intervalID  = setInterval((event) => {
        let o = document.getElementById('sb_opportunities').children[1];
        o.innerHTML = 'Dashboards';
    }, 10);
    setInterval((event) => {
        if (!!document.getElementById('sb_opportunities')) {
            finished = true;
            clearInterval(intervalID);
        }
    }, 10);
    
    // | Find and replace the text for 'Opportunities' to 'Dashboards'
    let intervalID  = setInterval((event) => {
        let p = document.getElementById('').children[1];
        p.innerHTML = 'Dashboards';
    }, 10);
    setInterval((event) => {
        if (!!document.getElementById('sb_opportunities')) {
            finished = true;
            clearInterval(intervalID);
        }
    }, 10);
    
}

main();
